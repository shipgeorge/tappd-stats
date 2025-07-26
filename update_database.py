#!/usr/bin/env python3
"""
Beer Statistics Database Update Script

This script converts venues_database.csv to embedded JavaScript data
and updates the script.js file for static site deployment.

Usage: python3 update_database.py
"""

import csv
import json
import os

def read_csv_data(csv_file):
    """Read CSV data and return as list of dictionaries"""
    data = []
    try:
        with open(csv_file, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(row)
        return data
    except FileNotFoundError:
        print(f"Error: {csv_file} not found!")
        return None
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return None

def create_javascript_data(data):
    """Convert data to JavaScript format"""
    js_data = 'const EMBEDDED_CSV_DATA = ' + json.dumps(data, indent=2) + ';\n\n'
    return js_data

def get_base_script():
    """Return the base JavaScript code for the beer stats analyzer"""
    return '''class BeerStatsAnalyzer {
    constructor() {
        this.data = [];
        this.processedData = {};
        this.initializeApp();
    }

    initializeApp() {
        // Use embedded data directly
        this.loadEmbeddedData();
    }

    loadEmbeddedData() {
        try {
            // Process the embedded CSV data
            this.data = [];
            EMBEDDED_CSV_DATA.forEach(row => {
                if (this.validateRow(row)) {
                    this.data.push(this.processRow(row));
                }
            });
            
            this.processData();
            this.updateDashboard();
            this.createVisualizations();
            
        } catch (error) {
            console.error('Error processing embedded data:', error);
            alert('Error processing beer data. Please refresh the page.');
        }
    }

    validateRow(row) {
        return row.venue && row.user && row.time && row.beer_name && row.brewery && row.beer_type;
    }

    processRow(row) {
        return {
            venue: row.venue,
            user: row.user,
            time: new Date(row.time),
            serving: row.serving || 'Unknown',
            rating: row.data_rating ? parseFloat(row.data_rating) : null,
            beer_name: row.beer_name,
            brewery: row.brewery,
            beer_type: row.beer_type
        };
    }

    processData() {
        this.processedData = {
            totalBeers: this.data.length,
            uniqueBreweries: new Set(this.data.map(d => d.brewery)).size,
            uniqueUsers: new Set(this.data.map(d => d.user)).size,
            avgRating: this.calculateAverageRating(),
            topVenue: this.getTopVenue(),
            favoriteBeerType: this.getFavoriteBeerType(),
            topBeers: this.getTopBeers(),
            topBreweries: this.getTopBreweries(),
            topBeerTypes: this.getTopBeerTypes(),
            topVenues: this.getTopVenues(),
            timelineData: this.getTimelineData(),
            ratingDistribution: this.getRatingDistribution(),
            servingTypes: this.getServingTypes(),
            userActivity: this.getUserActivity(),
            styleRatingMatrix: this.getStyleRatingMatrix(),
            breweryNetwork: this.getBreweryNetwork()
        };
    }

    calculateAverageRating() {
        const validRatings = this.data.filter(d => d.rating !== null).map(d => d.rating);
        return validRatings.length > 0 ? 
            (validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length).toFixed(2) : 
            'N/A';
    }

    getTopVenue() {
        const venueCount = {};
        this.data.forEach(d => venueCount[d.venue] = (venueCount[d.venue] || 0) + 1);
        return Object.keys(venueCount).reduce((a, b) => venueCount[a] > venueCount[b] ? a : b, '');
    }

    getFavoriteBeerType() {
        const typeCount = {};
        this.data.forEach(d => typeCount[d.beer_type] = (typeCount[d.beer_type] || 0) + 1);
        return Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b, '');
    }

    getTopBeers() {
        const beerRatings = {};
        const beerCounts = {};
        
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!beerRatings[d.beer_name]) {
                    beerRatings[d.beer_name] = [];
                }
                beerRatings[d.beer_name].push(d.rating);
            }
            beerCounts[d.beer_name] = (beerCounts[d.beer_name] || 0) + 1;
        });

        return Object.keys(beerRatings)
            .filter(beer => beerRatings[beer].length >= 2) // At least 2 ratings
            .map(beer => ({
                name: beer,
                avgRating: (beerRatings[beer].reduce((sum, r) => sum + r, 0) / beerRatings[beer].length).toFixed(2),
                count: beerCounts[beer]
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 10);
    }

    getTopBreweries() {
        const breweryCount = {};
        this.data.forEach(d => breweryCount[d.brewery] = (breweryCount[d.brewery] || 0) + 1);
        
        return Object.entries(breweryCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    getTopBeerTypes() {
        const typeCount = {};
        this.data.forEach(d => typeCount[d.beer_type] = (typeCount[d.beer_type] || 0) + 1);
        
        return Object.entries(typeCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    getTopVenues() {
        const venueCount = {};
        this.data.forEach(d => venueCount[d.venue] = (venueCount[d.venue] || 0) + 1);
        
        return Object.entries(venueCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    }

    getTimelineData() {
        const timelineMap = {};
        this.data.forEach(d => {
            const date = d.time.toISOString().split('T')[0];
            timelineMap[date] = (timelineMap[date] || 0) + 1;
        });

        return Object.entries(timelineMap)
            .sort(([a], [b]) => new Date(a) - new Date(b))
            .map(([date, count]) => ({ date, count }));
    }

    getRatingDistribution() {
        const ratingCount = {};
        this.data.filter(d => d.rating !== null).forEach(d => {
            const rating = Math.floor(d.rating * 2) / 2; // Round to nearest 0.5
            ratingCount[rating] = (ratingCount[rating] || 0) + 1;
        });

        return Object.entries(ratingCount)
            .sort(([a], [b]) => a - b)
            .map(([rating, count]) => ({ rating: parseFloat(rating), count }));
    }

    getServingTypes() {
        const servingCount = {};
        this.data.forEach(d => servingCount[d.serving] = (servingCount[d.serving] || 0) + 1);
        
        return Object.entries(servingCount)
            .map(([type, count]) => ({ type, count }))
            .sort((a, b) => b.count - a.count);
    }

    getUserActivity() {
        const userCount = {};
        this.data.forEach(d => userCount[d.user] = (userCount[d.user] || 0) + 1);
        
        return Object.entries(userCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([user, count]) => ({ user, count }));
    }

    getStyleRatingMatrix() {
        const styleRatings = {};
        this.data.filter(d => d.rating !== null).forEach(d => {
            if (!styleRatings[d.beer_type]) {
                styleRatings[d.beer_type] = [];
            }
            styleRatings[d.beer_type].push(d.rating);
        });

        return Object.entries(styleRatings)
            .filter(([, ratings]) => ratings.length >= 3)
            .map(([style, ratings]) => ({
                style,
                avgRating: (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(2),
                count: ratings.length,
                minRating: Math.min(...ratings),
                maxRating: Math.max(...ratings)
            }))
            .sort((a, b) => b.avgRating - a.avgRating);
    }

    getBreweryNetwork() {
        const breweryVenues = {};
        this.data.forEach(d => {
            if (!breweryVenues[d.brewery]) {
                breweryVenues[d.brewery] = new Set();
            }
            breweryVenues[d.brewery].add(d.venue);
        });

        return Object.entries(breweryVenues)
            .map(([brewery, venues]) => ({
                brewery,
                venueCount: venues.size,
                totalBeers: this.data.filter(d => d.brewery === brewery).length
            }))
            .sort((a, b) => b.venueCount - a.venueCount)
            .slice(0, 15);
    }

    updateDashboard() {
        document.getElementById('totalBeers').textContent = this.processedData.totalBeers.toLocaleString();
        document.getElementById('uniqueBreweries').textContent = this.processedData.uniqueBreweries.toLocaleString();
        document.getElementById('avgRating').textContent = this.processedData.avgRating;
        document.getElementById('topVenue').textContent = this.processedData.topVenue;
        document.getElementById('uniqueUsers').textContent = this.processedData.uniqueUsers.toLocaleString();
        document.getElementById('favoriteBeerType').textContent = this.processedData.favoriteBeerType;

        this.updateLeaderboards();
    }

    updateLeaderboards() {
        this.renderLeaderboard('topBeers', this.processedData.topBeers, 
            item => `${item.name.length > 30 ? item.name.substring(0, 30) + '...' : item.name}`, 
            item => `⭐ ${item.avgRating}`);
        
        this.renderLeaderboard('topBreweries', this.processedData.topBreweries, 
            item => item.name, 
            item => `${item.count} beers`);
        
        this.renderLeaderboard('topBeerTypes', this.processedData.topBeerTypes, 
            item => item.name, 
            item => `${item.count}x`);
        
        this.renderLeaderboard('topVenues', this.processedData.topVenues, 
            item => item.name, 
            item => `${item.count} visits`);
    }

    renderLeaderboard(elementId, data, nameFormatter, valueFormatter) {
        const container = document.getElementById(elementId);
        container.innerHTML = data.map((item, index) => `
            <div class="leaderboard-item">
                <span class="leaderboard-rank">#${index + 1}</span>
                <span class="leaderboard-name">${nameFormatter(item)}</span>
                <span class="leaderboard-value">${valueFormatter(item)}</span>
            </div>
        `).join('');
    }

    createVisualizations() {
        this.createTimelineChart();
        this.createRatingChart();
        this.createServingChart();
        this.createUserActivityChart();
        this.createStyleRatingMatrix();
        this.createBreweryNetwork();
    }

    createTimelineChart() {
        const data = [{
            x: this.processedData.timelineData.map(d => d.date),
            y: this.processedData.timelineData.map(d => d.count),
            type: 'scatter',
            mode: 'lines+markers',
            fill: 'tozeroy',
            line: { color: '#d4a574', width: 3 },
            marker: { color: '#f4a261', size: 6 }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Date'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Beers Consumed'
            },
            margin: { t: 20, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('timelineChart', data, layout, {responsive: true});
    }

    createRatingChart() {
        const data = [{
            x: this.processedData.ratingDistribution.map(d => d.rating),
            y: this.processedData.ratingDistribution.map(d => d.count),
            type: 'bar',
            marker: {
                color: '#d4a574',
                line: { color: '#f4a261', width: 2 }
            }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Rating'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Count'
            },
            margin: { t: 20, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('ratingChart', data, layout, {responsive: true});
    }

    createServingChart() {
        const data = [{
            values: this.processedData.servingTypes.map(d => d.count),
            labels: this.processedData.servingTypes.map(d => d.type),
            type: 'pie',
            marker: {
                colors: ['#d4a574', '#f4a261', '#8b4513', '#deb887', '#cd853f', '#a0522d']
            },
            textinfo: 'label+percent',
            textfont: { color: '#ffffff' }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            margin: { t: 20, r: 20, b: 20, l: 20 }
        };

        Plotly.newPlot('servingChart', data, layout, {responsive: true});
    }

    createUserActivityChart() {
        const data = [{
            x: this.processedData.userActivity.map(d => d.count),
            y: this.processedData.userActivity.map(d => d.user),
            type: 'bar',
            orientation: 'h',
            marker: {
                color: '#d4a574',
                line: { color: '#f4a261', width: 1 }
            }
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Beers Logged'
            },
            yaxis: { 
                gridcolor: '#404040'
            },
            margin: { t: 20, r: 20, b: 60, l: 120 }
        };

        Plotly.newPlot('userActivityChart', data, layout, {responsive: true});
    }

    createStyleRatingMatrix() {
        const matrixData = this.processedData.styleRatingMatrix;
        
        const data = [{
            x: matrixData.map(d => d.avgRating),
            y: matrixData.map(d => d.count),
            text: matrixData.map(d => d.style),
            mode: 'markers+text',
            marker: {
                size: matrixData.map(d => Math.max(8, Math.min(20, d.count / 2))),
                color: matrixData.map(d => d.avgRating),
                colorscale: 'Viridis',
                opacity: 0.7,
                line: { color: '#ffffff', width: 1 }
            },
            textposition: 'top center',
            textfont: { size: 10, color: '#ffffff' },
            type: 'scatter'
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Average Rating'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Number of Beers'
            },
            margin: { t: 40, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('styleRatingMatrix', data, layout, {responsive: true});
    }

    createBreweryNetwork() {
        const networkData = this.processedData.breweryNetwork;
        
        const data = [{
            x: networkData.map(d => d.venueCount),
            y: networkData.map(d => d.totalBeers),
            text: networkData.map(d => d.brewery),
            mode: 'markers+text',
            marker: {
                size: networkData.map(d => Math.max(8, Math.min(25, d.totalBeers / 5))),
                color: '#d4a574',
                opacity: 0.7,
                line: { color: '#f4a261', width: 2 }
            },
            textposition: 'top center',
            textfont: { size: 9, color: '#ffffff' },
            type: 'scatter'
        }];

        const layout = {
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#ffffff' },
            xaxis: { 
                gridcolor: '#404040',
                title: 'Number of Venues'
            },
            yaxis: { 
                gridcolor: '#404040',
                title: 'Total Beers'
            },
            margin: { t: 40, r: 20, b: 60, l: 60 }
        };

        Plotly.newPlot('breweryNetwork', data, layout, {responsive: true});
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new BeerStatsAnalyzer();
});'''

def update_script_file(csv_file='venues_database.csv', output_file='script.js'):
    """Main function to update the script file with new data"""
    print(f"🍺 Beer Statistics Database Updater")
    print(f"=====================================")
    
    # Read CSV data
    print(f"📊 Reading data from {csv_file}...")
    data = read_csv_data(csv_file)
    if data is None:
        return False
    
    print(f"✅ Successfully read {len(data)} records")
    
    # Create JavaScript content
    print(f"🔄 Converting to JavaScript format...")
    js_data = create_javascript_data(data)
    base_script = get_base_script()
    
    # Combine and write to file
    full_script = js_data + base_script
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(full_script)
        print(f"✅ Successfully updated {output_file}")
        print(f"📈 Website is now ready with {len(data)} beer records!")
        return True
    except Exception as e:
        print(f"❌ Error writing to {output_file}: {e}")
        return False

if __name__ == "__main__":
    # Check if venues_database.csv exists
    if not os.path.exists('venues_database.csv'):
        print("❌ Error: venues_database.csv not found in current directory!")
        print("Please make sure the CSV file is in the same directory as this script.")
        exit(1)
    
    # Run the update
    success = update_script_file()
    
    if success:
        print("\n🚀 Update complete! Your static beer statistics site is ready to deploy.")
        print("   Simply upload index.html, styles.css, and script.js to your hosting platform.")
    else:
        print("\n❌ Update failed. Please check the error messages above.")
        exit(1)