// 🍺 BRUTAL BEER STATS - MAIN JAVASCRIPT

class BrutalBeerStats {
    constructor() {
        // Validate that BEER_DATA exists and is an array
        if (typeof BEER_DATA === 'undefined') {
            console.error('BEER_DATA is not defined. Make sure venues_data.js is loaded.');
            return;
        }
        
        if (!Array.isArray(BEER_DATA) || BEER_DATA.length === 0) {
            console.error('BEER_DATA is not a valid array or is empty.');
            return;
        }
        
        this.data = BEER_DATA;
        this.currentView = 'timeline';
        this.init();
    }

    init() {
        try {
            console.log(`🍺 Loaded ${this.data.length} brutal beer records`);
            this.processData();
            this.renderDashboard();
            this.renderLeaderboards();
            this.setupExplorationControls();
            this.renderTimelineChart();
            this.renderInsights();
        } catch (error) {
            console.error('Error initializing BrutalBeerStats:', error);
            this.showError('Error loading beer data. Please check the console for details.');
        }
    }
    
    showError(message) {
        document.body.innerHTML = `
            <div style="
                padding: 40px;
                text-align: center;
                font-family: 'JetBrains Mono', monospace;
                background: #FF0000;
                color: #FFFFFF;
                border: 4px solid #000000;
                margin: 20px;
                box-shadow: 8px 8px 0px #000000;
            ">
                <h1>🍺 BRUTAL ERROR!</h1>
                <p>${message}</p>
            </div>
        `;
    }

    processData() {
        // Calculate basic stats
        this.totalCheckins = this.data.length;
        
        // Average rating (excluding null ratings)
        const validRatings = this.data.filter(d => d.rating !== null);
        this.avgRating = validRatings.length > 0 
            ? (validRatings.reduce((sum, d) => sum + d.rating, 0) / validRatings.length).toFixed(2)
            : 'N/A';
        
        // Unique beers count
        this.uniqueBeers = new Set(this.data.map(d => d.beer_name)).size;
        
        // Top venue by count
        const venueCount = {};
        this.data.forEach(d => {
            venueCount[d.venue] = (venueCount[d.venue] || 0) + 1;
        });
        this.topVenue = Object.entries(venueCount)
            .sort(([,a], [,b]) => b - a)[0][0];
    }

    renderDashboard() {
        // Check if elements exist before updating
        const totalCheckinsEl = document.getElementById('total-checkins');
        const avgRatingEl = document.getElementById('avg-rating');
        const uniqueBeersEl = document.getElementById('unique-beers');
        const topVenueEl = document.getElementById('top-venue');

        if (totalCheckinsEl) this.animateNumber('total-checkins', this.totalCheckins);
        if (avgRatingEl) avgRatingEl.textContent = this.avgRating;
        if (uniqueBeersEl) this.animateNumber('unique-beers', this.uniqueBeers);
        if (topVenueEl) topVenueEl.textContent = this.topVenue.toUpperCase();
    }

    animateNumber(elementId, finalValue) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.warn(`Element with ID '${elementId}' not found`);
            return;
        }
        
        let current = 0;
        const increment = Math.ceil(finalValue / 50);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
            }
            element.textContent = current.toLocaleString();
        }, 30);
    }

    renderLeaderboards() {
        this.renderTopBeers();
        this.renderTopBreweries();
        this.renderTopStyles();
    }

    renderTopBeers() {
        // Get beers with at least 2 ratings
        const beerRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!beerRatings[d.beer_name]) {
                    beerRatings[d.beer_name] = [];
                }
                beerRatings[d.beer_name].push(d.rating);
            }
        });

        const topBeers = Object.entries(beerRatings)
            .filter(([name, ratings]) => ratings.length >= 2)
            .map(([name, ratings]) => ({
                name,
                avgRating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 8);

        this.renderLeaderboard('top-beers', topBeers, 'avgRating', (val) => val.toFixed(2));
    }

    renderTopBreweries() {
        const breweryCount = {};
        this.data.forEach(d => {
            breweryCount[d.brewery] = (breweryCount[d.brewery] || 0) + 1;
        });

        const topBreweries = Object.entries(breweryCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);

        this.renderLeaderboard('top-breweries', topBreweries, 'count');
    }

    renderTopStyles() {
        const styleCount = {};
        this.data.forEach(d => {
            styleCount[d.beer_type] = (styleCount[d.beer_type] || 0) + 1;
        });

        const topStyles = Object.entries(styleCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);

        this.renderLeaderboard('top-styles', topStyles, 'count');
    }

    renderLeaderboard(containerId, data, valueKey, formatter = (val) => val) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        data.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'leaderboard-item';
            div.innerHTML = `
                <span class="leaderboard-rank">#${index + 1}</span>
                <span class="leaderboard-name">${item.name}</span>
                <span class="leaderboard-value">${formatter(item[valueKey])}</span>
            `;
            container.appendChild(div);
        });
    }

    setupExplorationControls() {
        const buttons = document.querySelectorAll('.brutal-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                buttons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentView = e.target.dataset.view;
                this.renderCurrentChart();
            });
        });
    }

    renderCurrentChart() {
        const container = document.getElementById('main-chart');
        container.innerHTML = '';

        switch(this.currentView) {
            case 'timeline':
                this.renderTimelineChart();
                break;
            case 'ratings':
                this.renderRatingsChart();
                break;
            case 'venues':
                this.renderVenuesChart();
                break;
        }
    }

    renderTimelineChart() {
        const container = d3.select('#main-chart');
        const margin = { top: 20, right: 30, bottom: 60, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 350 - margin.top - margin.bottom;

        // Group data by day
        const dailyData = d3.rollup(
            this.data,
            v => v.length,
            d => d3.timeDay(new Date(d.time))
        );

        const data = Array.from(dailyData, ([date, count]) => ({ date, count }))
            .sort((a, b) => a.date - b.date);

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([height, 0]);

        // Brutal colors for bars
        const colors = ['#FFFF00', '#FF6600', '#FF0000', '#0066FF', '#00FF00'];

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'chart-bar')
            .attr('x', d => x(d.date))
            .attr('width', Math.max(2, width / data.length - 2))
            .attr('y', d => y(d.count))
            .attr('height', d => height - y(d.count))
            .attr('fill', (d, i) => colors[i % colors.length])
            .on('mouseover', function(event, d) {
                d3.select(this).attr('stroke-width', 6);
                
                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                tooltip.html(`${d3.timeFormat('%b %d, %Y')(d.date)}<br/>${d.count} CHECKINS`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this).attr('stroke-width', 2);
                d3.selectAll('.chart-tooltip').remove();
            });

        // Brutal axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%m/%d')))
            .selectAll('text')
            .attr('class', 'chart-axis');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis');
    }

    renderRatingsChart() {
        const container = d3.select('#main-chart');
        const validRatings = this.data.filter(d => d.rating !== null);
        
        const ratingCounts = d3.rollup(
            validRatings,
            v => v.length,
            d => Math.floor(d.rating * 2) / 2 // Round to nearest 0.5
        );

        const data = Array.from(ratingCounts, ([rating, count]) => ({ rating, count }))
            .sort((a, b) => a.rating - b.rating);

        const margin = { top: 20, right: 30, bottom: 60, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 350 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.rating))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([height, 0]);

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'chart-bar')
            .attr('x', d => x(d.rating))
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.count))
            .attr('height', d => height - y(d.count))
            .attr('fill', '#FF6600')
            .on('mouseover', function(event, d) {
                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                tooltip.html(`RATING: ${d.rating}<br/>${d.count} BEERS`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.selectAll('.chart-tooltip').remove();
            });

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis');
    }

    renderVenuesChart() {
        const venueCount = {};
        this.data.forEach(d => {
            venueCount[d.venue] = (venueCount[d.venue] || 0) + 1;
        });

        const data = Object.entries(venueCount)
            .map(([venue, count]) => ({ venue: venue.toUpperCase(), count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        const container = d3.select('#main-chart');
        const margin = { top: 20, right: 30, bottom: 100, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 350 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.venue))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([height, 0]);

        const colors = ['#FFFF00', '#FF6600', '#FF0000', '#0066FF', '#00FF00'];

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'chart-bar')
            .attr('x', d => x(d.venue))
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.count))
            .attr('height', d => height - y(d.count))
            .attr('fill', (d, i) => colors[i % colors.length]);

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-45)');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis');
    }

    renderInsights() {
        this.renderVenueRatingsChart();
        this.renderStyleRatingScatter();
    }

    renderVenueRatingsChart() {
        // Calculate average rating per venue
        const venueRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!venueRatings[d.venue]) {
                    venueRatings[d.venue] = [];
                }
                venueRatings[d.venue].push(d.rating);
            }
        });

        const data = Object.entries(venueRatings)
            .filter(([venue, ratings]) => ratings.length >= 5) // At least 5 ratings
            .map(([venue, ratings]) => ({
                venue: venue.toUpperCase(),
                avgRating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => b.avgRating - a.avgRating);

        const container = d3.select('#venue-ratings-chart');
        const margin = { top: 20, right: 30, bottom: 80, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 250 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.venue))
            .range([0, width])
            .padding(0.2);

        const y = d3.scaleLinear()
            .domain([0, 5])
            .range([height, 0]);

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'chart-bar')
            .attr('x', d => x(d.venue))
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.avgRating))
            .attr('height', d => height - y(d.avgRating))
            .attr('fill', '#FF00FF');

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-45)');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis');
    }

    renderStyleRatingScatter() {
        // Calculate average rating per style
        const styleRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!styleRatings[d.beer_type]) {
                    styleRatings[d.beer_type] = [];
                }
                styleRatings[d.beer_type].push(d.rating);
            }
        });

        const data = Object.entries(styleRatings)
            .filter(([style, ratings]) => ratings.length >= 3)
            .map(([style, ratings]) => ({
                style,
                avgRating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
                count: ratings.length
            }));

        const container = d3.select('#style-rating-scatter');
        const margin = { top: 20, right: 30, bottom: 60, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 250 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, 5])
            .range([height, 0]);

        g.selectAll('.dot')
            .data(data)
            .enter().append('circle')
            .attr('class', 'dot')
            .attr('cx', d => x(d.count))
            .attr('cy', d => y(d.avgRating))
            .attr('r', 6)
            .attr('fill', '#0066FF')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2)
            .on('mouseover', function(event, d) {
                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                tooltip.html(`${d.style}<br/>AVG: ${d.avgRating.toFixed(2)} (${d.count} beers)`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.selectAll('.chart-tooltip').remove();
            });

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BrutalBeerStats();
});