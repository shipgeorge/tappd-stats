# 🍺 BRUTAL BEER STATS

A neo-brutalist, single-page web application that transforms beer consumption data into a visually striking and interactive experience. Built with raw HTML, CSS, and D3.js for maximum impact.

![Neo-Brutalist Design](https://img.shields.io/badge/Design-Neo--Brutalist-FF0000?style=for-the-badge&logo=css3)
![Mobile First](https://img.shields.io/badge/Mobile-First-00FF00?style=for-the-badge)
![D3.js](https://img.shields.io/badge/D3.js-Powered-FF6600?style=for-the-badge)

## 🎨 DESIGN PHILOSOPHY

**Neo-Brutalism at its finest:**
- **THICK BLACK BORDERS** (4px everywhere)
- **HARSH DROP SHADOWS** (8px brutal shadows)
- **BOLD NEON COLORS** (no subtle gradients allowed)
- **ASYMMETRICAL LAYOUTS** (intentionally "undesigned")
- **RAW TYPOGRAPHY** (JetBrains Mono monospace)
- **HIGH CONTRAST** (maximum visual impact)

## 📊 FEATURES

### AT-A-GLANCE DASHBOARD
- **Animated counters** for total check-ins, unique beers
- **Average rating** with visual emphasis
- **Top venue** highlighting most popular location
- **Brutal card layouts** with rotated elements

### LEADERBOARDS & RANKINGS
- **Top-rated beers** (minimum 2 ratings required)
- **Dominant breweries** by check-in volume
- **Popular beer styles** breakdown
- **Interactive hover effects** with brutal styling

### DATA EXPLORATION
Three interactive chart modes:
- **TIMELINE** - Daily consumption patterns with colorful bars
- **RATINGS** - Distribution histogram of beer ratings
- **VENUES** - Top 10 locations by check-in count

### UNIQUE INSIGHTS
- **Venue Personalities** - Average ratings by location
- **Style vs Rating** - Scatter plot revealing beer type preferences
- **Interactive tooltips** with detailed information

## 🛠️ TECHNICAL STACK

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Visualization**: D3.js v7 for custom charts
- **Data Processing**: Python 3 CSV converter
- **Design**: Mobile-first responsive design
- **Privacy**: No user names displayed anywhere

## 📂 PROJECT STRUCTURE

```
tappd-stats/
├── README.md              # This file
├── index.html             # Main website
├── styles.css             # Neo-brutalist stylesheet
├── script.js              # D3.js visualizations & interactions
├── convert_venues.py      # CSV to JavaScript converter
├── venues_database.csv    # Your beer data (CSV format)
└── venues_data.js         # Generated JavaScript data file
```

## 🚀 GETTING STARTED

### Prerequisites
- Python 3.x
- Modern web browser
- Your beer data in CSV format

### Installation & Setup

1. **Clone or download** this project
2. **Place your CSV file** as `venues_database.csv`
3. **Convert data to JavaScript:**
   ```bash
   python3 convert_venues.py
   ```
4. **Open in browser:**
   ```bash
   open index.html
   # or double-click index.html
   ```

### Updating Data

Whenever you have new beer data:
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

### Privacy-First
- **No usernames displayed** anywhere on the site
- **Data stays local** - no external API calls
- **Pure client-side** processing

### Mobile-Optimized
- **Mobile-first design** approach
- **Touch-friendly interactions**
- **Responsive grid layouts**
- **Optimized typography scaling**

### Performance
- **Lightweight codebase** (no frameworks)
- **Efficient D3.js rendering**
- **Cached data processing**
- **Fast load times**

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

### Common Issues

**"No data showing"**
- Ensure `venues_database.csv` exists
- Run `python3 convert_venues.py`
- Check browser console for errors

**"Charts not rendering"**
- Verify D3.js is loading (check network tab)
- Ensure `venues_data.js` was generated
- Try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

**"Mobile layout broken"**
- Clear browser cache
- Test in different browsers
- Check CSS media queries

## 🤝 CONTRIBUTING

This is a personal beer stats project, but feel free to:
- Report bugs or issues
- Suggest new visualization ideas
- Share design improvements
- Fork for your own brutal projects

## 📄 LICENSE

This project is open source. Use it, modify it, make it more brutal!

---

**Built with ❤️ and excessive amounts of ☕ + 🍺**

*Powered by brutal design principles and D3.js magic*