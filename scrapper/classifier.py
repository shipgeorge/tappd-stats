import pandas as pd
import numpy as np
import logging
import re
from typing import Dict, List, Set, Tuple, Optional
from collections import defaultdict
import time
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('beer_processing.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

class ComprehensiveBeerClassifier:
    """
    Enhanced beer style classifier with comprehensive beer style database
    based on BJCP 2021 guidelines and industry standards.
    """
    
    def __init__(self):
        self.brewery_styles = self._create_comprehensive_brewery_database()
        self.style_patterns = self._create_enhanced_style_patterns()
        self.bjcp_styles = self._create_bjcp_style_mapping()
        self.processed_combinations = {}
        self.unclassified_beers = []
        
    def _create_comprehensive_brewery_database(self) -> Dict[str, Dict[str, str]]:
        """
        Comprehensive brewery-specific beer style database.
        """
        return {
            # Major US Craft Breweries
            'sierra_nevada': {
                'pale_ale': 'American Pale Ale',
                'torpedo': 'American IPA',
                'torpedo_extra': 'American IPA',
                'hazy_little_thing': 'New England IPA',
                'bigfoot': 'American Barleywine',
                'celebration': 'American IPA',
                'porter': 'American Porter',
                'stout': 'American Stout',
                'kellerweis': 'Hefeweizen',
                'summerfest': 'Czech Premium Pale Lager',
                'oktoberfest': 'Märzen',
                'nooner': 'German Pilsner'
            },
            'stone_brewing': {
                'ipa': 'American IPA',
                'delicious_ipa': 'American IPA',
                'arrogant_bastard': 'American Strong Ale',
                'ruination': 'Double IPA',
                'ruination_2': 'Double IPA',
                'smoked_porter': 'Smoked Porter',
                'xocoveza': 'Spice/Herb/Vegetable Beer',
                'tangerine_express': 'American IPA',
                'fear_movie_lions': 'Double IPA'
            },
            'dogfish_head': {
                '60_minute': 'American IPA',
                '90_minute': 'Imperial IPA',
                '120_minute': 'American Barleywine',
                'punkin_ale': 'Pumpkin Beer',
                'indian_brown_ale': 'American Brown Ale',
                'seaquench_ale': 'Gose',
                'slightly_mighty': 'Session IPA',
                'hazy-o': 'New England IPA'
            },
            'new_belgium': {
                'fat_tire': 'American Amber Ale',
                'ranger': 'American IPA',
                'abbey': 'Belgian Dubbel',
                'trippel': 'Belgian Tripel',
                'voodoo_ranger': 'American IPA',
                'voodoo_ranger_imperial': 'Imperial IPA',
                'voodoo_ranger_juicy_haze': 'New England IPA'
            },
            'sam_adams': {
                'boston_lager': 'Vienna Lager',
                'octoberfest': 'Märzen',
                'winter_lager': 'Bock',
                'summer_ale': 'American Wheat Beer',
                'cherry_wheat': 'Fruit Beer',
                'rebel_ipa': 'American IPA',
                'cold_snap': 'Witbier',
                'porch_rocker': 'Radler'
            },
            'bells': {
                'two_hearted': 'American IPA',
                'oberon': 'American Wheat Beer',
                'hopslam': 'Double IPA',
                'expedition': 'Russian Imperial Stout',
                'best_brown': 'American Brown Ale',
                'amber_ale': 'American Amber Ale'
            },
            'founders': {
                'all_day_ipa': 'Session IPA',
                'centennial_ipa': 'American IPA',
                'dirty_bastard': 'Scotch Ale',
                'breakfast_stout': 'Chocolate Coffee Stout',
                'kbs': 'Imperial Stout',
                'porter': 'Robust Porter'
            },
            'lagunitas': {
                'ipa': 'American IPA',
                'little_sumpin': 'American Wheat Beer',
                'maximus': 'Double IPA',
                'pils': 'Czech Premium Pale Lager',
                'daytime': 'Session IPA',
                'super_cluster': 'American IPA'
            }
        }
    
    def _create_enhanced_style_patterns(self) -> Dict[str, str]:
        """
        Enhanced pattern matching with specific substyles.
        """
        return {
            # IPA Variants (most specific first)
            r'\bnew england ipa\b': 'New England IPA',
            r'\bhazy ipa\b': 'New England IPA',
            r'\bneipa\b': 'New England IPA',
            r'\bjuicy ipa\b': 'New England IPA',
            r'\bwest coast ipa\b': 'West Coast IPA',
            r'\btriple ipa\b': 'Triple IPA',
            r'\bdouble ipa\b': 'Double IPA',
            r'\bimperial ipa\b': 'Imperial IPA',
            r'\bdipa\b': 'Double IPA',
            r'\bsession ipa\b': 'Session IPA',
            r'\bblack ipa\b': 'Black IPA',
            r'\bwhite ipa\b': 'Belgian IPA',
            r'\bbelgian ipa\b': 'Belgian IPA',
            r'\bred ipa\b': 'Red IPA',
            r'\brye ipa\b': 'Rye IPA',
            r'\bbrut ipa\b': 'Brut IPA',
            r'\bcold ipa\b': 'Cold IPA',
            r'\bmilkshake ipa\b': 'Milkshake IPA',
            r'\bipa\b': 'American IPA',
            
            # Pilsner Variants
            r'\bczech pils': 'Czech Premium Pale Lager',
            r'\bgerman pils': 'German Pilsner',
            r'\bpilsner\b': 'German Pilsner',
            r'\bpils\b': 'German Pilsner',
            
            # Stout Variants
            r'\brussian imperial stout\b': 'Russian Imperial Stout',
            r'\bimperial stout\b': 'Imperial Stout',
            r'\bmilk stout\b': 'Sweet Stout',
            r'\bchocolate stout\b': 'Sweet Stout',
            r'\bcoffee stout\b': 'Coffee Stout',
            r'\boatmeal stout\b': 'Oatmeal Stout',
            r'\bamerican stout\b': 'American Stout',
            r'\birish stout\b': 'Irish Stout',
            r'\bdry stout\b': 'Irish Dry Stout',
            r'\bstout\b': 'American Stout',
            
            # Porter Variants
            r'\bbaltic porter\b': 'Baltic Porter',
            r'\brobust porter\b': 'Robust Porter',
            r'\bamerican porter\b': 'American Porter',
            r'\benglish porter\b': 'English Porter',
            r'\bporter\b': 'American Porter',
            
            # Wheat Beer Variants
            r'\bhefeweizen\b': 'Hefeweizen',
            r'\bweizenbock\b': 'Weizenbock',
            r'\bdunkelweizen\b': 'Dunkelweizen',
            r'\bwitbier\b': 'Witbier',
            r'\bamerican wheat\b': 'American Wheat Beer',
            r'\bwheat beer\b': 'American Wheat Beer',
            r'\bwheat\b': 'American Wheat Beer',
            
            # Belgian Styles
            r'\bbelgian quad\b': 'Belgian Quadrupel',
            r'\bquadrupel\b': 'Belgian Quadrupel',
            r'\bbelgian tripel\b': 'Belgian Tripel',
            r'\btripel\b': 'Belgian Tripel',
            r'\bbelgian dubbel\b': 'Belgian Dubbel',
            r'\bdubbel\b': 'Belgian Dubbel',
            r'\bbelgian blonde\b': 'Belgian Blonde Ale',
            r'\bsaison\b': 'Saison',
            r'\bfarmhouse ale\b': 'Saison',
            r'\bbelgian strong\b': 'Belgian Strong Ale',
            r'\babbey\b': 'Belgian Dubbel',
            
            # Sour Styles
            r'\bflanders red\b': 'Flanders Red Ale',
            r'\bgose\b': 'Gose',
            r'\blambic\b': 'Lambic',
            r'\bberliner weisse\b': 'Berliner Weisse',
            r'\bamerican sour\b': 'American Wild Ale',
            r'\bsour ale\b': 'Mixed-Fermentation Sour Beer',
            r'\bsour\b': 'Mixed-Fermentation Sour Beer',
            
            # Lager Styles
            r'\bvienna lager\b': 'Vienna Lager',
            r'\bmärzen\b': 'Märzen',
            r'\boktoberfest\b': 'Märzen',
            r'\bbock\b': 'Bock',
            r'\bdoppelbock\b': 'Doppelbock',
            r'\bmaibock\b': 'Maibock',
            r'\bschwarzier\b': 'Schwarzbier',
            r'\bmexican lager\b': 'Mexican Lager',
            r'\bjapanese lager\b': 'Japanese Rice Lager',
            r'\bamerican lager\b': 'American Lager',
            r'\blager\b': 'American Lager',
            
            # Ale Styles
            r'\bbarleywine\b': 'American Barleywine',
            r'\benglish barleywine\b': 'English Barleywine',
            r'\bamerican barleywine\b': 'American Barleywine',
            r'\bpale ale\b': 'American Pale Ale',
            r'\bapa\b': 'American Pale Ale',
            r'\bamber ale\b': 'American Amber Ale',
            r'\bbrown ale\b': 'American Brown Ale',
            r'\bscotch ale\b': 'Scotch Ale',
            r'\bold ale\b': 'Old Ale',
            r'\besb\b': 'Extra Special Bitter',
            
            # Seasonal/Special
            r'\bpumpkin\b': 'Pumpkin Beer',
            r'\bwinter warmer\b': 'Winter Warmer',
            r'\bchristmas ale\b': 'Winter Warmer',
            r'\bfruit beer\b': 'Fruit Beer',
            r'\bspiced\b': 'Spice/Herb/Vegetable Beer'
        }
    
    def _create_bjcp_style_mapping(self) -> Dict[str, str]:
        """
        BJCP 2021 style guidelines mapping. 
        """
        return {
            # Category 1: Standard American Beer
            '1A': 'American Light Lager',
            '1B': 'American Lager',
            '1C': 'Cream Ale',
            '1D': 'American Wheat Beer',
            
            # Category 21: IPA
            '21A': 'American IPA',
            '21B': 'Specialty IPA',
            '21B1': 'Belgian IPA',
            '21B2': 'Black IPA',
            '21B3': 'Brown IPA',
            '21B4': 'Red IPA',
            '21B5': 'Rye IPA',
            '21B6': 'White IPA',
            '21B7': 'New England IPA',
            '21C': 'Hazy IPA',
            
            # Category 22: Strong American Ale
            '22A': 'Double IPA',
            '22B': 'American Strong Ale',
            '22C': 'American Barleywine',
            '22D': 'Wheatwine'
        }
    
    def normalize_text(self, text: str) -> str:
        """Normalize text for matching."""
        if pd.isna(text) or text is None:
            return ""
        
        normalized = str(text).lower().strip()
        normalized = re.sub(r'[^\\w\\s]', ' ', normalized)
        normalized = re.sub(r'\\s+', ' ', normalized).strip()
        return normalized.replace(' ', '_')
    
    def classify_beer(self, brewery: str, beer_name: str) -> str:
        """
        Main classification method using multiple strategies.
        """
        # Check processed cache first
        combo_key = f"{brewery}|{beer_name}"
        if combo_key in self.processed_combinations:
            return self.processed_combinations[combo_key]
        
        brewery_key = self.normalize_text(brewery)
        beer_key = self.normalize_text(beer_name)
        beer_lower = str(beer_name).lower() if beer_name else ""
        
        # Strategy 1: Direct brewery lookup
        if brewery_key in self.brewery_styles:
            brewery_beers = self.brewery_styles[brewery_key]
            if beer_key in brewery_beers:
                style = brewery_beers[beer_key]
                self.processed_combinations[combo_key] = style
                return style
            
            # Partial match
            for known_beer, style in brewery_beers.items():
                if known_beer in beer_key or beer_key in known_beer:
                    self.processed_combinations[combo_key] = style
                    return style
        
        # Strategy 2: Pattern matching (most specific first)
        for pattern, style in self.style_patterns.items():
            if re.search(pattern, beer_lower, re.IGNORECASE):
                self.processed_combinations[combo_key] = style
                return style
        
        # Strategy 3: Keyword-based classification
        style = self._classify_by_keywords(beer_lower)
        if style:
            self.processed_combinations[combo_key] = style
            return style
        
        # Mark as unknown
        self.unclassified_beers.append({
            'brewery': brewery,
            'beer_name': beer_name,
            'normalized_brewery': brewery_key,
            'normalized_beer': beer_key
        })
        
        self.processed_combinations[combo_key] = "Unknown"
        return "Unknown"
    
    def _classify_by_keywords(self, beer_name: str) -> Optional[str]:
        """Additional keyword-based classification."""
        keywords = {
            # Strength modifiers
            'imperial': 'Imperial',
            'double': 'Double',
            'triple': 'Triple',
            'session': 'Session',
            
            # Process modifiers
            'barrel aged': 'Barrel-Aged',
            'nitro': 'Nitro',
            'cask': 'Cask',
            'dry hopped': 'Dry-Hopped',
            
            # Ingredients
            'honey': 'Honey Beer',
            'coffee': 'Coffee',
            'chocolate': 'Chocolate',
            'vanilla': 'Vanilla',
            'fruit': 'Fruit Beer',
            'cherry': 'Fruit Beer',
            'raspberry': 'Fruit Beer',
            'mango': 'Fruit Beer'
        }
        
        for keyword, modifier in keywords.items():
            if keyword in beer_name:
                # Try to combine with base style
                base_styles = ['ipa', 'stout', 'porter', 'ale', 'lager']
                for base in base_styles:
                    if base in beer_name:
                        if modifier in ['Imperial', 'Double', 'Triple', 'Session']:
                            return f"{modifier} {base.upper()}"
                        else:
                            return f"{modifier} {base.title()}"
        
        return None
    
    def process_csv(self, input_file: str, output_file: str):
        """Process the entire CSV file."""
        logger.info(f"Processing {input_file}...")
        
        # Read CSV
        df = pd.read_csv(input_file)
        logger.info(f"Loaded {len(df)} rows")
        
        # Validate columns
        required_columns = ['brewery', 'beer_name']
        if not all(col in df.columns for col in required_columns):
            raise ValueError(f"Missing required columns. Need: {required_columns}")
        
        # Get unique combinations
        unique_combos = df[['brewery', 'beer_name']].drop_duplicates()
        logger.info(f"Found {len(unique_combos)} unique brewery/beer combinations")
        
        # Process each unique combination
        style_map = {}
        for idx, (brewery, beer_name) in enumerate(unique_combos.values):
            if idx % 100 == 0:
                logger.info(f"Processing combination {idx}/{len(unique_combos)}")
            
            style = self.classify_beer(brewery, beer_name)
            style_map[(brewery, beer_name)] = style
        
        # Apply classifications to full dataset
        df['beer_type'] = df.apply(
            lambda row: style_map.get((row['brewery'], row['beer_name']), 'Unknown'),
            axis=1
        )
        
        # Save output
        df.to_csv(output_file, index=False)
        logger.info(f"Saved output to {output_file}")
        
        # Generate statistics
        self._generate_report(df)
        
        # Save unclassified beers report
        if self.unclassified_beers:
            unclassified_df = pd.DataFrame(self.unclassified_beers)
            unclassified_df.to_csv('unclassified_beers.csv', index=False)
            logger.info(f"Saved {len(self.unclassified_beers)} unclassified beers to unclassified_beers.csv")
        
        return df
    
    def _generate_report(self, df: pd.DataFrame):
        """Generate classification statistics."""
        total_rows = len(df)
        unique_styles = df['beer_type'].nunique()
        unknown_count = len(df[df['beer_type'] == 'Unknown'])
        classification_rate = ((total_rows - unknown_count) / total_rows) * 100
        
        logger.info("\n=== Classification Report ===")
        logger.info(f"Total rows: {total_rows}")
        logger.info(f"Unique beer styles: {unique_styles}")
        logger.info(f"Successfully classified: {total_rows - unknown_count}")
        logger.info(f"Unknown classifications: {unknown_count}")
        logger.info(f"Classification rate: {classification_rate:.1f}%")
        
        # Top styles
        logger.info("\nTop 10 Beer Styles:")
        top_styles = df['beer_type'].value_counts().head(10)
        for style, count in top_styles.items():
            if style != 'Unknown':
                logger.info(f"  {style}: {count} ({count/total_rows*100:.1f}%)")
        
        # Top breweries
        logger.info("\nTop 10 Breweries by Beer Count:")
        top_breweries = df['brewery'].value_counts().head(10)
        for brewery, count in top_breweries.items():
            logger.info(f"  {brewery}: {count} beers")

# Main execution
if __name__ == "__main__":
    classifier = ComprehensiveBeerClassifier()
    
    # Process your CSV file
    input_file = "a.csv"  # Your input file
    output_file = "a_with_beer_types.csv"  # Output file with beer_type column
    
    try:
        result_df = classifier.process_csv(input_file, output_file)
        print(f"\nProcessing complete! Output saved to {output_file}")
        print(f"Check beer_processing.log for detailed information")
        print(f"Check unclassified_beers.csv for beers that need manual classification")
    except Exception as e:
        logger.error(f"Error processing file: {e}")
        raise
