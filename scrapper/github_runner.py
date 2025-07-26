#!/usr/bin/env python3
"""
GitHub Actions runner for venue scraping
Handles environment-based cookies and proper error reporting
"""

import os
import sys
import json
import subprocess
from pathlib import Path

def setup_cookies_from_env():
    """Create cookies.json from environment variable"""
    cookies_env = os.getenv('UNTAPPD_COOKIES')
    if not cookies_env:
        print("❌ UNTAPPD_COOKIES environment variable not found")
        return False
    
    try:
        # Validate JSON
        cookies = json.loads(cookies_env)
        
        # Write to temporary file
        with open('cookies.json', 'w') as f:
            json.dump(cookies, f, indent=2)
        
        print(f"✅ Created cookies.json with {len(cookies)} cookies")
        return True
        
    except json.JSONDecodeError as e:
        print(f"❌ Invalid JSON in UNTAPPD_COOKIES: {e}")
        return False
    except Exception as e:
        print(f"❌ Error setting up cookies: {e}")
        return False

def run_scraper():
    """Run the robust incremental scraper"""
    try:
        # Change to scrapper directory
        os.chdir(Path(__file__).parent)
        
        # Set up cookies from environment
        if not setup_cookies_from_env():
            return False
        
        # Run scraper
        cmd = [
            sys.executable, 'robust_incremental_scraper.py',
            '--venues', 'venues',
            '--cookies', 'cookies.json', 
            '--database', '../venues_database.csv',
            '--max-pages', '10',
            '--delay', '1.5',
            '--workers', '3'
        ]
        
        print(f"🚀 Running scraper with command: {' '.join(cmd)}")
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        # Print output
        if result.stdout:
            print("STDOUT:", result.stdout)
        if result.stderr:
            print("STDERR:", result.stderr)
        
        if result.returncode == 0:
            print("✅ Scraper completed successfully")
            return True
        else:
            print(f"❌ Scraper failed with return code {result.returncode}")
            return False
            
    except Exception as e:
        print(f"❌ Error running scraper: {e}")
        return False
    finally:
        # Clean up cookies file
        try:
            os.remove('cookies.json')
            print("🧹 Cleaned up cookies file")
        except:
            pass

if __name__ == "__main__":
    success = run_scraper()
    sys.exit(0 if success else 1)