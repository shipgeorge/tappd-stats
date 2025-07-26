#!/usr/bin/env python3
"""
Robust Incremental Scraper with Cookie Management
Handles cookie expiration, refresh, and recovery automatically
"""

try:
    from incremental_parallel_enhanced_scraper import *
    from cookie_manager import CookieManager
    import argparse
    import sys
    import os
    
    class RobustIncrementalScraper(IncrementalParallelBatchScraper):
        """Enhanced scraper with robust cookie management"""
        
        def __init__(self, cookies_file: str = None, max_workers: int = None):
            super().__init__(cookies_file, max_workers)
            self.cookie_manager = CookieManager(cookies_file or "cookies.json")
            self.retry_count = 0
            self.max_retries = 2
        
        def ensure_valid_cookies(self) -> bool:
            """Ensure we have valid cookies before scraping"""
            print(f"🔐 Ensuring valid authentication...")
            
            # Check and refresh cookies if needed
            return self.cookie_manager.refresh_cookies_if_needed()
        
        def handle_authentication_failure(self, error_context: str = "") -> bool:
            """Handle authentication failures during scraping"""
            print(f"\n🚨 AUTHENTICATION FAILURE DETECTED")
            if error_context:
                print(f"Context: {error_context}")
            
            self.retry_count += 1
            
            if self.retry_count <= self.max_retries:
                print(f"🔄 Attempting cookie refresh (retry {self.retry_count}/{self.max_retries})...")
                
                # Force refresh cookies
                if self.cookie_manager.refresh_cookies_if_needed(force_refresh=True):
                    print(f"✅ Cookies refreshed - retrying operation")
                    return True
                else:
                    print(f"❌ Cookie refresh failed")
            else:
                print(f"❌ Max retries exceeded - giving up")
            
            return False
        
        def scrape_venues_with_recovery(self, venues_file: str, db_file: str, max_pages: int = 10, delay: float = 1.5):
            """Scrape venues with automatic error recovery"""
            
            # Ensure valid cookies before starting
            if not self.ensure_valid_cookies():
                print(f"❌ Cannot proceed without valid cookies")
                return False
            
            try:
                # Attempt normal scraping
                self.scrape_venues_incremental(venues_file, db_file, max_pages, delay)
                return True
                
            except Exception as e:
                error_msg = str(e).lower()
                
                # Check if error is authentication-related
                auth_errors = [
                    'unauthorized', 'forbidden', 'login required',
                    'authentication failed', 'invalid session',
                    'cookie expired', 'access denied'
                ]
                
                if any(auth_error in error_msg for auth_error in auth_errors):
                    print(f"🔍 Detected authentication error: {e}")
                    
                    if self.handle_authentication_failure(str(e)):
                        print(f"🔄 Retrying scraping with fresh cookies...")
                        try:
                            self.scrape_venues_incremental(venues_file, db_file, max_pages, delay)
                            return True
                        except Exception as retry_e:
                            print(f"❌ Retry failed: {retry_e}")
                            return False
                    else:
                        print(f"❌ Could not recover from authentication failure")
                        return False
                else:
                    print(f"❌ Non-authentication error: {e}")
                    raise e
    
    def setup_cookie_monitoring():
        """Setup cookie monitoring and refresh scheduling"""
        print(f"📅 Cookie Monitoring Options:")
        print(f"1. Check cookies now and setup monitoring")
        print(f"2. Create cookie refresh script for cron")
        print(f"3. Skip monitoring setup")
        
        choice = input("Choose option (1/2/3): ").strip()
        
        if choice == '1':
            manager = CookieManager()
            manager.refresh_cookies_if_needed()
            
            print(f"\n📋 COOKIE MONITORING RECOMMENDATIONS:")
            print(f"Set up a cron job to check cookies daily:")
            print(f"0 6 * * * cd {os.getcwd()} && python3 cookie_manager.py")
            print(f"\nOr run before each scraping session:")
            print(f"python3 cookie_manager.py && python3 robust_incremental_scraper.py")
            
        elif choice == '2':
            create_cookie_refresh_script()
            
    def create_cookie_refresh_script():
        """Create a standalone cookie refresh script"""
        script_content = '''#!/usr/bin/env python3
"""
Automated Cookie Refresh Script
Run this via cron to maintain fresh cookies
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from cookie_manager import CookieManager
from datetime import datetime

def main():
    print(f"🕐 Cookie refresh check at {datetime.now()}")
    
    manager = CookieManager()
    
    # Check if cookies need refresh
    cookies = manager.load_cookies()
    if not cookies:
        print("❌ No cookies found - manual extraction required")
        return False
    
    # Check expiration
    expired, expired_list = manager.check_cookie_expiration(cookies)
    if expired:
        print("⏰ Cookies expired or expiring soon")
        print("📧 Send notification or alert here")
        return False
    
    # Validate cookies
    if manager.validate_cookies_with_request(cookies):
        print("✅ Cookies are valid")
        return True
    else:
        print("❌ Cookies invalid - manual refresh required")
        return False

if __name__ == "__main__":
    main()
'''
        
        script_path = "cookie_refresh_cron.py"
        with open(script_path, 'w') as f:
            f.write(script_content)
        
        os.chmod(script_path, 0o755)  # Make executable
        
        print(f"✅ Created cookie refresh script: {script_path}")
        print(f"\n📋 Add this to your crontab:")
        print(f"# Check cookies daily at 6 AM")
        print(f"0 6 * * * cd {os.getcwd()} && python3 {script_path}")
        print(f"\n# Or check cookies before each scraping run")
        print(f"0 */6 * * * cd {os.getcwd()} && python3 {script_path}")
    
    def main():
        parser = argparse.ArgumentParser(description='Robust incremental scraper with cookie management')
        parser.add_argument('--venues', default='venues', help='File containing venue URLs')
        parser.add_argument('--cookies', default='cookies.json', help='Path to cookies file')
        parser.add_argument('--database', default='venues_database.csv', help='Database CSV file to update')
        parser.add_argument('--max-pages', type=int, default=10, help='Max pages per venue')
        parser.add_argument('--delay', type=float, default=1.5, help='Delay between requests')
        parser.add_argument('--workers', type=int, default=None, help='Number of parallel workers')
        parser.add_argument('--full-scrape', action='store_true', help='Force full scrape')
        parser.add_argument('--setup-monitoring', action='store_true', help='Setup cookie monitoring')
        parser.add_argument('--check-cookies', action='store_true', help='Check cookie status only')
        
        args = parser.parse_args()
        
        # Setup monitoring if requested
        if args.setup_monitoring:
            setup_cookie_monitoring()
            return
        
        # Check cookies only if requested
        if args.check_cookies:
            manager = CookieManager(args.cookies)
            valid = manager.refresh_cookies_if_needed()
            if valid:
                print("✅ Cookies are ready for scraping")
            else:
                print("❌ Cookie issues detected")
            return
        
        # Validate required files
        if not os.path.exists(args.venues):
            print(f"❌ Venues file not found: {args.venues}")
            return
        
        if not os.path.exists(args.cookies):
            print(f"❌ Cookies file not found: {args.cookies}")
            print(f"💡 Run with --setup-monitoring to extract cookies")
            return
        
        # Run robust scraper
        print(f"🚀 ROBUST INCREMENTAL SCRAPER")
        print(f"Cookie file: {args.cookies}")
        print(f"Database: {args.database}")
        print(f"Venues: {args.venues}")
        print("=" * 50)
        
        scraper = RobustIncrementalScraper(cookies_file=args.cookies, max_workers=args.workers)
        
        try:
            success = scraper.scrape_venues_with_recovery(
                venues_file=args.venues,
                db_file=args.database,
                max_pages=args.max_pages,
                delay=args.delay
            )
            
            if success:
                print(f"\n🎉 Scraping completed successfully!")
            else:
                print(f"\n❌ Scraping failed - check authentication")
                sys.exit(1)
                
        except KeyboardInterrupt:
            print(f"\n🛑 Scraping interrupted by user")
        except Exception as e:
            print(f"\n❌ Unexpected error: {e}")
            sys.exit(1)
    
    if __name__ == "__main__":
        main()

except ImportError as e:
    print(f"❌ Missing dependency: {e}")
    print("Install with: pip install selenium beautifulsoup4 requests pandas python-dateutil")
    sys.exit(1)