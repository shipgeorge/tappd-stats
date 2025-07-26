#!/usr/bin/env python3
"""
Incremental Parallel Enhanced Scraper with Beer Types
Supports updating existing database by only pulling new data since last update
"""

try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
    from selenium.common.exceptions import TimeoutException, NoSuchElementException
    from bs4 import BeautifulSoup
    import time
    import json
    import csv
    from typing import List, Dict, Optional
    import re
    import argparse
    import os
    import gc
    import requests
    from urllib.parse import urljoin
    from concurrent.futures import ProcessPoolExecutor, as_completed
    import multiprocessing
    from datetime import datetime, timezone
    import pandas as pd
    from dateutil import parser as date_parser
    
    class IncrementalEnhancedVenueScraper:
        """Enhanced scraper with beer type extraction and incremental updates"""
        
        def __init__(self, cookies_file: str = None, headless: bool = True):
            self.cookies_file = cookies_file
            self.driver = None
            self.headless = headless
            self.beer_type_cache = {}  # Cache to avoid duplicate beer page requests
            self.session = requests.Session()  # For beer page requests
            self.setup_session()
            
        def setup_session(self):
            """Set up requests session for beer page fetching"""
            self.session.headers.update({
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            })
            
            # Load cookies for session if available
            if self.cookies_file and os.path.exists(self.cookies_file):
                try:
                    with open(self.cookies_file, 'r') as f:
                        cookies = json.load(f)
                    
                    for cookie in cookies:
                        self.session.cookies.set(
                            cookie['name'], 
                            cookie['value'], 
                            domain=cookie.get('domain', '.untappd.com')
                        )
                except Exception as e:
                    print(f"⚠️  Could not load cookies for session: {e}")
            
        def setup_driver(self):
            """Set up optimized Chrome driver"""
            chrome_options = Options()
            
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--disable-dev-shm-usage") 
            chrome_options.add_argument("--disable-extensions")
            chrome_options.add_argument("--disable-plugins")
            chrome_options.add_argument("--disable-images")
            chrome_options.add_argument("--disable-javascript")
            
            if self.headless:
                chrome_options.add_argument("--headless=new")
            
            chrome_options.add_argument("--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36")
            
            try:
                self.driver = webdriver.Chrome(options=chrome_options)
                self.driver.set_page_load_timeout(30)  # Longer timeout
                self.driver.implicitly_wait(5)  # Longer wait
                
                if not self.headless:
                    self.driver.set_window_size(1000, 700)
                
            except Exception as e:
                print(f"❌ Chrome driver setup failed: {e}")
                raise
        
        def load_cookies(self):
            """Load authentication cookies for Selenium"""
            if not self.cookies_file or not os.path.exists(self.cookies_file):
                return False
                
            try:
                with open(self.cookies_file, 'r') as f:
                    cookies = json.load(f)
                
                self.driver.get("https://untappd.com")
                time.sleep(1)
                
                for cookie in cookies:
                    try:
                        self.driver.add_cookie({
                            'name': cookie['name'],
                            'value': cookie['value'],
                            'domain': cookie.get('domain', '.untappd.com'),
                            'path': cookie.get('path', '/')
                        })
                    except:
                        continue
                
                return True
            except:
                return False
        
        def extract_venue_name_from_url(self, url: str) -> str:
            """Extract venue name from URL"""
            match = re.search(r'/v/([^/]+)/\d+', url)
            return match.group(1) if match else 'unknown_venue'
        
        def extract_beer_type_from_link(self, beer_link: str) -> Optional[str]:
            """Extract beer type from beer page with better error handling"""
            
            # Check cache first
            if beer_link in self.beer_type_cache:
                return self.beer_type_cache[beer_link]
            
            try:
                # Convert relative links to absolute
                if beer_link.startswith('/'):
                    beer_url = f"https://untappd.com{beer_link}"
                else:
                    beer_url = beer_link
                
                # Fetch beer page with extended timeout and retries
                max_retries = 3
                for retry in range(max_retries):
                    try:
                        response = self.session.get(beer_url, timeout=15)
                        response.raise_for_status()
                        break
                    except Exception as e:
                        if retry == max_retries - 1:
                            raise e
                        time.sleep(1)  # Wait before retry
                
                # Parse beer page
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Look for beer type in <p class="style"> under div with class name
                # Structure: div[class contains name] > p.style
                style_paragraphs = soup.find_all('p', class_='style')
                
                for p in style_paragraphs:
                    # Check if this p.style is under a div with "name" class
                    parent_div = p.find_parent('div')
                    if parent_div and 'name' in ' '.join(parent_div.get('class', [])):
                        beer_type = p.get_text().strip()
                        if beer_type:
                            self.beer_type_cache[beer_link] = beer_type
                            return beer_type
                
                # Fallback: try any p.style elements
                for p in style_paragraphs:
                    beer_type = p.get_text().strip()
                    if beer_type and len(beer_type) < 100:  # Reasonable length for beer type
                        self.beer_type_cache[beer_link] = beer_type
                        return beer_type
                
                self.beer_type_cache[beer_link] = None
                return None
                
            except Exception as e:
                print(f"❌ Error fetching beer type from {beer_link}: {e}")
                self.beer_type_cache[beer_link] = None
                return None
        
        def parse_activity_time(self, time_str: str) -> Optional[datetime]:
            """Parse activity time string to datetime object"""
            try:
                if not time_str:
                    return None
                # Parse the time string (format: "Mon, 21 Jul 2025 18:09:26 +0000")
                return date_parser.parse(time_str)
            except:
                return None
        
        def extract_activity_data_with_beer_types(self, html_content: str, venue_name: str, cutoff_time: Optional[datetime] = None) -> List[Dict]:
            """Extract activity data including beer types, stopping at cutoff time"""
            soup = BeautifulSoup(html_content, 'html.parser')
            activities = []
            
            activity_items = soup.find_all('div', class_='item')
            
            for i, item in enumerate(activity_items):
                activity_text = item.get_text()
                if 'is drinking a' not in activity_text:
                    continue
                
                activity_data = {'venue': venue_name}
                
                # Extract basic fields
                user_elem = item.find('a', class_='user')
                activity_data['user'] = user_elem.get_text().strip() if user_elem else ''
                
                time_elem = item.find('a', class_=['time', 'timezoner'])
                if time_elem:
                    time_value = time_elem.get('data-gregtime') or time_elem.get_text().strip()
                    activity_data['time'] = time_value
                    
                    # Check if this activity is older than cutoff time
                    if cutoff_time:
                        activity_time = self.parse_activity_time(time_value)
                        if activity_time and activity_time <= cutoff_time:
                            print(f"🛑 Reached cutoff time at activity {i+1}: {activity_time}")
                            break  # Stop processing older activities
                else:
                    activity_data['time'] = ''
                
                serving_img = item.find('img', alt=lambda x: x and x.lower() in ['bottle', 'can', 'draft', 'glass'])
                activity_data['serving'] = serving_img.get('alt', '').lower() if serving_img else ''
                
                rating_div = item.find('div', {'data-rating': True})
                if rating_div:
                    try:
                        activity_data['data_rating'] = float(rating_div.get('data-rating'))
                    except:
                        activity_data['data_rating'] = ''
                else:
                    activity_data['data_rating'] = ''
                
                # Extract beer name and find beer link
                pattern = r'is drinking an? (.+?) by (.+?) at'
                match = re.search(pattern, activity_text)
                if match:
                    activity_data['beer_name'] = match.group(1).strip()
                    activity_data['brewery'] = match.group(2).strip()
                    
                    # Find beer link in the activity item
                    beer_link = None
                    
                    # Look for links that contain the beer name or go to beer pages
                    links = item.find_all('a', href=True)
                    for link in links:
                        href = link.get('href')
                        link_text = link.get_text().strip()
                        
                        # Check if this is a beer link
                        if (href and '/b/' in href and 
                            (activity_data['beer_name'].lower() in link_text.lower() or
                             len(link_text) > 10)):  # Beer links often have longer descriptive text
                            beer_link = href
                            break
                    
                    # Extract beer type if we found a beer link
                    if beer_link:
                        beer_type = self.extract_beer_type_from_link(beer_link)
                        activity_data['beer_type'] = beer_type or ''
                        
                        # Longer delay to avoid overwhelming the server in parallel processing
                        if beer_link not in self.beer_type_cache:
                            time.sleep(1.0)  # 1s delay between new beer page requests
                    else:
                        activity_data['beer_type'] = ''
                    
                else:
                    activity_data['beer_name'] = ''
                    activity_data['brewery'] = ''
                    activity_data['beer_type'] = ''
                
                if activity_data['beer_name'] and activity_data['brewery']:
                    activities.append(activity_data)
            
            del soup
            return activities
        
        def scrape_venue_incremental(self, url: str, cutoff_time: Optional[datetime] = None, max_pages: int = 20, delay: float = 1.5) -> List[Dict]:
            """Scrape venue with incremental update support"""
            
            venue_name = self.extract_venue_name_from_url(url)
            print(f"🏢 Scraping {venue_name} incrementally (cutoff: {cutoff_time})")
            
            all_activities = []
            reached_cutoff = False
            
            try:
                self.setup_driver()
                
                print(f"🔑 Loading authentication cookies...")
                self.load_cookies()
                
                print(f"📄 Loading venue page...")
                self.driver.get(url)
                time.sleep(2)
                
                # Get first page
                try:
                    WebDriverWait(self.driver, 15).until(
                        EC.presence_of_element_located((By.CSS_SELECTOR, 'div.item'))
                    )
                    
                    page_source = self.driver.page_source
                    page_activities = self.extract_activity_data_with_beer_types(page_source, venue_name, cutoff_time)
                    
                    if page_activities:
                        all_activities.extend(page_activities)
                        print(f"✅ Page 1: {len(page_activities)} new activities")
                        
                        # Check if we reached cutoff on first page
                        if cutoff_time and page_activities:
                            last_activity_time = self.parse_activity_time(page_activities[-1].get('time', ''))
                            if last_activity_time and last_activity_time <= cutoff_time:
                                print(f"✅ Reached cutoff time on page 1")
                                reached_cutoff = True
                    else:
                        print(f"❌ No new activities found")
                        return []
                        
                except TimeoutException:
                    print(f"❌ Page load timeout")
                    return []
                
                # Continue pagination if we haven't reached cutoff
                if not reached_cutoff:
                    for page_num in range(2, max_pages + 1):
                        print(f"🔄 Loading page {page_num}...")
                        
                        try:
                            show_more_button = WebDriverWait(self.driver, 10).until(
                                EC.element_to_be_clickable((By.CSS_SELECTOR, 'a.more_checkins'))
                            )
                        except TimeoutException:
                            print(f"✅ No Show More button - reached end of available data")
                            break
                        
                        before_count = len(self.driver.find_elements(By.CSS_SELECTOR, 'div.item'))
                        
                        try:
                            self.driver.execute_script("arguments[0].scrollIntoView(true);", show_more_button)
                            time.sleep(0.5)
                            self.driver.execute_script("arguments[0].click();", show_more_button)
                            time.sleep(delay)
                            
                            success = False
                            for retry in range(5):
                                try:
                                    WebDriverWait(self.driver, 3).until(
                                        lambda driver: len(driver.find_elements(By.CSS_SELECTOR, 'div.item')) > before_count
                                    )
                                    success = True
                                    break
                                except TimeoutException:
                                    if retry < 4:
                                        time.sleep(1)
                                        continue
                            
                            if not success:
                                print(f"✅ Reached end of venue activities")
                                break
                            
                            after_count = len(self.driver.find_elements(By.CSS_SELECTOR, 'div.item'))
                            
                            if after_count <= before_count:
                                print(f"✅ No new activities on page {page_num}")
                                break
                            
                            # Extract activities with beer types from current page
                            current_source = self.driver.page_source
                            current_activities = self.extract_activity_data_with_beer_types(current_source, venue_name, cutoff_time)
                            
                            # Only get new activities (those not in previous pages)
                            seen_keys = set()
                            for activity in all_activities:
                                key = (activity['user'], activity['beer_name'], activity['brewery'], activity.get('time', ''))
                                seen_keys.add(key)
                            
                            new_activities = []
                            for activity in current_activities:
                                key = (activity['user'], activity['beer_name'], activity['brewery'], activity.get('time', ''))
                                if key not in seen_keys:
                                    new_activities.append(activity)
                                    
                                    # Check if this activity is at or before cutoff time
                                    if cutoff_time:
                                        activity_time = self.parse_activity_time(activity.get('time', ''))
                                        if activity_time and activity_time <= cutoff_time:
                                            print(f"✅ Reached cutoff time on page {page_num}")
                                            reached_cutoff = True
                                            break
                            
                            if new_activities:
                                all_activities.extend(new_activities)
                                print(f"✅ Page {page_num}: {len(new_activities)} new activities (total: {len(all_activities)})")
                            else:
                                print(f"✅ Page {page_num}: No unique new activities")
                                break
                            
                            # Stop if we reached cutoff time
                            if reached_cutoff:
                                break
                            
                            # Memory cleanup
                            if page_num % 3 == 0:
                                gc.collect()
                                print(f"🧹 Memory cleanup at page {page_num}")
                                print(f"🍺 Beer type cache size: {len(self.beer_type_cache)} entries")
                            
                        except Exception as e:
                            print(f"❌ Page {page_num} error: {e}")
                            break
                
                if reached_cutoff:
                    print(f"✅ {venue_name} complete: {len(all_activities)} new activities (stopped at cutoff)")
                else:
                    print(f"✅ {venue_name} complete: {len(all_activities)} new activities (reached data end)")
                
            except Exception as e:
                print(f"❌ {venue_name} error: {e}")
            
            finally:
                if self.driver:
                    self.driver.quit()
                gc.collect()
            
            return all_activities
        
        def close(self):
            if self.driver:
                self.driver.quit()
            self.session.close()

    # Standalone function for parallel processing
    def scrape_single_venue_incremental(args):
        """Process a single venue incrementally - used by parallel processing"""
        url, cookies_file, cutoff_time, max_pages, delay, venue_index, total_venues = args
        
        venue_name = re.search(r'/v/([^/]+)/\d+', url)
        venue_name = venue_name.group(1) if venue_name else 'unknown'
        
        print(f"\n[Worker {venue_index}] Starting incremental update for {venue_name} ({venue_index}/{total_venues})")
        
        try:
            scraper = IncrementalEnhancedVenueScraper(cookies_file=cookies_file, headless=True)
            activities = scraper.scrape_venue_incremental(url, cutoff_time, max_pages, delay)
            
            if activities:
                with_beer_types = sum(1 for a in activities if a.get('beer_type'))
                print(f"[Worker {venue_index}] ✅ {venue_name}: {len(activities)} new activities ({with_beer_types} with beer types)")
                return activities
            else:
                print(f"[Worker {venue_index}] ✅ {venue_name}: No new activities since last update")
                return []
                
        except Exception as e:
            print(f"[Worker {venue_index}] ❌ {venue_name} failed: {e}")
            return []
    
    class IncrementalParallelBatchScraper:
        """Incremental parallel batch scraper with beer type extraction"""
        
        def __init__(self, cookies_file: str = None, max_workers: int = None):
            self.cookies_file = cookies_file
            self.max_workers = max_workers or min(4, multiprocessing.cpu_count())
        
        def get_last_update_time(self, db_file: str) -> Optional[datetime]:
            """Get the timestamp of the last update from existing CSV"""
            if not os.path.exists(db_file):
                print(f"📝 Database file {db_file} doesn't exist - doing full scrape")
                return None
            
            try:
                # Read existing CSV to find latest timestamp
                df = pd.read_csv(db_file)
                if df.empty or 'time' not in df.columns:
                    print(f"📝 Database file is empty or missing time column - doing full scrape")
                    return None
                
                # Find the most recent timestamp
                latest_time = None
                for time_str in df['time']:
                    if pd.isna(time_str) or not time_str:
                        continue
                    try:
                        parsed_time = date_parser.parse(str(time_str))
                        if latest_time is None or parsed_time > latest_time:
                            latest_time = parsed_time
                    except:
                        continue
                
                if latest_time:
                    print(f"📅 Last update time: {latest_time}")
                    return latest_time
                else:
                    print(f"📝 No valid timestamps found - doing full scrape")
                    return None
                    
            except Exception as e:
                print(f"⚠️  Error reading database file {db_file}: {e}")
                print(f"📝 Doing full scrape instead")
                return None
        
        def merge_with_existing_data(self, new_activities: List[Dict], db_file: str, output_file: str):
            """Merge new activities with existing database"""
            
            if not os.path.exists(db_file):
                print(f"📝 Creating new database file: {output_file}")
                self.save_to_csv(new_activities, output_file)
                return
            
            try:
                # Load existing data
                existing_df = pd.read_csv(db_file)
                print(f"📊 Loaded {len(existing_df)} existing activities")
                
                # Convert new activities to DataFrame
                new_df = pd.DataFrame(new_activities)
                print(f"📊 Found {len(new_df)} new activities")
                
                # Combine and remove duplicates
                combined_df = pd.concat([existing_df, new_df], ignore_index=True)
                
                # Remove duplicates based on key fields
                before_dedup = len(combined_df)
                combined_df = combined_df.drop_duplicates(
                    subset=['venue', 'user', 'beer_name', 'brewery', 'time'],
                    keep='first'
                ).reset_index(drop=True)
                after_dedup = len(combined_df)
                
                duplicates_removed = before_dedup - after_dedup
                if duplicates_removed > 0:
                    print(f"🧹 Removed {duplicates_removed} duplicate activities")
                
                # Sort by time (newest first)
                combined_df['parsed_time'] = pd.to_datetime(combined_df['time'], errors='coerce')
                combined_df = combined_df.sort_values('parsed_time', ascending=False, na_position='last')
                combined_df = combined_df.drop('parsed_time', axis=1)
                
                # Save updated database
                combined_df.to_csv(output_file, index=False)
                print(f"✅ Updated database saved: {output_file} ({len(combined_df)} total activities)")
                
            except Exception as e:
                print(f"❌ Error merging data: {e}")
                print(f"📝 Saving new activities only to: {output_file}")
                self.save_to_csv(new_activities, output_file)
        
        def scrape_venues_incremental(self, venues_file: str, db_file: str, max_pages: int = 10, delay: float = 1.5):
            """Scrape venues incrementally to update existing database"""
            
            print(f"🔄 INCREMENTAL PARALLEL ENHANCED SCRAPER")
            print(f"Workers: {self.max_workers}")
            print(f"Max pages per venue: {max_pages}")
            print(f"Database file: {db_file}")
            print(f"Reading venues from: {venues_file}")
            print("=" * 70)
            
            # Get last update time from database
            cutoff_time = self.get_last_update_time(db_file)
            
            # Read venues
            try:
                with open(venues_file, 'r') as f:
                    venue_urls = [line.strip() for line in f if line.strip()]
            except Exception as e:
                print(f"❌ Error reading venues file: {e}")
                return
            
            if not venue_urls:
                print("❌ No venue URLs found")
                return
            
            print(f"Found {len(venue_urls)} venues to update:")
            for i, url in enumerate(venue_urls, 1):
                venue_name = re.search(r'/v/([^/]+)/\d+', url)
                venue_name = venue_name.group(1) if venue_name else 'unknown'
                print(f"  {i}. {venue_name}")
            
            # Prepare arguments for parallel processing
            args_list = []
            for i, url in enumerate(venue_urls, 1):
                args_list.append((url, self.cookies_file, cutoff_time, max_pages, delay, i, len(venue_urls)))
            
            all_new_activities = []
            successful_venues = 0
            total_beer_types_found = 0
            
            start_time = time.time()
            
            # Process venues in parallel
            print(f"\n🔄 Starting incremental parallel processing with {self.max_workers} workers...")
            if cutoff_time:
                print(f"📅 Only collecting activities newer than: {cutoff_time}")
            else:
                print(f"📝 Full scrape (no existing data)")
            
            with ProcessPoolExecutor(max_workers=self.max_workers) as executor:
                # Submit all tasks
                future_to_venue = {executor.submit(scrape_single_venue_incremental, args): args[0] for args in args_list}
                
                # Collect results as they complete
                for future in as_completed(future_to_venue):
                    venue_url = future_to_venue[future]
                    venue_name = re.search(r'/v/([^/]+)/\d+', venue_url)
                    venue_name = venue_name.group(1) if venue_name else 'unknown'
                    
                    try:
                        venue_activities = future.result()
                        
                        if venue_activities:
                            all_new_activities.extend(venue_activities)
                            successful_venues += 1
                            
                            # Count activities with beer types
                            with_types = sum(1 for a in venue_activities if a.get('beer_type'))
                            total_beer_types_found += with_types
                            
                            print(f"✅ Completed {venue_name}: {len(venue_activities)} new activities ({with_types} with beer types)")
                        else:
                            print(f"✅ Completed {venue_name}: No new activities since last update")
                            successful_venues += 1  # Still count as successful
                            
                    except Exception as e:
                        print(f"❌ {venue_name} processing error: {e}")
            
            end_time = time.time()
            duration = end_time - start_time
            
            # Update database with new activities
            if all_new_activities:
                print(f"\n🔄 Updating database with {len(all_new_activities)} new activities...")
                self.merge_with_existing_data(all_new_activities, db_file, db_file)
                
                print(f"\n🎉 INCREMENTAL UPDATE COMPLETE!")
                print(f"⏱️  Total time: {duration/60:.1f} minutes")
                print(f"✅ Venues processed: {successful_venues}/{len(venue_urls)}")
                print(f"✅ New activities found: {len(all_new_activities)}")
                print(f"🍺 New activities with beer types: {total_beer_types_found}/{len(all_new_activities)} ({total_beer_types_found/len(all_new_activities)*100:.1f}%)")
                
                # Show summary by venue
                venue_counts = {}
                for activity in all_new_activities:
                    venue = activity['venue']
                    venue_counts[venue] = venue_counts.get(venue, 0) + 1
                
                print(f"\n📊 New activities by venue:")
                for venue, count in sorted(venue_counts.items()):
                    print(f"  {venue}: {count} new activities")
                
            else:
                print(f"\n✅ INCREMENTAL UPDATE COMPLETE!")
                print(f"⏱️  Total time: {duration/60:.1f} minutes")
                print(f"✅ Venues processed: {successful_venues}/{len(venue_urls)}")
                print(f"📝 No new activities found - database is up to date!")
        
        def save_to_csv(self, activities: List[Dict], filename: str):
            """Save to CSV with beer_type field"""
            fieldnames = ['venue', 'user', 'time', 'serving', 'data_rating', 'beer_name', 'brewery', 'beer_type']
            
            with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(activities)
    
    def main():
        parser = argparse.ArgumentParser(description='Incremental parallel enhanced scraper with beer type extraction')
        parser.add_argument('--venues', default='venues', help='File containing venue URLs')
        parser.add_argument('--cookies', default='cookies.json', help='Path to cookies file')
        parser.add_argument('--database', default='venues_database.csv', help='Database CSV file to update')
        parser.add_argument('--max-pages', type=int, default=10, help='Max pages per venue (recommended ≤10 for parallel)')
        parser.add_argument('--delay', type=float, default=1.5, help='Delay between requests')
        parser.add_argument('--workers', type=int, default=None, help='Number of parallel workers (default: min(4, CPU count))')
        parser.add_argument('--full-scrape', action='store_true', help='Force full scrape ignoring existing database')
        
        args = parser.parse_args()
        
        if args.max_pages > 12:
            print(f"⚠️  WARNING: max_pages={args.max_pages} may cause memory issues with parallel processing")
            print(f"⚠️  Recommended: max_pages ≤ 10 for parallel processing")
            response = input("Continue anyway? (y/N): ").lower()
            if response != 'y':
                print("Aborted.")
                return
        
        # If full scrape requested, backup existing database
        if args.full_scrape and os.path.exists(args.database):
            backup_name = f"{args.database}.backup.{int(time.time())}"
            os.rename(args.database, backup_name)
            print(f"📦 Backed up existing database to: {backup_name}")
        
        scraper = IncrementalParallelBatchScraper(cookies_file=args.cookies, max_workers=args.workers)
        
        try:
            scraper.scrape_venues_incremental(
                venues_file=args.venues,
                db_file=args.database,
                max_pages=args.max_pages,
                delay=args.delay
            )
        except KeyboardInterrupt:
            print("\n🛑 Scraping interrupted")
        except Exception as e:
            print(f"❌ Scraping error: {e}")
    
    if __name__ == "__main__":
        main()

except ImportError as e:
    print(f"❌ Missing dependency: {e}")
    print("Install with: pip install selenium beautifulsoup4 requests pandas python-dateutil")