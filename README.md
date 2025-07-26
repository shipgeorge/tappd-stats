# 🍺 Beer Statistics Dashboard

A captivating static website that transforms beer drinking data into beautiful, interactive visualizations. Perfect for deployment on any static hosting platform.

## Features

### 📊 At-a-Glance Dashboard
- Total beers consumed
- Number of unique breweries
- Average rating across all beers
- Most popular venue
- Active beer enthusiasts
- Favorite beer style

### 🏆 Champions & Favorites
- **Top Rated Beers**: Highest-rated beers with multiple reviews
- **Popular Breweries**: Most frequently consumed breweries
- **Beer Styles**: Most popular beer types
- **Active Venues**: Locations with the most beer activity

### 📈 Interactive Data Exploration
- **Drinking Timeline**: Beer consumption over time
- **Rating Distribution**: How ratings are distributed
- **Serving Types**: Breakdown by draft, can, bottle, etc.
- **User Activity**: Most active beer loggers

### 💎 Hidden Gems
- **Style vs Rating Matrix**: Discover which beer styles rate highest
- **Brewery Network**: Relationship between breweries, venues, and volume

## Static Site Architecture

This website is designed as a **static site** with embedded data:
- ✅ No server required
- ✅ Works on any static hosting platform
- ✅ Fast loading with embedded data
- ✅ Easy to update and deploy

## Data Format

The system processes CSV data with these columns:
- `venue`: Location where beer was consumed
- `user`: Username of the person logging the beer
- `time`: Timestamp in format "Day, DD Mon YYYY HH:MM:SS +ZZZZ"
- `serving`: Type of serving (draft, can, bottle, etc.) - can be empty
- `data_rating`: User rating (0.0-5.0) - can be empty
- `beer_name`: Full name of the beer
- `brewery`: Name of the brewery
- `beer_type`: Style/type of the beer

## How to Use

### For Viewing
1. Open `index.html` in any modern web browser
2. Data loads automatically from embedded database
3. Explore the interactive visualizations and insights

### For Updating Data
1. Replace `venues_database.csv` with your new data
2. Run: `python3 update_database.py`
3. Deploy the updated files to your hosting platform

## Files Structure

```
├── index.html          # Main website
├── styles.css          # All styling and responsive design
├── script.js           # Data processing + embedded database
├── update_database.py  # Script to update embedded data
└── venues_database.csv # Source data file
```

## Deployment

Perfect for static hosting on:
- **GitHub Pages**
- **Netlify** 
- **Vercel**
- **AWS S3**
- **Any web server**

Simply upload `index.html`, `styles.css`, and `script.js` - no server configuration needed!

## Technology Stack

- **HTML5** for structure
- **CSS3** with modern design and responsive layout
- **JavaScript (ES6+)** for data processing and interactivity
- **Plotly.js** for interactive data visualizations
- **Python3** for data processing (update script only)

## Browser Compatibility

Works in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 10.1+
- Edge 79+

## Performance

- ⚡ **Instant loading** - no external API calls
- 📱 **Mobile optimized** - responsive design
- 🎨 **Smooth animations** - optimized visualizations
- 💾 **Lightweight** - efficient embedded data structure

Transform your beer data into insights! 🍻