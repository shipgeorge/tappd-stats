# 🍺 BRUTAL BEER STATS

A neo-brutalist, single-page web application that transforms beer consumption data into a visually striking and interactive experience. Built with raw HTML, CSS, and D3.js for maximum impact. Features automated data scraping, mobile-optimized fullscreen charts, and comprehensive beer analytics.

![Neo-Brutalist Design](https://img.shields.io/badge/Design-Neo--Brutalist-FF0000?style=for-the-badge&logo=css3)
![Mobile First](https://img.shields.io/badge/Mobile-First-00FF00?style=for-the-badge)
![D3.js](https://img.shields.io/badge/D3.js-Powered-FF6600?style=for-the-badge)
![Auto Scraping](https://img.shields.io/badge/GitHub_Actions-Automated-0066FF?style=for-the-badge)
![Interactive Charts](https://img.shields.io/badge/Fullscreen-Mobile_Optimized-FF00FF?style=for-the-badge)

## 🎨 DESIGN PHILOSOPHY

**Neo-Brutalism at its finest:**
- **THICK BLACK BORDERS** (4px everywhere)
- **HARSH DROP SHADOWS** (8px brutal shadows)
- **BOLD NEON COLORS** (no subtle gradients allowed)
- **ASYMMETRICAL LAYOUTS** (intentionally "undesigned")
- **RAW TYPOGRAPHY** (JetBrains Mono monospace)
- **HIGH CONTRAST** (maximum visual impact)

## 📊 FEATURES

### 🏆 AT-A-GLANCE DASHBOARD
- **Animated counters** for total check-ins, unique beers
- **Average rating** with visual emphasis
- **Top venue** highlighting most popular location
- **Brutal card layouts** with rotated elements

### 📈 LEADERBOARDS & RANKINGS
- **Top-rated beers** (minimum 2 ratings required)
- **Dominant breweries** by check-in volume
- **Popular beer styles** breakdown
- **Interactive hover effects** with brutal styling

### 🔬 COMMUNITY ANALYSIS CHARTS
Advanced interactive visualizations:
- **QUALITY VS HYPE** - Scatter plot showing beer style ratings vs popularity
- **PRIME TIME** - Heatmap of drinking patterns by day/hour (2-hour mobile intervals)
- **SEASONAL** - Quarterly patterns with stacked beer style bars
- **GALAXY** - Network diagram of brewery relationships and connections
- **ADVENTURE INDEX** - Sophistication timeline showing ABV and style diversity over time

### 🏟️ VENUE & BREWERY INSIGHTS
- **Venue Reputation** - Heatmap of location ratings
- **Brewery Dominance** - Treemap visualization by check-in volume
- **Venue Battle Royale** - Tournament bracket (vertical on mobile, horizontal on desktop)

### 📱 MOBILE-FIRST FEATURES
- **Fullscreen mode** for all charts with mobile-optimized layouts
- **Interactive tooltips** with touch-friendly interactions
- **Swipe gestures** and mobile navigation patterns
- **Mobile notification** for desktop experience recommendation
- **Scroll position memory** when exiting fullscreen

### 🤖 AUTOMATED DATA PIPELINE
- **GitHub Actions** workflow for daily automated scraping
- **Robust cookie management** with automatic refresh
- **Incremental updates** (only scrapes new data)
- **Error recovery** with retry mechanisms
- **Beer style classification** using BJCP 2021 guidelines

## 🛠️ TECHNICAL STACK

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Visualization**: D3.js v7 for custom charts and mobile-optimized interactions
- **Data Processing**: Python 3 with pandas, BeautifulSoup4, and Selenium
- **Scraping**: Robust incremental scraper with cookie management
- **Automation**: GitHub Actions for daily data updates
- **Design**: Mobile-first responsive design with fullscreen chart optimization
- **Security**: Environment-based secrets management
- **Privacy**: No user names displayed anywhere

## 📂 PROJECT STRUCTURE

```
tappd-stats/
├── README.md                          # This file
├── index.html                         # Main brutal dashboard
├── styles.css                         # Neo-brutalist mobile-first styles
├── script.js                          # D3.js charts + mobile interactions
├── convert_venues.py                  # CSV to JavaScript converter
├── venues_database.csv                # Raw beer data (CSV format)
├── venues_data.js                     # Generated dashboard data
├── .github/workflows/
│   └── update-venue-data.yml          # Automated scraping workflow
└── scrapper/                          # Automated data collection system
    ├── robust_incremental_scraper.py  # Main scraper with error recovery
    ├── incremental_parallel_enhanced_scraper.py  # Core scraping engine
    ├── cookie_manager.py               # Cookie handling & refresh
    ├── classifier.py                   # BJCP beer style classification
    ├── github_runner.py                # GitHub Actions runner script
    ├── requirements.txt                # Python dependencies
    └── venues                          # Venue URLs to scrape
```

## 🚀 GETTING STARTED

### 📋 Prerequisites
- Python 3.9+
- Modern web browser (Chrome, Firefox, Safari)
- GitHub account (for automated scraping)

### 🎯 Quick Start Options

#### Option 1: Manual Data (Simple)
1. **Clone repository:**
   ```bash
   git clone <repo-url>
   cd tappd-stats
   ```
2. **Add your data** as `venues_database.csv`
3. **Convert to dashboard format:**
   ```bash
   python3 convert_venues.py
   ```
4. **Open dashboard:**
   ```bash
   open index.html
   ```

#### Option 2: Automated Scraping (Advanced)
1. **Set up GitHub Secret:**
   - Go to your repo Settings → Secrets and variables → Actions
   - Add secret named `UNTAPPD_COOKIES`
   - Value: JSON array of your Untappd cookies (see setup guide below)

2. **Configure venue list:**
   ```bash
   # Edit scrapper/venues file with your venue URLs
   echo "https://untappd.com/venue/123456" >> scrapper/venues
   ```

3. **Trigger automated scraping:**
   - GitHub Actions runs daily at 6 AM UTC
   - Or trigger manually via Actions tab → "Update Venue Data" → Run workflow

### 🍪 Cookie Setup for Automated Scraping

1. **Extract cookies from browser:**
   - Log into Untappd in Chrome
   - Open DevTools (F12) → Application → Cookies
   - Copy all untappd.com cookies as JSON array

2. **Example cookie format:**
   ```json
   [
     {"name": "session_id", "value": "abc123...", "domain": ".untappd.com"},
     {"name": "csrf_token", "value": "def456...", "domain": ".untappd.com"}
   ]
   ```

3. **Add to GitHub Secrets:**
   - Repository Settings → Secrets → New repository secret
   - Name: `UNTAPPD_COOKIES`
   - Value: Your cookie JSON array

### 🔄 Updating Data

**Automated (Recommended):**
- Daily automatic updates via GitHub Actions
- No manual intervention required
- Incremental updates (only new data)

**Manual:**
```bash
# Replace venues_database.csv with new data
python3 convert_venues.py
# Refresh browser to see updates
```

## 📋 DATA SCHEMA

Your CSV file must include these columns:

| Column | Type | Description | Required |
|--------|------|-------------|----------|
| `venue` | String | Location name | ✅ Yes |
| `user` | String | Username (removed for privacy) | ❌ No |
| `time` | String | Format: "Day, DD Mon YYYY HH:MM:SS +ZZZZ" | ✅ Yes |
| `serving` | String | "draft", "can", etc. (empty = "Unknown") | ❌ No |
| `data_rating` | String | "4.0", "4.25" (empty = excluded from calculations) | ❌ No |
| `beer_name` | String | Full beer name | ✅ Yes |
| `brewery` | String | Brewery name | ✅ Yes |
| `beer_type` | String | Beer style/type | ✅ Yes |

## 🎯 KEY FEATURES

### 🔒 Privacy & Security
- **No usernames displayed** anywhere on the site
- **Environment-based secrets** for automated scraping
- **Data stays local** - no external API calls during browsing
- **Pure client-side** dashboard processing

### 📱 Mobile Experience
- **Mobile-first design** with fullscreen chart optimization
- **Touch-friendly interactions** with improved tooltips
- **Responsive layouts** that adapt to screen size
- **Scroll position memory** when exiting fullscreen mode
- **Mobile notification** about desktop experience

### ⚡ Performance & Automation
- **Lightweight dashboard** (no heavy frameworks)
- **Efficient D3.js rendering** with mobile optimizations
- **Incremental data updates** (only scrapes new data)
- **Robust error recovery** with automatic cookie refresh
- **Parallel processing** for faster scraping

### 🍺 Beer Intelligence
- **BJCP 2021 style classification** for consistent categorization
- **Brewery pattern recognition** with comprehensive database
- **Advanced analytics** showing drinking patterns and preferences
- **Interactive visualizations** with touch-optimized controls

## 🎨 CUSTOMIZATION

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --brutal-yellow: #FFFF00;
    --brutal-orange: #FF6600;
    --brutal-red: #FF0000;
    --brutal-blue: #0066FF;
    --brutal-green: #00FF00;
    --brutal-pink: #FF00FF;
}
```

### Layout
- Modify grid layouts for different screen sizes
- Adjust card rotations and offsets
- Change border thickness and shadow intensity

### Data Insights
- Add new leaderboard categories in `script.js`
- Create custom D3.js visualizations
- Implement additional filtering options

## 🐛 TROUBLESHOOTING

### Dashboard Issues

**"No data showing"**
- Ensure `venues_database.csv` exists
- Run `python3 convert_venues.py`
- Check browser console for errors
- Verify `venues_data.js` contains valid data

**"Charts not rendering"**
- Verify D3.js is loading (check network tab)
- Ensure `venues_data.js` was generated properly
- Try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check for JavaScript errors in console

**"Mobile fullscreen issues"**
- Clear browser cache
- Test on actual mobile device (not just desktop simulation)
- Check if tooltips are staying within screen bounds

### Scraping Issues

**"GitHub Actions failing"**
- Check if `UNTAPPD_COOKIES` secret is properly set
- Verify cookie format is valid JSON array
- Look at workflow logs in Actions tab for specific errors

**"Cookie authentication errors"**
- Cookies may have expired - extract fresh ones from browser
- Update `UNTAPPD_COOKIES` secret with new values
- Check if Untappd requires additional authentication

**"Scraper not finding new data"**
- Verify venue URLs in `scrapper/venues` file are correct
- Check if venues have recent activity to scrape
- Review scraper logs in GitHub Actions artifacts

### Performance Issues

**"Slow chart rendering"**
- Large datasets may need optimization
- Consider reducing data size or implementing pagination
- Check browser memory usage with DevTools

## 🚀 ADVANCED FEATURES

### 🤖 Automated Scraping System
- **Robust incremental scraper** with error recovery and retry logic
- **Cookie management** with automatic refresh and validation
- **Parallel processing** for efficient data collection across multiple venues
- **BJCP beer classification** for consistent style categorization
- **GitHub Actions integration** for scheduled daily updates

### 📊 Mobile Chart Optimizations
- **Fullscreen mode** for all interactive charts
- **Touch-optimized tooltips** with bounds checking
- **Responsive layouts** with mobile-specific intervals (2-hour for Prime Time)
- **Gesture support** and mobile navigation patterns
- **Screen position memory** when transitioning between modes

### 🎨 Neo-Brutalist Mobile Design
- **Reduced chart heights** on mobile (250px ≤768px, 200px ≤480px)
- **Prominent fullscreen buttons** to encourage mobile chart usage
- **Vertical venue battle layout** for mobile tournament brackets
- **Softer color schemes** (Blues instead of harsh reds/oranges)
- **Mobile-first responsive typography** and spacing

## 🤝 CONTRIBUTING

This is a comprehensive beer analytics platform. Contributions welcome:
- **Bug reports** and performance issues
- **New visualization ideas** and chart types
- **Mobile UX improvements** and accessibility features  
- **Scraping enhancements** and data sources
- **Design refinements** keeping the brutal aesthetic
- **Beer classification improvements** for better categorization

## 📄 LICENSE

This project is open source. Use it, modify it, make it more brutal!

## 🏆 ACKNOWLEDGMENTS

- **D3.js community** for powerful visualization capabilities
- **BJCP 2021 guidelines** for comprehensive beer style classification
- **Neo-brutalist design movement** for the fearless aesthetic
- **Mobile-first philosophy** for inclusive user experience

---

**Built with ❤️ and excessive amounts of ☕ + 🍺**

*Powered by brutal design principles, mobile-first development, and automated beer intelligence*