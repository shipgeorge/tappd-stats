#!/usr/bin/env python3
"""
Cookie Manager for Untappd Scraping
Handles cookie expiration, validation, refresh, and recovery
"""

import json
import os
import time
import requests
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

class CookieManager:
    """Manages Untappd authentication cookies with expiration handling"""
    
    def __init__(self, cookies_file: str = "cookies.json", backup_cookies_file: str = "cookies_backup.json"):
        self.cookies_file = cookies_file
        self.backup_cookies_file = backup_cookies_file
        self.session = requests.Session()
        self.setup_session()
        
    def setup_session(self):
        """Setup requests session"""
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        })
    
    def load_cookies(self, cookies_file: str = None) -> List[Dict]:
        """Load cookies from file or environment variable"""
        # First try to load from environment variable (for GitHub Actions)
        cookies_env = os.getenv('UNTAPPD_COOKIES')
        if cookies_env:
            try:
                cookies = json.loads(cookies_env)
                print(f"✅ Loaded {len(cookies)} cookies from environment variable")
                return cookies
            except Exception as e:
                print(f"❌ Error parsing cookies from environment: {e}")
                return []
        
        # Fallback to file loading
        file_path = cookies_file or self.cookies_file
        
        if not os.path.exists(file_path):
            print(f"⚠️  Cookie file not found: {file_path}")
            return []
        
        try:
            with open(file_path, 'r') as f:
                cookies = json.load(f)
            
            print(f"✅ Loaded {len(cookies)} cookies from {file_path}")
            return cookies
            
        except Exception as e:
            print(f"❌ Error loading cookies: {e}")
            return []
    
    def save_cookies(self, cookies: List[Dict], cookies_file: str = None):
        """Save cookies to file"""
        file_path = cookies_file or self.cookies_file
        
        try:
            with open(file_path, 'w') as f:
                json.dump(cookies, f, indent=2)
            
            print(f"✅ Saved {len(cookies)} cookies to {file_path}")
            
        except Exception as e:
            print(f"❌ Error saving cookies: {e}")
    
    def backup_cookies(self):
        """Create backup of current cookies"""
        if os.path.exists(self.cookies_file):
            try:
                cookies = self.load_cookies(self.cookies_file)
                if cookies:
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                    backup_file = f"cookies_backup_{timestamp}.json"
                    self.save_cookies(cookies, backup_file)
                    print(f"📦 Created cookie backup: {backup_file}")
                    return backup_file
            except Exception as e:
                print(f"⚠️  Failed to backup cookies: {e}")
        return None
    
    def check_cookie_expiration(self, cookies: List[Dict]) -> Tuple[bool, List[str]]:
        """Check if cookies are expired or will expire soon"""
        expired_cookies = []
        current_time = time.time()
        
        for cookie in cookies:
            # Check if cookie has expiry information
            if 'expirationDate' in cookie:
                expiry_time = cookie['expirationDate']
                
                # Check if expired or expires within 24 hours
                if expiry_time <= current_time:
                    expired_cookies.append(f"{cookie['name']} (expired)")
                elif expiry_time <= current_time + 86400:  # 24 hours
                    expired_cookies.append(f"{cookie['name']} (expires in <24h)")
        
        return len(expired_cookies) > 0, expired_cookies
    
    def validate_cookies_with_request(self, cookies: List[Dict]) -> bool:
        """Validate cookies by making a test request"""
        if not cookies:
            return False
        
        try:
            # Clear existing cookies
            self.session.cookies.clear()
            
            # Load cookies into session
            for cookie in cookies:
                self.session.cookies.set(
                    cookie['name'], 
                    cookie['value'], 
                    domain=cookie.get('domain', '.untappd.com')
                )
            
            # Test with a protected endpoint
            test_urls = [
                'https://untappd.com/user/settings',  # Settings page requires auth
                'https://untappd.com/user/beers',     # User beers page
                'https://untappd.com/api/feed'        # API endpoint
            ]
            
            for url in test_urls:
                try:
                    response = self.session.get(url, timeout=10)
                    
                    # Check if we're redirected to login or get unauthorized
                    if response.status_code == 200 and 'login' not in response.url.lower():
                        # Look for signs we're logged in
                        if any(text in response.text.lower() for text in ['sign out', 'logout', 'settings', 'profile']):
                            print(f"✅ Cookies validated successfully with {url}")
                            return True
                    
                except requests.RequestException:
                    continue
            
            print(f"❌ Cookie validation failed - all test requests failed")
            return False
            
        except Exception as e:
            print(f"❌ Cookie validation error: {e}")
            return False
    
    def validate_cookies_with_selenium(self, cookies: List[Dict]) -> bool:
        """Validate cookies using Selenium (more reliable but slower)"""
        if not cookies:
            return False
        
        driver = None
        try:
            # Setup minimal Chrome driver
            chrome_options = Options()
            chrome_options.add_argument("--headless=new")
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--disable-dev-shm-usage")
            chrome_options.add_argument("--disable-extensions")
            
            driver = webdriver.Chrome(options=chrome_options)
            driver.set_page_load_timeout(30)
            
            # Go to Untappd
            driver.get("https://untappd.com")
            time.sleep(2)
            
            # Add cookies
            for cookie in cookies:
                try:
                    driver.add_cookie({
                        'name': cookie['name'],
                        'value': cookie['value'],
                        'domain': cookie.get('domain', '.untappd.com'),
                        'path': cookie.get('path', '/')
                    })
                except:
                    continue
            
            # Refresh page to apply cookies
            driver.refresh()
            time.sleep(3)
            
            # Check if we're logged in by looking for user menu or login indicators
            try:
                # Look for elements that indicate logged in state
                logged_in_indicators = [
                    "//a[contains(@href, '/user/')]",  # User profile link
                    "//a[contains(text(), 'Sign Out')]",  # Sign out link
                    "//*[contains(@class, 'user-menu')]",  # User menu
                    "//div[@class='avatar']"  # User avatar
                ]
                
                for xpath in logged_in_indicators:
                    try:
                        element = WebDriverWait(driver, 5).until(
                            EC.presence_of_element_located((By.XPATH, xpath))
                        )
                        if element:
                            print(f"✅ Cookies validated with Selenium - found logged in indicator")
                            return True
                    except TimeoutException:
                        continue
                
                # Check if we see login form (indicates cookies expired)
                login_indicators = [
                    "//input[@type='email']",
                    "//input[@name='username']",
                    "//form[contains(@class, 'login')]"
                ]
                
                for xpath in login_indicators:
                    try:
                        element = driver.find_element(By.XPATH, xpath)
                        if element:
                            print(f"❌ Cookies invalid - login form detected")
                            return False
                    except:
                        continue
                
                print(f"⚠️  Could not determine login status with Selenium")
                return False
                
            except Exception as e:
                print(f"❌ Selenium validation error: {e}")
                return False
        
        except Exception as e:
            print(f"❌ Selenium setup error: {e}")
            return False
        
        finally:
            if driver:
                driver.quit()
    
    def extract_fresh_cookies(self) -> List[Dict]:
        """Extract fresh cookies using Selenium (requires manual login)"""
        driver = None
        try:
            print(f"🔄 Starting fresh cookie extraction...")
            print(f"📝 This requires manual login - browser will open")
            
            # Setup visible Chrome driver
            chrome_options = Options()
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--disable-dev-shm-usage")
            chrome_options.add_argument("--disable-extensions")
            
            driver = webdriver.Chrome(options=chrome_options)
            driver.set_window_size(1200, 800)
            
            # Go to Untappd login page
            print(f"🌐 Opening Untappd login page...")
            driver.get("https://untappd.com/login")
            
            # Wait for user to login
            print(f"👤 Please login to Untappd in the browser window...")
            print(f"⏳ Waiting for login completion...")
            
            # Wait for successful login (look for user profile elements)
            max_wait = 300  # 5 minutes
            start_time = time.time()
            
            while time.time() - start_time < max_wait:
                try:
                    # Check if we're logged in
                    current_url = driver.current_url
                    if 'login' not in current_url and any(indicator in driver.page_source.lower() 
                                                        for indicator in ['sign out', 'logout', 'profile']):
                        print(f"✅ Login detected!")
                        break
                    
                    time.sleep(2)
                    
                except Exception:
                    time.sleep(2)
                    continue
            else:
                print(f"⏱️  Login timeout - please try again")
                return []
            
            # Extract cookies
            print(f"🍪 Extracting cookies...")
            selenium_cookies = driver.get_cookies()
            
            # Convert to our format
            cookies = []
            for cookie in selenium_cookies:
                cookie_dict = {
                    'name': cookie['name'],
                    'value': cookie['value'],
                    'domain': cookie['domain'],
                    'path': cookie.get('path', '/'),
                    'secure': cookie.get('secure', False),
                    'httpOnly': cookie.get('httpOnly', False)
                }
                
                # Add expiration if available
                if 'expiry' in cookie:
                    cookie_dict['expirationDate'] = cookie['expiry']
                
                cookies.append(cookie_dict)
            
            print(f"✅ Extracted {len(cookies)} fresh cookies")
            return cookies
        
        except Exception as e:
            print(f"❌ Fresh cookie extraction error: {e}")
            return []
        
        finally:
            if driver:
                input("Press Enter to close browser...")
                driver.quit()
    
    def refresh_cookies_if_needed(self, force_refresh: bool = False) -> bool:
        """Check and refresh cookies if expired or invalid"""
        print(f"🔍 Checking cookie status...")
        
        # Load current cookies
        cookies = self.load_cookies()
        
        if not cookies:
            print(f"❌ No cookies found - fresh extraction needed")
            return self._handle_cookie_refresh()
        
        # Check expiration
        if not force_refresh:
            expired, expired_list = self.check_cookie_expiration(cookies)
            if expired:
                print(f"⏰ Cookies expired or expiring soon:")
                for expired_cookie in expired_list:
                    print(f"  - {expired_cookie}")
            
            # Validate with request
            print(f"🧪 Validating cookies with test request...")
            if self.validate_cookies_with_request(cookies):
                print(f"✅ Cookies are valid and working")
                return True
            else:
                print(f"❌ Cookie validation failed")
        else:
            print(f"🔄 Force refresh requested")
        
        return self._handle_cookie_refresh()
    
    def _handle_cookie_refresh(self) -> bool:
        """Handle cookie refresh process"""
        print(f"\n🔄 COOKIE REFRESH REQUIRED")
        print(f"Options:")
        print(f"1. Extract fresh cookies (requires manual login)")
        print(f"2. Use backup cookies")
        print(f"3. Continue with expired cookies (may fail)")
        
        choice = input("Choose option (1/2/3): ").strip()
        
        if choice == '1':
            # Backup current cookies
            self.backup_cookies()
            
            # Extract fresh cookies
            fresh_cookies = self.extract_fresh_cookies()
            
            if fresh_cookies:
                self.save_cookies(fresh_cookies)
                print(f"✅ Fresh cookies saved successfully")
                return True
            else:
                print(f"❌ Failed to extract fresh cookies")
                return False
        
        elif choice == '2':
            # Try backup cookies
            if os.path.exists(self.backup_cookies_file):
                backup_cookies = self.load_cookies(self.backup_cookies_file)
                
                if backup_cookies and self.validate_cookies_with_request(backup_cookies):
                    self.save_cookies(backup_cookies)
                    print(f"✅ Backup cookies restored and validated")
                    return True
                else:
                    print(f"❌ Backup cookies are also invalid")
            else:
                print(f"❌ No backup cookies found")
            
            return False
        
        elif choice == '3':
            print(f"⚠️  Continuing with potentially expired cookies")
            print(f"⚠️  Scraping may fail or return limited data")
            return True
        
        else:
            print(f"❌ Invalid choice")
            return False
    
    def get_valid_cookies(self, force_refresh: bool = False) -> Optional[List[Dict]]:
        """Get valid cookies, refreshing if necessary"""
        if self.refresh_cookies_if_needed(force_refresh):
            return self.load_cookies()
        else:
            print(f"❌ Could not obtain valid cookies")
            return None
    
    def create_authenticated_session(self) -> Optional[requests.Session]:
        """Create a requests session with valid cookies"""
        cookies = self.get_valid_cookies()
        
        if not cookies:
            return None
        
        session = requests.Session()
        session.headers.update(self.session.headers)
        
        for cookie in cookies:
            session.cookies.set(
                cookie['name'], 
                cookie['value'], 
                domain=cookie.get('domain', '.untappd.com')
            )
        
        return session

def main():
    """Test cookie management functionality"""
    manager = CookieManager()
    
    print("🍪 Cookie Manager Test")
    print("=" * 30)
    
    # Test cookie validation
    valid = manager.refresh_cookies_if_needed()
    
    if valid:
        print("✅ Cookies are ready for scraping")
        
        # Test authenticated session
        session = manager.create_authenticated_session()
        if session:
            print("✅ Authenticated session created")
        else:
            print("❌ Failed to create authenticated session")
    else:
        print("❌ Cookie setup failed")

if __name__ == "__main__":
    main()