#!/usr/bin/env python3
"""
Convert venues_database.csv to embedded JavaScript data file.
Removes usernames for privacy and handles empty fields gracefully.
"""

import csv
import json
from datetime import datetime
import re

def parse_timestamp(time_str):
    """Parse timestamp from 'Day, DD Mon YYYY HH:MM:SS +ZZZZ' format"""
    try:
        # Remove day name and parse
        clean_time = re.sub(r'^[A-Za-z]+,\s*', '', time_str)
        dt = datetime.strptime(clean_time, '%d %b %Y %H:%M:%S %z')
        return dt.isoformat()
    except:
        return time_str

def clean_rating(rating_str):
    """Clean and validate rating, return None if invalid"""
    if not rating_str or rating_str.strip() == '':
        return None
    try:
        rating = float(rating_str.strip())
        return rating if 0 <= rating <= 5 else None
    except:
        return None

def process_csv_to_js():
    """Process CSV and generate JavaScript data file"""
    data = []
    
    print("🍺 Processing venues database...")
    
    with open('venues_database.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row_num, row in enumerate(reader, 1):
            # Skip rows with missing essential data
            if not row.get('venue') or not row.get('beer_name') or not row.get('brewery'):
                print(f"⚠️  Skipping row {row_num}: missing essential data")
                continue
            
            processed_row = {
                'venue': row['venue'].strip(),
                'time': parse_timestamp(row['time']),
                'serving': row['serving'].strip() if row['serving'].strip() else 'Unknown',
                'rating': clean_rating(row['data_rating']),
                'beer_name': row['beer_name'].strip(),
                'brewery': row['brewery'].strip(),
                'beer_type': row['beer_type'].strip()
            }
            
            data.append(processed_row)
    
    print(f"✅ Processed {len(data)} valid records")
    
    # Generate JavaScript file
    js_content = f"""// 🍺 BEER STATS DATA - Generated automatically
// Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
// Total records: {len(data)}

const BEER_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = BEER_DATA;
}}
"""
    
    with open('venues_data.js', 'w', encoding='utf-8') as js_file:
        js_file.write(js_content)
    
    print(f"🚀 Generated venues_data.js with {len(data)} records")
    print("   Run this script again whenever you update venues_database.csv")

if __name__ == "__main__":
    try:
        process_csv_to_js()
    except FileNotFoundError:
        print("❌ venues_database.csv not found in current directory")
    except Exception as e:
        print(f"❌ Error: {e}")