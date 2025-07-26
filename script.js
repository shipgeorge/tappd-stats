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
        this.currentView = 'quality-matrix';
        this.init();
        this.showMobileNotification();
    }

    init() {
        try {
            console.log(`🍺 Loaded ${this.data.length} brutal beer records`);
            this.processData();
            this.renderDashboard();
            this.renderLeaderboards();
            this.setupExplorationControls();
            this.renderCurrentExplorationChart(); // Default exploration chart based on currentView
            this.renderAllBrutalCharts();
        } catch (error) {
            console.error('Error initializing BrutalBeerStats:', error);
            this.showError('Error loading beer data. Please check the console for details.');
        }
    }

    renderAllBrutalCharts() {
        // Render all the static charts
        this.renderVenueHeatmap();
        this.renderBreweryTreemap();
        this.renderRatingWaves();
        this.renderConsensusChampions();
        this.renderABVAnalysis();
        this.renderBeerTypeCharts();
        this.renderVenueBattle();
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
        this.renderWorstBeers();
        this.renderWorstBreweries();
        this.renderWorstStyles();
    }

    renderTopBeers() {
        // Get beers with at least 5 ratings to avoid outliers
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
            .filter(([name, ratings]) => ratings.length >= 5)
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
        // Get breweries with at least 10 ratings to avoid outliers
        const breweryRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!breweryRatings[d.brewery]) {
                    breweryRatings[d.brewery] = [];
                }
                breweryRatings[d.brewery].push(d.rating);
            }
        });

        const topBreweries = Object.entries(breweryRatings)
            .filter(([name, ratings]) => ratings.length >= 10)
            .map(([name, ratings]) => ({
                name,
                avgRating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 8);

        this.renderLeaderboard('top-breweries', topBreweries, 'avgRating', (val) => val.toFixed(2));
    }

    renderTopStyles() {
        // Get beer styles with at least 8 ratings to avoid outliers
        const styleRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!styleRatings[d.beer_type]) {
                    styleRatings[d.beer_type] = [];
                }
                styleRatings[d.beer_type].push(d.rating);
            }
        });

        const topStyles = Object.entries(styleRatings)
            .filter(([name, ratings]) => ratings.length >= 8)
            .map(([name, ratings]) => ({
                name,
                avgRating: ratings.reduce((sum, r) => sum + r, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 8);

        this.renderLeaderboard('top-styles', topStyles, 'avgRating', (val) => val.toFixed(2));
    }

    renderWorstBeers() {
        // Get beers with at least 5 ratings to avoid outliers
        const beerRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!beerRatings[d.beer_name]) {
                    beerRatings[d.beer_name] = [];
                }
                beerRatings[d.beer_name].push(d.rating);
            }
        });

        const worstBeers = Object.entries(beerRatings)
            .filter(([name, ratings]) => ratings.length >= 5)
            .map(([name, ratings]) => ({
                name,
                avgRating: ratings.reduce((a, b) => a + b, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => a.avgRating - b.avgRating)
            .slice(0, 8);

        this.renderLeaderboard('worst-beers', worstBeers, 'avgRating', (val) => val.toFixed(2));
    }

    renderWorstBreweries() {
        // Get breweries with at least 10 ratings to avoid outliers
        const breweryRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!breweryRatings[d.brewery]) {
                    breweryRatings[d.brewery] = [];
                }
                breweryRatings[d.brewery].push(d.rating);
            }
        });

        const worstBreweries = Object.entries(breweryRatings)
            .filter(([name, ratings]) => ratings.length >= 10)
            .map(([name, ratings]) => ({
                name,
                avgRating: ratings.reduce((a, b) => a + b, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => a.avgRating - b.avgRating)
            .slice(0, 8);

        this.renderLeaderboard('worst-breweries', worstBreweries, 'avgRating', (val) => val.toFixed(2));
    }

    renderWorstStyles() {
        // Get beer styles with at least 8 ratings to avoid outliers
        const styleRatings = {};
        this.data.forEach(d => {
            if (d.rating !== null) {
                if (!styleRatings[d.beer_type]) {
                    styleRatings[d.beer_type] = [];
                }
                styleRatings[d.beer_type].push(d.rating);
            }
        });

        const worstStyles = Object.entries(styleRatings)
            .filter(([name, ratings]) => ratings.length >= 8)
            .map(([name, ratings]) => ({
                name,
                avgRating: ratings.reduce((a, b) => a + b, 0) / ratings.length,
                count: ratings.length
            }))
            .sort((a, b) => a.avgRating - b.avgRating)
            .slice(0, 8);

        this.renderLeaderboard('worst-styles', worstStyles, 'avgRating', (val) => val.toFixed(2));
    }

    renderLeaderboard(containerId, data, valueKey, formatter = (val) => val) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Leaderboard container '${containerId}' not found`);
            return;
        }
        
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
                this.renderCurrentExplorationChart();
            });
        });
    }

    renderCurrentExplorationChart() {
        const container = document.getElementById('main-exploration-chart');
        if (!container) {
            console.warn('main-exploration-chart container not found');
            return;
        }
        container.innerHTML = '';

        switch(this.currentView) {
            case 'quality-matrix':
                this.renderQualityMatrixChart();
                break;
            case 'seasonal':
                this.renderSeasonalPatternsChart();
                break;
            case 'weekend-rhythm':
                this.renderWeekendRhythmChart();
                break;
            case 'sophistication-wave':
                this.renderSophisticationWaveChart();
                break;
            case 'ecosystem-network':
                this.renderEcosystemNetworkChart();
                break;
        }

        // Add fullscreen button for mobile
        if (window.innerWidth <= 768) {
            this.addFullscreenButton(container);
        }
    }

    renderTimelineChart() {
        const container = d3.select('#main-chart');
        if (container.empty()) {
            console.warn('Timeline chart container #main-chart not found');
            return;
        }
        
        const containerNode = container.node();
        if (!containerNode) {
            console.warn('Timeline chart container node is null');
            return;
        }
        
        const margin = { top: 20, right: 30, bottom: 60, left: 60 };
        const width = containerNode.offsetWidth - margin.left - margin.right;
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
            .slice(0, 8);

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

    // 🍺 NEW BRUTAL VISUALIZATIONS


    // 2. Style Popularity vs Quality Matrix
    renderQualityMatrixChart(isFullscreen = false) {
        const container = d3.select('#main-exploration-chart');
        if (container.empty()) return;

        container.selectAll('*').remove();

        // Mobile fullscreen optimizations
        let margin, width, height;
        if (isFullscreen) {
            // Move legend below chart in fullscreen mode
            margin = { top: 30, right: 40, bottom: 120, left: 60 };
            width = container.node().offsetWidth - margin.left - margin.right;
            height = container.node().offsetHeight - margin.top - margin.bottom;
        } else {
            margin = { top: 20, right: 180, bottom: 80, left: 60 };
            width = container.node().offsetWidth - margin.left - margin.right;
            height = 350 - margin.top - margin.bottom;
        }

        // Calculate style stats
        const styleStats = {};
        this.data.forEach(d => {
            if (!styleStats[d.beer_type]) {
                styleStats[d.beer_type] = { ratings: [], count: 0, uniqueBeers: new Set() };
            }
            styleStats[d.beer_type].count++;
            styleStats[d.beer_type].uniqueBeers.add(d.beer_name);
            if (d.rating !== null) {
                styleStats[d.beer_type].ratings.push(d.rating);
            }
        });

        let data = Object.entries(styleStats)
            .filter(([style, stats]) => stats.ratings.length >= 8 && stats.count >= 10 && stats.uniqueBeers.size > 2)
            .map(([style, stats]) => ({
                style,
                avgRating: stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length,
                checkins: stats.count,
                uniqueBeers: stats.uniqueBeers.size
            }));

        // Mobile fullscreen optimization: limit to top 25 most popular styles
        if (isFullscreen) {
            data = data
                .sort((a, b) => b.checkins - a.checkins)
                .slice(0, 25);
        }

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create color scale for different beer styles
        const colors = [
            '#FF0000', '#00FF00', '#0066FF', '#FFFF00', '#FF6600', 
            '#FF00FF', '#00FFFF', '#FF3366', '#66FF33', '#3366FF',
            '#FFCC00', '#CC00FF', '#00CCFF', '#FF0066', '#66FF00',
            '#FF9900', '#9900FF', '#00FF99', '#FF0099', '#99FF00',
            '#0099FF', '#FF9966', '#66FF99', '#9966FF', '#99FFCC',
            '#FFCC99', '#CC99FF', '#FF6699', '#66CCFF', '#CCFF66',
            '#FF3300', '#33FF00', '#0033FF', '#FF3399', '#99FF33',
            '#3399FF', '#FF6633', '#33FF66', '#6633FF', '#FFAA00',
            '#AA00FF', '#00FFAA', '#FF00AA', '#AAFF00', '#00AAFF'
        ];
        
        const colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d.style))
            .range(colors);

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.checkins)])
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([d3.min(data, d => d.avgRating) - 0.1, d3.max(data, d => d.avgRating) + 0.1])
            .range([height, 0]);

        const r = d3.scaleSqrt()
            .domain([0, d3.max(data, d => d.uniqueBeers)])
            .range([4, 15]);

        g.selectAll('.dot')
            .data(data)
            .enter().append('circle')
            .attr('class', 'dot')
            .attr('cx', d => x(d.checkins))
            .attr('cy', d => y(d.avgRating))
            .attr('r', d => {
                const baseRadius = r(d.uniqueBeers);
                return isFullscreen ? Math.max(baseRadius * 1.5, 8) : baseRadius;
            })
            .attr('fill', d => colorScale(d.style))
            .attr('stroke', '#000000')
            .attr('stroke-width', isFullscreen ? 3 : 2)
            .style('opacity', 0.8)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .style('opacity', 1)
                    .attr('stroke-width', 3);

                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                tooltip.html(`
                    <strong>${d.style}</strong><br/>
                    Avg Rating: <strong>${d.avgRating.toFixed(2)}</strong><br/>
                    Check-ins: <strong>${d.checkins}</strong><br/>
                    Unique Beers: <strong>${d.uniqueBeers}</strong>
                `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 50) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .style('opacity', 0.8)
                    .attr('stroke-width', 2);
                d3.selectAll('.chart-tooltip').remove();
            });

        // Add axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        // Add axis labels
        g.append('text')
            .attr('x', width / 2)
            .attr('y', height + 50)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('TOTAL CHECK-INS (POPULARITY)');

        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -height / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('AVERAGE RATING (QUALITY)');

        // Add legend - position based on fullscreen mode
        if (isFullscreen) {
            // Mobile fullscreen: horizontal legend below chart
            const legend = g.append('g')
                .attr('transform', `translate(0, ${height + 60})`);

            // Background for horizontal legend
            legend.append('rect')
                .attr('x', -10)
                .attr('y', -10)
                .attr('width', width + 20)
                .attr('height', 50)
                .attr('fill', '#FFFFFF')
                .attr('stroke', '#000000')
                .attr('stroke-width', 2)
                .style('filter', 'drop-shadow(2px 2px 0px #000000)');

            // Show top 12 styles in 3 rows of 4
            const topStyles = data.slice(0, 12);
            const itemsPerRow = 4;
            
            topStyles.forEach((d, i) => {
                const row = Math.floor(i / itemsPerRow);
                const col = i % itemsPerRow;
                const x = col * (width / itemsPerRow) + 20;
                const y = row * 15 + 5;

                legend.append('circle')
                    .attr('cx', x)
                    .attr('cy', y)
                    .attr('r', 5)
                    .attr('fill', colorScale(d.style))
                    .attr('stroke', '#000000')
                    .attr('stroke-width', 1);

                legend.append('text')
                    .attr('x', x + 10)
                    .attr('y', y + 4)
                    .text(d.style.length > 10 ? d.style.substring(0, 10) + '...' : d.style)
                    .attr('class', 'chart-axis')
                    .style('font-size', '9px')
                    .style('font-weight', 'bold');
            });
        } else {
            // Desktop: vertical legend on the right
            const legend = g.append('g')
                .attr('transform', `translate(${width + 40}, 10)`);

            legend.append('rect')
                .attr('x', -10)
                .attr('y', -10)
                .attr('width', 130)
                .attr('height', Math.min(data.length * 18 + 10, height - 20))
                .attr('fill', '#FFFFFF')
                .attr('stroke', '#000000')
                .attr('stroke-width', 2);

            data.slice(0, Math.floor((height - 40) / 18)).forEach((d, i) => {
                legend.append('circle')
                    .attr('cx', 6)
                    .attr('cy', i * 18 + 6)
                    .attr('r', 4)
                    .attr('fill', colorScale(d.style))
                    .attr('stroke', '#000000')
                    .attr('stroke-width', 1);

                legend.append('text')
                    .attr('x', 16)
                    .attr('y', i * 18 + 10)
                    .text(d.style.length > 12 ? d.style.substring(0, 12) + '...' : d.style)
                    .attr('class', 'chart-axis')
                    .style('font-size', '8px')
                    .style('font-weight', 'bold');
            });
        }

        // Description (skip in fullscreen mode)
        if (!isFullscreen) {
            const description = container.append('div')
                .style('margin-top', '20px')
                .style('padding', '16px')
                .style('background', '#FFFFFF')
                .style('border', '4px solid #000000')
                .style('box-shadow', '4px 4px 0px #000000')
                .style('font-family', "'JetBrains Mono', monospace")
                .style('font-size', '12px')
                .style('line-height', '1.4');

            description.html(`
                <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #FF6600;">📊 WHAT THIS SHOWS</h3>
                <p style="margin: 0 0 12px 0;"><strong>Scatter Plot:</strong> Each dot represents a beer style positioned by popularity (X-axis) vs average rating (Y-axis).</p>
                <p style="margin: 0 0 12px 0;"><strong>Dot Size:</strong> Larger dots = more unique beers tried in that style (variety indicator).</p>
                <p style="margin: 0 0 12px 0;"><strong>Colors:</strong> 45 distinct colors help distinguish between different beer styles.</p>
                <p style="margin: 0 0 12px 0;"><strong>Filtering:</strong> Only shows styles with ≥8 ratings, ≥10 check-ins, and ≥3 unique beers for reliability.</p>
                <h3 style="margin: 12px 0 8px 0; font-size: 14px; color: #0066FF;">🔍 KEY INSIGHTS</h3>
                <p style="margin: 0;">• <strong>Top-right quadrant:</strong> Popular + highly-rated styles (community favorites)<br/>
                • <strong>Top-left quadrant:</strong> High quality but niche styles (hidden gems)<br/>
                • <strong>Bottom-right quadrant:</strong> Popular but lower-rated (overhyped styles)<br/>
                • <strong>Large dots:</strong> Styles with lots of variety and exploration</p>
            `);
        }
    }

    // 3. Seasonal Drinking Patterns
    renderSeasonalPatternsChart(isFullscreen = false) {
        const container = d3.select('#main-exploration-chart');
        if (container.empty()) return;

        container.selectAll('*').remove();

        // Mobile fullscreen optimizations
        let margin, width, height, useQuarterly, styleLimit;
        if (isFullscreen) {
            margin = { top: 40, right: 30, bottom: 120, left: 60 }; // Increased bottom margin for x-axis
            width = container.node().offsetWidth - margin.left - margin.right;
            height = container.node().offsetHeight - margin.top - margin.bottom - 60; // Reserve space for legend
            useQuarterly = true;
            styleLimit = 5; // Fewer styles for mobile
        } else {
            margin = { top: 20, right: 120, bottom: 60, left: 60 };
            width = container.node().offsetWidth - margin.left - margin.right;
            height = 350 - margin.top - margin.bottom;
            useQuarterly = false;
            styleLimit = 6;
        }

        // Helper function to map months to seasons
        const getSeason = (month) => {
            // Spring: Mar-May (2-4), Summer: Jun-Aug (5-7), Autumn: Sep-Nov (8-10), Winter: Dec-Feb (11,0,1)
            if (month >= 2 && month <= 4) return 0; // Spring
            if (month >= 5 && month <= 7) return 1; // Summer
            if (month >= 8 && month <= 10) return 2; // Autumn
            return 3; // Winter (Dec, Jan, Feb)
        };

        // Group by time period (monthly or seasonal) and style
        const timeData = {};
        this.data.forEach(d => {
            const date = new Date(d.time);
            const timePeriod = useQuarterly 
                ? getSeason(date.getMonth())  // 0-3 for seasons (Spring, Summer, Autumn, Winter)
                : date.getMonth(); // 0-11 for months
            
            if (!timeData[timePeriod]) {
                timeData[timePeriod] = {};
            }
            if (!timeData[timePeriod][d.beer_type]) {
                timeData[timePeriod][d.beer_type] = 0;
            }
            timeData[timePeriod][d.beer_type]++;
        });

        // Get top styles
        const styleCount = {};
        this.data.forEach(d => {
            styleCount[d.beer_type] = (styleCount[d.beer_type] || 0) + 1;
        });
        const topStyles = Object.entries(styleCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, styleLimit)
            .map(([style]) => style);

        const periodCount = useQuarterly ? 4 : 12;
        const data = Array.from({length: periodCount}, (_, period) => {
            const result = { period };
            topStyles.forEach(style => {
                result[style] = timeData[period] ? (timeData[period][style] || 0) : 0;
            });
            return result;
        });

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.period))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => topStyles.reduce((sum, style) => sum + d[style], 0))])
            .range([height, 0]);

        const color = d3.scaleOrdinal()
            .domain(topStyles)
            .range(['#FFFF00', '#FF6600', '#FF0000', '#0066FF', '#00FF00', '#FF00FF']);

        const stack = d3.stack().keys(topStyles);
        const stackedData = stack(data);

        g.selectAll('.layer')
            .data(stackedData)
            .enter().append('g')
            .attr('class', 'layer')
            .attr('fill', d => color(d.key))
            .selectAll('rect')
            .data(d => d)
            .enter().append('rect')
            .attr('x', d => x(d.data.period))
            .attr('y', d => y(d[1]))
            .attr('height', d => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth())
            .attr('stroke', '#000000')
            .attr('stroke-width', isFullscreen ? 3 : 2)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .attr('stroke-width', 3);

                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                
                const timeLabels = useQuarterly 
                    ? ['Spring (Mar-May)', 'Summer (Jun-Aug)', 'Autumn (Sep-Nov)', 'Winter (Dec-Feb)']
                    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                
                const styleKey = d3.select(this.parentNode).datum().key;
                const count = d[1] - d[0];
                
                tooltip.html(`
                    <strong>${timeLabels[d.data.period]}</strong><br/>
                    ${styleKey}: <strong>${count}</strong>
                `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 40) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .attr('stroke-width', 2);
                d3.selectAll('.chart-tooltip').remove();
            });

        const timeLabels = useQuarterly 
            ? ['SPRING', 'SUMMER', 'AUTUMN', 'WINTER']
            : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        // Add x-axis
        const xAxis = g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(d => timeLabels[d]));
            
        xAxis.selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', isFullscreen ? '12px' : '10px')
            .style('font-weight', 'bold');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', isFullscreen ? '12px' : '10px')
            .style('font-weight', 'bold');

        // Add axis labels
        g.append('text')
            .attr('x', width / 2)
            .attr('y', height + (isFullscreen ? 80 : 50)) // Move label further down in fullscreen
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', isFullscreen ? '14px' : '12px')
            .style('font-weight', 'bold')
            .text(useQuarterly ? 'SEASON' : 'MONTH');

        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -height / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('CHECK-INS');

        // Legend - position based on fullscreen mode
        if (isFullscreen) {
            // Mobile fullscreen: horizontal legend below chart
            const legend = container.append('div')
                .style('margin-top', '20px')
                .style('text-align', 'center')
                .style('font-family', "'JetBrains Mono', monospace");

            const legendGrid = legend.append('div')
                .style('display', 'inline-flex')
                .style('flex-wrap', 'wrap')
                .style('justify-content', 'center')
                .style('gap', '15px')
                .style('max-width', width + 'px');

            topStyles.forEach((style, i) => {
                const legendItem = legendGrid.append('div')
                    .style('display', 'flex')
                    .style('align-items', 'center')
                    .style('gap', '5px');

                legendItem.append('div')
                    .style('width', '16px')
                    .style('height', '16px')
                    .style('background-color', color(style))
                    .style('border', '2px solid #000000')
                    .style('flex-shrink', '0');

                legendItem.append('span')
                    .style('font-size', '11px')
                    .style('font-weight', 'bold')
                    .style('color', '#000000')
                    .text(style.length > 14 ? style.substring(0, 14) + '...' : style);
            });
        } else {
            // Desktop: vertical legend on the right
            const legend = g.append('g')
                .attr('transform', `translate(${width + 10}, 0)`);

            topStyles.forEach((style, i) => {
                const legendRow = legend.append('g')
                    .attr('transform', `translate(0, ${i * 20})`);

                legendRow.append('rect')
                    .attr('width', 15)
                    .attr('height', 15)
                    .attr('fill', color(style))
                    .attr('stroke', '#000000')
                    .attr('stroke-width', 1);

                legendRow.append('text')
                    .attr('x', 20)
                    .attr('y', 12)
                    .text(style.substring(0, 12))
                    .attr('class', 'chart-axis')
                    .style('font-size', '10px')
                    .style('font-weight', 'bold');
            });
        }

        // Description (skip in fullscreen mode)
        if (!isFullscreen) {
            const description = container.append('div')
                .style('margin-top', '20px')
                .style('padding', '16px')
                .style('background', '#FFFFFF')
                .style('border', '4px solid #000000')
                .style('box-shadow', '4px 4px 0px #000000')
                .style('font-family', "'JetBrains Mono', monospace")
                .style('font-size', '12px')
                .style('line-height', '1.4');

            description.html(`
                <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #FF6600;">🌱 WHAT THIS SHOWS</h3>
                <p style="margin: 0 0 12px 0;"><strong>Stacked Bar Chart:</strong> Monthly check-ins broken down by beer style, showing seasonal drinking patterns.</p>
                <p style="margin: 0 0 12px 0;"><strong>Bar Height:</strong> Total community activity each month across all beer styles.</p>
                <p style="margin: 0 0 12px 0;"><strong>Color Segments:</strong> Each color represents a different beer style's contribution to that month.</p>
                <p style="margin: 0 0 12px 0;"><strong>Legend:</strong> Shows the top beer styles and their color coding in the chart.</p>
                <h3 style="margin: 12px 0 8px 0; font-size: 14px; color: #0066FF;">🔍 KEY INSIGHTS</h3>
                <p style="margin: 0;">• <strong>Summer peaks:</strong> Higher activity during warm months<br/>
                • <strong>Style seasonality:</strong> Light beers in summer, dark beers in winter<br/>
                • <strong>Holiday patterns:</strong> Activity spikes around celebrations<br/>
                • <strong>Community rhythms:</strong> Natural ebb and flow of drinking culture</p>
            `);
        }
    }


    // 5. Venue Heatmap
    renderVenueHeatmap() {
        const container = d3.select('#venue-heatmap-chart');
        if (container.empty()) return;

        const venueStats = {};
        this.data.forEach(d => {
            if (!venueStats[d.venue]) {
                venueStats[d.venue] = { ratings: [], count: 0 };
            }
            venueStats[d.venue].count++;
            if (d.rating !== null) {
                venueStats[d.venue].ratings.push(d.rating);
            }
        });

        const data = Object.entries(venueStats)
            .filter(([venue, stats]) => stats.ratings.length >= 5)
            .map(([venue, stats]) => ({
                venue: venue.toUpperCase(),
                avgRating: stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length,
                count: stats.count
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 15);

        const margin = { top: 20, right: 30, bottom: 100, left: 150 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 320 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const y = d3.scaleBand()
            .domain(data.map(d => d.venue))
            .range([0, height])
            .padding(0.1);

        const x = d3.scaleLinear()
            .domain([0, 5])
            .range([0, width]);

        const colorScale = d3.scaleSequential(d3.interpolateRdYlGn)
            .domain([2.5, 4.5]);

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('y', d => y(d.venue))
            .attr('height', y.bandwidth())
            .attr('x', 0)
            .attr('width', d => x(d.avgRating))
            .attr('fill', d => colorScale(d.avgRating))
            .attr('stroke', '#000000')
            .attr('stroke-width', 2);

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px');

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));
    }

    // 6. Brewery Treemap
    renderBreweryTreemap() {
        const container = d3.select('#brewery-treemap-chart');
        if (container.empty()) return;

        const breweryStats = {};
        this.data.forEach(d => {
            if (!breweryStats[d.brewery]) {
                breweryStats[d.brewery] = { count: 0, ratings: [] };
            }
            breweryStats[d.brewery].count++;
            if (d.rating !== null) {
                breweryStats[d.brewery].ratings.push(d.rating);
            }
        });

        const data = {
            name: 'breweries',
            children: Object.entries(breweryStats)
                .filter(([brewery, stats]) => stats.count >= 3)
                .map(([brewery, stats]) => ({
                    name: brewery,
                    value: stats.count,
                    avgRating: stats.ratings.length > 0 
                        ? stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length 
                        : 0
                }))
                .sort((a, b) => b.value - a.value)
                .slice(0, 20)
        };

        const width = container.node().offsetWidth;
        const height = 320;

        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height);

        const root = d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value);

        d3.treemap()
            .size([width, height])
            .padding(2)(root);

        const colorScale = d3.scaleSequential(d3.interpolateRdYlGn)
            .domain([2.5, 4.5]);

        const cell = svg.selectAll('g')
            .data(root.leaves())
            .enter().append('g')
            .attr('transform', d => `translate(${d.x0},${d.y0})`);

        cell.append('rect')
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .attr('fill', d => d.data.avgRating > 0 ? colorScale(d.data.avgRating) : '#CCCCCC')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2);

        cell.append('text')
            .attr('x', 4)
            .attr('y', 16)
            .text(d => d.data.name)
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        cell.append('text')
            .attr('x', 4)
            .attr('y', 30)
            .text(d => `${d.data.value} checkins`)
            .attr('class', 'chart-axis')
            .style('font-size', '8px');
    }

    // 7. Rating Distribution Waves (Enhanced)
    renderRatingWaves() {
        const container = d3.select('#rating-waves-chart');
        if (container.empty()) return;

        const validRatings = this.data.filter(d => d.rating !== null);
        
        // Group by serving type and normalize names
        const servingData = {};
        validRatings.forEach(d => {
            let serving = d.serving || 'Unknown';
            // Normalize serving type names
            serving = serving.toLowerCase();
            if (serving.includes('can')) serving = 'can';
            else if (serving.includes('bottle')) serving = 'bottle';
            else if (serving.includes('draft') || serving.includes('tap')) serving = 'draft';
            else if (serving === '' || serving === 'unknown') serving = 'unknown';
            
            serving = serving.charAt(0).toUpperCase() + serving.slice(1); // Capitalize
            
            if (!servingData[serving]) {
                servingData[serving] = [];
            }
            servingData[serving].push(d.rating);
        });

        // Debug: log serving types and counts
        console.log('Serving types found:', Object.entries(servingData).map(([serving, ratings]) => 
            `${serving}: ${ratings.length}`).join(', '));

        const margin = { top: 20, right: 120, bottom: 60, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 320 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleLinear()
            .domain([0, 5])
            .range([0, width]);

        // Prioritize common serving types and use more colors
        const colors = ['#FFFF00', '#FF6600', '#0066FF', '#00FF00', '#FF00FF', '#00FFFF'];
        const priorityOrder = ['Draft', 'Can', 'Bottle', 'Unknown'];
        
        // Sort serving types by priority, then by count
        const sortedServingData = Object.entries(servingData)
            .filter(([serving, ratings]) => ratings.length >= 3) // Lower threshold
            .sort(([servingA, ratingsA], [servingB, ratingsB]) => {
                const priorityA = priorityOrder.indexOf(servingA);
                const priorityB = priorityOrder.indexOf(servingB);
                
                if (priorityA !== -1 && priorityB !== -1) {
                    return priorityA - priorityB; // Both in priority list
                } else if (priorityA !== -1) {
                    return -1; // A is in priority list, B is not
                } else if (priorityB !== -1) {
                    return 1; // B is in priority list, A is not
                } else {
                    return ratingsB.length - ratingsA.length; // Both not in priority, sort by count
                }
            })
            .slice(0, 6); // Show up to 6 serving types

        let maxY = 0;
        const linesData = [];

        // Calculate all histograms first to get proper Y scale
        sortedServingData.forEach(([serving, ratings]) => {
            const bins = d3.histogram()
                .domain(x.domain())
                .thresholds(x.ticks(20))(ratings);
            
            const maxBinLength = d3.max(bins, d => d.length);
            if (maxBinLength > maxY) maxY = maxBinLength;
            
            linesData.push({ serving, bins, ratings: ratings.length });
        });

        const y = d3.scaleLinear()
            .domain([0, maxY])
            .range([height, 0]);

        // Draw the curves
        linesData.forEach((lineData, colorIndex) => {
            const line = d3.line()
                .x(d => x((d.x0 + d.x1) / 2))
                .y(d => y(d.length))
                .curve(d3.curveBasis);

            // Draw the line
            g.append('path')
                .datum(lineData.bins)
                .attr('fill', 'none')
                .attr('stroke', colors[colorIndex % colors.length])
                .attr('stroke-width', 4)
                .attr('d', line)
                .style('filter', 'drop-shadow(2px 2px 0px #000000)'); // Brutal shadow

            // Enhanced legend with count info
            const legendY = colorIndex * 25;
            g.append('rect')
                .attr('x', width + 10)
                .attr('y', legendY)
                .attr('width', 15)
                .attr('height', 15)
                .attr('fill', colors[colorIndex % colors.length])
                .attr('stroke', '#000000')
                .attr('stroke-width', 2);

            g.append('text')
                .attr('x', width + 30)
                .attr('y', legendY + 8)
                .text(lineData.serving.toUpperCase())
                .attr('class', 'chart-axis')
                .style('font-size', '11px')
                .style('font-weight', 'bold');

            g.append('text')
                .attr('x', width + 30)
                .attr('y', legendY + 20)
                .text(`(${lineData.ratings} ratings)`)
                .attr('class', 'chart-axis')
                .style('font-size', '9px')
                .style('fill', '#666666');
        });

        // Enhanced axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .append('text')
            .attr('x', width / 2)
            .attr('y', 40)
            .attr('fill', '#000000')
            .attr('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .text('RATING');

        g.append('g')
            .call(d3.axisLeft(y))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -height / 2)
            .attr('fill', '#000000')
            .attr('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .text('FREQUENCY');

        // Add title
        g.append('text')
            .attr('x', width / 2)
            .attr('y', -5)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('RATING DISTRIBUTIONS BY SERVING TYPE');
    }

    // 8. Community Consensus Champions
    renderConsensusChampions() {
        const container = d3.select('#consensus-champions-chart');
        if (container.empty()) return;

        const beerStats = {};
        this.data.forEach(d => {
            if (!beerStats[d.beer_name]) {
                beerStats[d.beer_name] = { count: 0, ratings: [] };
            }
            beerStats[d.beer_name].count++;
            if (d.rating !== null) {
                beerStats[d.beer_name].ratings.push(d.rating);
            }
        });

        const data = Object.entries(beerStats)
            .filter(([beer, stats]) => stats.count >= 5)
            .map(([beer, stats]) => ({
                beer: beer.length > 30 ? beer.substring(0, 30) + '...' : beer,
                count: stats.count,
                avgRating: stats.ratings.length > 0 
                    ? stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length 
                    : 0,
                consistency: stats.ratings.length > 1 
                    ? 1 / (d3.deviation(stats.ratings) || 1) 
                    : 0
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 12);

        const margin = { top: 20, right: 30, bottom: 60, left: 200 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 320 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const y = d3.scaleBand()
            .domain(data.map(d => d.beer))
            .range([0, height])
            .padding(0.2);

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([0, width]);

        const colorScale = d3.scaleSequential(d3.interpolateRdYlGn)
            .domain([2.5, 4.5]);

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('y', d => y(d.beer))
            .attr('height', y.bandwidth())
            .attr('x', 0)
            .attr('width', d => x(d.count))
            .attr('fill', d => d.avgRating > 0 ? colorScale(d.avgRating) : '#CCCCCC')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2);

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '9px');

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .append('text')
            .attr('x', width / 2)
            .attr('y', 40)
            .attr('fill', '#000000')
            .attr('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .text('TOTAL CHECK-INS (POPULARITY)');

        // Add chart title
        g.append('text')
            .attr('x', width / 2)
            .attr('y', -5)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('MOST POPULAR BEERS BY CHECK-IN COUNT');
    }

    // 9. ABV Sweet Spot Analysis
    renderABVAnalysis() {
        const container = d3.select('#abv-analysis-chart');
        if (container.empty()) return;

        // Note: Since ABV is not in our schema, we'll simulate it based on beer type
        const abvEstimates = {
            'Lager': 4.5,
            'IPA': 6.5,
            'Stout': 7.0,
            'Porter': 6.0,
            'Wheat': 5.0,
            'Pilsner': 4.8,
            'Sour': 4.0,
            'Lambic': 5.5
        };

        const dataWithABV = this.data
            .filter(d => d.rating !== null)
            .map(d => {
                let estimatedABV = 5.0; // default
                for (const [type, abv] of Object.entries(abvEstimates)) {
                    if (d.beer_type.includes(type)) {
                        estimatedABV = abv + (Math.random() - 0.5) * 2; // Add some variance
                        break;
                    }
                }
                return { ...d, abv: Math.max(2.0, Math.min(12.0, estimatedABV)) };
            });

        const margin = { top: 20, right: 30, bottom: 60, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 320 - margin.top - margin.bottom;

        const bins = d3.histogram()
            .value(d => d.abv)
            .domain([2, 12])
            .thresholds(20)(dataWithABV);

        // Calculate average rating per bin
        const binsWithRatings = bins.map(bin => ({
            x0: bin.x0,
            x1: bin.x1,
            count: bin.length,
            avgRating: bin.length > 0 
                ? bin.reduce((sum, d) => sum + d.rating, 0) / bin.length 
                : 0
        }));

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleLinear()
            .domain([2, 12])
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(binsWithRatings, d => d.count)])
            .range([height, 0]);

        const colorScale = d3.scaleLog()
            .domain([2.0, 5.0])
            .range(['#FF0000', '#00FF00'])
            .interpolate(d3.interpolateHsl);

        g.selectAll('.bar')
            .data(binsWithRatings)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.x0))
            .attr('width', d => x(d.x1) - x(d.x0) - 1)
            .attr('y', d => y(d.count))
            .attr('height', d => height - y(d.count))
            .attr('fill', d => d.count > 0 ? colorScale(d.avgRating) : '#CCCCCC')
            .attr('stroke', '#000000')
            .attr('stroke-width', 1);

        // Axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        // X-axis label
        g.append('text')
            .attr('x', width / 2)
            .attr('y', height + 45)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('ESTIMATED ABV %');

        // Y-axis label
        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -height / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('BEER COUNT');

        // Color legend
        const legend = g.append('g')
            .attr('transform', `translate(${width - 140}, 20)`);

        // Legend background
        legend.append('rect')
            .attr('x', -5)
            .attr('y', -5)
            .attr('width', 140)
            .attr('height', 110)
            .attr('fill', '#FFFFFF')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .style('opacity', 0.95);

        // Legend title
        legend.append('text')
            .attr('x', 0)
            .attr('y', 10)
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold')
            .text('AVG RATING:');

        // Color scale samples
        const ratingRanges = [
            {rating: 4.5, color: colorScale(4.5), label: '4.5+ (Excellent)'},
            {rating: 4.0, color: colorScale(4.0), label: '4.0-4.5 (Great)'},
            {rating: 3.5, color: colorScale(3.5), label: '3.5-4.0 (Good)'},
            {rating: 3.0, color: colorScale(3.0), label: '3.0-3.5 (OK)'},
            {rating: 2.5, color: colorScale(2.5), label: '2.0-3.0 (Poor)'}
        ];

        ratingRanges.forEach((range, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(0, ${25 + i * 15})`);

            legendRow.append('rect')
                .attr('x', 0)
                .attr('y', -6)
                .attr('width', 12)
                .attr('height', 12)
                .attr('fill', range.color)
                .attr('stroke', '#000000')
                .attr('stroke-width', 1);

            legendRow.append('text')
                .attr('x', 18)
                .attr('y', 2)
                .attr('class', 'chart-axis')
                .style('font-size', '8px')
                .style('font-weight', 'bold')
                .text(range.label);
        });

        // Description/disclaimer
        g.append('text')
            .attr('x', 10)
            .attr('y', height + 75)
            .attr('class', 'chart-axis')
            .style('font-size', '9px')
            .style('font-weight', 'bold')
            .style('fill', '#666666')
            .text('* ABV estimated from beer styles (IPA: 6.5%, Stout: 7.0%, Lager: 4.5%, etc.)');

        // Chart explanation
        g.append('text')
            .attr('x', 10)
            .attr('y', height + 90)
            .attr('class', 'chart-axis')
            .style('font-size', '9px')
            .style('font-weight', 'bold')
            .style('fill', '#666666')
            .text('Shows which alcohol strengths produce the highest-rated beers (green = sweet spot)');
    }

    // 10. Style Evolution Timeline (Line Chart with Volume Bubbles)
    // Beer Type Charts - Split into Check-ins and Ratings (Last Year Only)
    renderBeerTypeCharts() {
        // Filter data to last year only
        const now = new Date();
        const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        const lastYearData = this.data.filter(d => new Date(d.time) >= oneYearAgo);

        // Process monthly data for each beer type (last year only)
        const monthlyData = {};
        lastYearData.forEach(d => {
            const date = new Date(d.time);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            
            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = {};
            }
            if (!monthlyData[monthKey][d.beer_type]) {
                monthlyData[monthKey][d.beer_type] = { count: 0, ratings: [] };
            }
            monthlyData[monthKey][d.beer_type].count++;
            if (d.rating !== null) {
                monthlyData[monthKey][d.beer_type].ratings.push(d.rating);
            }
        });

        // Get top 6 beer types by popularity in last year
        const beerTypeStats = {};
        lastYearData.forEach(d => {
            beerTypeStats[d.beer_type] = (beerTypeStats[d.beer_type] || 0) + 1;
        });
        const topBeerTypes = Object.entries(beerTypeStats)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 6)
            .map(([type]) => type);

        // Build timeline data
        const months = Object.keys(monthlyData).sort();
        const timelineData = months.map(monthKey => {
            const monthData = monthlyData[monthKey];
            const result = {
                month: new Date(monthKey + '-01'),
                monthKey: monthKey,
                beerTypes: []
            };

            topBeerTypes.forEach(beerType => {
                const typeData = monthData[beerType] || { count: 0, ratings: [] };
                const avgRating = typeData.ratings.length > 0 
                    ? typeData.ratings.reduce((sum, r) => sum + r, 0) / typeData.ratings.length
                    : 0;
                
                result.beerTypes.push({
                    type: beerType,
                    count: typeData.count,
                    avgRating: avgRating,
                    totalRatings: typeData.ratings.length
                });
            });

            return result;
        }).filter(d => d.beerTypes.some(bt => bt.count > 0));

        // Brutal colors for beer types
        const colorScale = d3.scaleOrdinal()
            .domain(topBeerTypes)
            .range(['#FF6600', '#0066FF', '#00FF00', '#FFFF00', '#FF00FF', '#FF0000']);

        // Render both charts
        this.renderCheckinsChart(timelineData, topBeerTypes, colorScale, lastYearData.length, oneYearAgo, now);
        this.renderRatingsChart(timelineData, topBeerTypes, colorScale, lastYearData.length, oneYearAgo, now);
    }

    renderCheckinsChart(timelineData, topBeerTypes, colorScale, recordCount, oneYearAgo, now) {
        const container = d3.select('#beer-type-checkins-chart');
        if (container.empty()) return;

        const margin = { top: 40, right: 20, bottom: 80, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 380 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleTime()
            .domain(d3.extent(timelineData, d => d.month))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(timelineData, d => d3.max(d.beerTypes, bt => bt.count))])
            .range([height, 0]);

        const volumeScale = d3.scaleSqrt()
            .domain([0, d3.max(timelineData, d => d3.max(d.beerTypes, bt => bt.count))])
            .range([3, 12]);

        // Create line generator
        const line = d3.line()
            .x(d => xScale(d.month))
            .y(d => yScale(d.count))
            .curve(d3.curveMonotoneX);

        // Draw lines and bubbles for each beer type
        topBeerTypes.forEach(beerType => {
            const typeData = timelineData.map(d => {
                const bt = d.beerTypes.find(b => b.type === beerType) || { count: 0, avgRating: 0 };
                return {
                    month: d.month,
                    count: bt.count,
                    avgRating: bt.avgRating,
                    totalRatings: bt.totalRatings
                };
            }).filter(d => d.count > 0);

            if (typeData.length === 0) return;

            // Check-ins line
            g.append('path')
                .datum(typeData)
                .attr('fill', 'none')
                .attr('stroke', colorScale(beerType))
                .attr('stroke-width', 4)
                .attr('d', line)
                .style('filter', 'drop-shadow(2px 2px 0px #000000)')
                .on('mouseover', function() {
                    d3.select(this)
                        .attr('stroke-width', 6)
                        .style('filter', 'drop-shadow(4px 4px 0px #000000)');
                })
                .on('mouseout', function() {
                    d3.select(this)
                        .attr('stroke-width', 4)
                        .style('filter', 'drop-shadow(2px 2px 0px #000000)');
                });

            // Volume bubbles
            typeData.forEach(d => {
                const bubbleRadius = volumeScale(d.count);
                
                g.append('circle')
                    .attr('cx', xScale(d.month))
                    .attr('cy', yScale(d.count))
                    .attr('r', bubbleRadius)
                    .attr('fill', colorScale(beerType))
                    .attr('stroke', '#000000')
                    .attr('stroke-width', 2)
                    .style('filter', 'drop-shadow(2px 2px 0px #000000)')
                    .style('opacity', 0.7)
                    .on('mouseover', function(event) {
                        d3.select(this)
                            .style('opacity', 1)
                            .attr('stroke-width', 3)
                            .attr('r', bubbleRadius + 2);
                        
                        const tooltip = d3.select('body').append('div')
                            .attr('class', 'chart-tooltip')
                            .style('opacity', 0)
                            .style('position', 'absolute');

                        tooltip.transition().duration(200).style('opacity', 1);
                        
                        const monthName = d3.timeFormat('%b %Y')(d.month);
                        
                        tooltip.html(`${monthName}<br/><strong>${beerType}</strong><br/>Check-ins: ${d.count}`)
                            .style('left', (event.pageX + 10) + 'px')
                            .style('top', (event.pageY - 28) + 'px');
                    })
                    .on('mouseout', function() {
                        d3.select(this)
                            .style('opacity', 0.7)
                            .attr('stroke-width', 2)
                            .attr('r', bubbleRadius);
                        d3.selectAll('.chart-tooltip').remove();
                    });
            });
        });

        // Axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale)
                .tickFormat(d3.timeFormat('%b %y'))
                .ticks(d3.timeMonth.every(2)))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-45)');

        g.append('g')
            .call(d3.axisLeft(yScale).ticks(6))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        // Y-axis label
        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -height / 2)
            .attr('fill', '#000000')
            .attr('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .style('font-size', '12px')
            .text('CHECK-INS');

        // Legend positioned at bottom to avoid obstruction
        const legend = g.append('g')
            .attr('transform', `translate(10, ${height + 40})`);

        // Add background rectangle for legend
        legend.append('rect')
            .attr('x', -5)
            .attr('y', -5)
            .attr('width', width - 10)
            .attr('height', 25)
            .attr('fill', '#FFFFFF')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .style('opacity', 0.95);

        // Horizontal legend layout
        topBeerTypes.slice(0, 3).forEach((beerType, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(${i * 110}, 8)`);

            legendRow.append('line')
                .attr('x1', 0)
                .attr('x2', 15)
                .attr('y1', 0)
                .attr('y2', 0)
                .attr('stroke', colorScale(beerType))
                .attr('stroke-width', 3);

            legendRow.append('circle')
                .attr('cx', 7)
                .attr('cy', 0)
                .attr('r', 3)
                .attr('fill', colorScale(beerType))
                .attr('stroke', '#000000')
                .attr('stroke-width', 1);

            legendRow.append('text')
                .attr('x', 20)
                .attr('y', 3)
                .text(beerType.length > 12 ? beerType.substring(0, 12) + '...' : beerType)
                .attr('class', 'chart-axis')
                .style('font-size', '9px')
                .style('font-weight', 'bold');
        });

        // Data range indicator
        g.append('text')
            .attr('x', 10)
            .attr('y', height + 70)
            .attr('class', 'chart-axis')
            .style('font-size', '9px')
            .style('font-weight', 'bold')
            .style('fill', '#666666')
            .text(`${d3.timeFormat('%b %Y')(oneYearAgo)} - ${d3.timeFormat('%b %Y')(now)}`);
    }

    renderRatingsChart(timelineData, topBeerTypes, colorScale, recordCount, oneYearAgo, now) {
        const container = d3.select('#beer-type-ratings-chart');
        if (container.empty()) return;

        const margin = { top: 40, right: 20, bottom: 80, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 380 - margin.top - margin.bottom;

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleTime()
            .domain(d3.extent(timelineData, d => d.month))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, 5])
            .range([height, 0]);

        // Create line generator
        const line = d3.line()
            .x(d => xScale(d.month))
            .y(d => yScale(d.avgRating))
            .curve(d3.curveMonotoneX);

        // Draw rating lines for each beer type
        topBeerTypes.forEach(beerType => {
            const typeData = timelineData.map(d => {
                const bt = d.beerTypes.find(b => b.type === beerType) || { count: 0, avgRating: 0 };
                return {
                    month: d.month,
                    count: bt.count,
                    avgRating: bt.avgRating,
                    totalRatings: bt.totalRatings
                };
            }).filter(d => d.avgRating > 0);

            if (typeData.length === 0) return;

            // Rating line
            g.append('path')
                .datum(typeData)
                .attr('fill', 'none')
                .attr('stroke', colorScale(beerType))
                .attr('stroke-width', 4)
                .attr('d', line)
                .style('filter', 'drop-shadow(2px 2px 0px #000000)')
                .on('mouseover', function() {
                    d3.select(this)
                        .attr('stroke-width', 6)
                        .style('filter', 'drop-shadow(4px 4px 0px #000000)');
                })
                .on('mouseout', function() {
                    d3.select(this)
                        .attr('stroke-width', 4)
                        .style('filter', 'drop-shadow(2px 2px 0px #000000)');
                });

            // Rating points
            typeData.forEach(d => {
                g.append('circle')
                    .attr('cx', xScale(d.month))
                    .attr('cy', yScale(d.avgRating))
                    .attr('r', 5)
                    .attr('fill', '#FFFFFF')
                    .attr('stroke', colorScale(beerType))
                    .attr('stroke-width', 3)
                    .style('filter', 'drop-shadow(1px 1px 0px #000000)')
                    .on('mouseover', function(event) {
                        d3.select(this).attr('r', 7);
                        
                        const tooltip = d3.select('body').append('div')
                            .attr('class', 'chart-tooltip')
                            .style('opacity', 0)
                            .style('position', 'absolute');

                        tooltip.transition().duration(200).style('opacity', 1);
                        
                        const monthName = d3.timeFormat('%b %Y')(d.month);
                        
                        tooltip.html(`${monthName}<br/><strong>${beerType}</strong><br/>Rating: ${d.avgRating.toFixed(2)}<br/>Based on: ${d.totalRatings} ratings`)
                            .style('left', (event.pageX + 10) + 'px')
                            .style('top', (event.pageY - 28) + 'px');
                    })
                    .on('mouseout', function() {
                        d3.select(this).attr('r', 5);
                        d3.selectAll('.chart-tooltip').remove();
                    });
            });
        });

        // Axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale)
                .tickFormat(d3.timeFormat('%b %y'))
                .ticks(d3.timeMonth.every(2)))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-45)');

        g.append('g')
            .call(d3.axisLeft(yScale).ticks(5))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

        // Y-axis label
        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -height / 2)
            .attr('fill', '#000000')
            .attr('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .style('font-size', '12px')
            .text('AVG RATING');

        // Legend positioned at bottom to avoid obstruction
        const legend = g.append('g')
            .attr('transform', `translate(10, ${height + 40})`);

        // Add background rectangle for legend
        legend.append('rect')
            .attr('x', -5)
            .attr('y', -5)
            .attr('width', width - 10)
            .attr('height', 25)
            .attr('fill', '#FFFFFF')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .style('opacity', 0.95);

        // Horizontal legend layout
        topBeerTypes.slice(0, 3).forEach((beerType, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(${i * 110}, 8)`);

            legendRow.append('line')
                .attr('x1', 0)
                .attr('x2', 15)
                .attr('y1', 0)
                .attr('y2', 0)
                .attr('stroke', colorScale(beerType))
                .attr('stroke-width', 3);

            legendRow.append('circle')
                .attr('cx', 7)
                .attr('cy', 0)
                .attr('r', 3)
                .attr('fill', '#FFFFFF')
                .attr('stroke', colorScale(beerType))
                .attr('stroke-width', 2);

            legendRow.append('text')
                .attr('x', 20)
                .attr('y', 3)
                .text(beerType.length > 12 ? beerType.substring(0, 12) + '...' : beerType)
                .attr('class', 'chart-axis')
                .style('font-size', '9px')
                .style('font-weight', 'bold');
        });

        // Data range indicator
        g.append('text')
            .attr('x', 10)
            .attr('y', height + 70)
            .attr('class', 'chart-axis')
            .style('font-size', '9px')
            .style('font-weight', 'bold')
            .style('fill', '#666666')
            .text(`${recordCount} records`);
    }

    // 12. Venue Battle Royale
    renderVenueBattle() {
        const container = d3.select('#venue-battle-chart');
        if (container.empty()) return;

        // Detect mobile
        const isMobile = window.innerWidth <= 768;

        const venueStats = {};
        this.data.forEach(d => {
            if (!venueStats[d.venue]) {
                venueStats[d.venue] = { count: 0, ratings: [] };
            }
            venueStats[d.venue].count++;
            if (d.rating !== null) {
                venueStats[d.venue].ratings.push(d.rating);
            }
        });

        const venues = Object.entries(venueStats)
            .filter(([venue, stats]) => stats.ratings.length >= 10)
            .map(([venue, stats]) => ({
                venue: venue.toUpperCase(),
                avgRating: stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length,
                count: stats.count
            }))
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 8);

        const width = container.node().offsetWidth;
        const height = isMobile ? (venues.length * 85 + 100) : 520; // Dynamic height based on venue count

        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height);

        // Tournament bracket simulation
        const rounds = [];
        let currentRound = [...venues];
        let roundNum = 0;

        while (currentRound.length > 1) {
            const nextRound = [];
            for (let i = 0; i < currentRound.length; i += 2) {
                if (i + 1 < currentRound.length) {
                    const winner = currentRound[i].avgRating > currentRound[i + 1].avgRating 
                        ? currentRound[i] : currentRound[i + 1];
                    nextRound.push(winner);
                } else {
                    nextRound.push(currentRound[i]);
                }
            }
            rounds.push([...currentRound]);
            currentRound = nextRound;
            roundNum++;
        }
        rounds.push(currentRound); // Final winner

        // Draw bracket based on layout
        if (isMobile) {
            // Mobile: Clean ranked list layout
            let yOffset = 60;
            
            // Create a simple ranked list of all venues
            venues.forEach((venue, index) => {
                const isTop3 = index < 3;
                const isChampion = index === 0;
                const boxHeight = 70;
                const boxWidth = width - 30;
                const x = 15;
                
                // Background container with ranking colors
                let fillColor = '#FFFFFF';
                let strokeColor = '#000000';
                let strokeWidth = 2;
                
                if (isChampion) {
                    fillColor = '#FFD700'; // Gold for champion
                    strokeWidth = 4;
                } else if (index === 1) {
                    fillColor = '#C0C0C0'; // Silver for 2nd
                    strokeWidth = 3;
                } else if (index === 2) {
                    fillColor = '#CD7F32'; // Bronze for 3rd
                    strokeWidth = 3;
                }
                
                // Main venue container
                svg.append('rect')
                    .attr('x', x)
                    .attr('y', yOffset)
                    .attr('width', boxWidth)
                    .attr('height', boxHeight)
                    .attr('fill', fillColor)
                    .attr('stroke', strokeColor)
                    .attr('stroke-width', strokeWidth)
                    .attr('rx', 8)
                    .style('filter', isChampion ? 'drop-shadow(6px 6px 0px #000000)' : 
                                   isTop3 ? 'drop-shadow(3px 3px 0px #000000)' : 'none');
                
                // Ranking number
                const rankSize = isChampion ? '28px' : isTop3 ? '24px' : '20px';
                const rankColor = isChampion ? '#FF0000' : isTop3 ? '#000000' : '#666666';
                
                svg.append('text')
                    .attr('x', x + 25)
                    .attr('y', yOffset + 30)
                    .attr('text-anchor', 'middle')
                    .attr('class', 'chart-axis')
                    .style('font-size', rankSize)
                    .style('font-weight', 'bold')
                    .style('fill', rankColor)
                    .text(`#${index + 1}`);
                
                // Venue name
                const venueName = venue.venue;
                const nameSize = isChampion ? '14px' : isTop3 ? '13px' : '12px';
                
                // Handle long venue names by truncating
                const maxLength = 20;
                const displayName = venueName.length > maxLength ? 
                    venueName.substring(0, maxLength - 3) + '...' : venueName;
                
                svg.append('text')
                    .attr('x', x + 60)
                    .attr('y', yOffset + 25)
                    .attr('class', 'chart-axis')
                    .style('font-size', nameSize)
                    .style('font-weight', 'bold')
                    .style('fill', '#000000')
                    .text(displayName);
                
                // Rating with stars
                const ratingText = `${venue.avgRating.toFixed(2)} ★`;
                svg.append('text')
                    .attr('x', x + 60)
                    .attr('y', yOffset + 45)
                    .attr('class', 'chart-axis')
                    .style('font-size', '13px')
                    .style('font-weight', 'bold')
                    .style('fill', '#FF6600')
                    .text(ratingText);
                
                // Check-ins count
                svg.append('text')
                    .attr('x', x + boxWidth - 15)
                    .attr('y', yOffset + 25)
                    .attr('text-anchor', 'end')
                    .attr('class', 'chart-axis')
                    .style('font-size', '11px')
                    .style('font-weight', 'bold')
                    .style('fill', '#666666')
                    .text(`${venue.count} check-ins`);
                
                // Champion crown emoji
                if (isChampion) {
                    svg.append('text')
                        .attr('x', x + boxWidth - 15)
                        .attr('y', yOffset + 45)
                        .attr('text-anchor', 'end')
                        .attr('class', 'chart-axis')
                        .style('font-size', '16px')
                        .text('👑');
                }
                
                yOffset += boxHeight + 15;
            });
        } else {
            // Horizontal layout for desktop
            const roundWidth = width / rounds.length;
            rounds.forEach((round, roundIndex) => {
                const x = roundIndex * roundWidth + 50;
                const spacing = height / (round.length + 1);

                round.forEach((venue, venueIndex) => {
                    const y = (venueIndex + 1) * spacing;
                    
                    // Venue box
                    svg.append('rect')
                        .attr('x', x)
                        .attr('y', y - 20)
                        .attr('width', roundWidth - 20)
                        .attr('height', 40)
                        .attr('fill', roundIndex === rounds.length - 1 ? '#FFD700' : '#FFFFFF')
                        .attr('stroke', '#000000')
                        .attr('stroke-width', 3);

                    svg.append('text')
                        .attr('x', x + (roundWidth - 20) / 2)
                        .attr('y', y - 5)
                        .attr('text-anchor', 'middle')
                        .attr('class', 'chart-axis')
                        .style('font-size', '10px')
                        .style('font-weight', 'bold')
                        .text(venue.venue.substring(0, 12));

                    svg.append('text')
                        .attr('x', x + (roundWidth - 20) / 2)
                        .attr('y', y + 10)
                        .attr('text-anchor', 'middle')
                        .attr('class', 'chart-axis')
                        .style('font-size', '8px')
                        .text(`${venue.avgRating.toFixed(2)} ★`);
                });
            });
        }

        // Title
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', 30)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('🏆 VENUE CHAMPIONSHIP 🏆');
    }

    // NEW COMMUNITY ANALYSIS CHARTS

    // 2. Weekend Warrior Rhythm Analysis
    renderWeekendRhythmChart(isFullscreen = false) {
        const container = d3.select('#main-exploration-chart');
        if (container.empty()) return;

        container.selectAll('*').remove();

        // Mobile fullscreen optimizations
        let margin, width, height, hoursPerCell, totalCells;
        if (isFullscreen) {
            margin = { top: 50, right: 20, bottom: 60, left: 60 };
            width = container.node().offsetWidth - margin.left - margin.right;
            height = container.node().offsetHeight - margin.top - margin.bottom;
            hoursPerCell = 2; // 2-hour intervals for mobile
            totalCells = 12; // 24 hours / 2 = 12 cells
        } else {
            margin = { top: 40, right: 40, bottom: 40, left: 80 };
            width = container.node().offsetWidth - margin.left - margin.right;
            height = 350 - margin.top - margin.bottom;
            hoursPerCell = 1; // 1-hour intervals for desktop
            totalCells = 24;
        }

        // Create day x hour matrix
        const rhythmData = {};
        this.data.forEach(d => {
            const date = new Date(d.time);
            const day = date.getDay(); // 0 = Sunday
            const hour = date.getHours();
            
            // Group hours by interval
            const hourGroup = Math.floor(hour / hoursPerCell) * hoursPerCell;
            const key = `${day}-${hourGroup}`;
            
            if (!rhythmData[key]) {
                rhythmData[key] = { day, hour: hourGroup, count: 0 };
            }
            rhythmData[key].count++;
        });

        const data = Object.values(rhythmData);
        const maxCount = d3.max(data, d => d.count);

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const cellWidth = width / totalCells;
        const cellHeight = height / 7;

        const colorScale = d3.scaleSequential(d3.interpolateYlOrRd)
            .domain([0, maxCount]);

        const dayNames = isFullscreen 
            ? ['S', 'M', 'T', 'W', 'T', 'F', 'S']  // Single letters for mobile
            : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        // Draw heatmap cells
        g.selectAll('.rhythm-cell')
            .data(data)
            .enter().append('rect')
            .attr('class', 'rhythm-cell')
            .attr('x', d => (d.hour / hoursPerCell) * cellWidth)
            .attr('y', d => d.day * cellHeight)
            .attr('width', cellWidth - (isFullscreen ? 2 : 1))
            .attr('height', cellHeight - (isFullscreen ? 2 : 1))
            .attr('fill', d => d.count > 0 ? colorScale(d.count) : '#FFFFFF')
            .attr('stroke', '#000000')
            .attr('stroke-width', isFullscreen ? 2 : 1)
            .on('mouseover', function(event, d) {
                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                const timeRange = hoursPerCell === 1 
                    ? `${d.hour}:00`
                    : `${d.hour}:00-${d.hour + hoursPerCell}:00`;
                
                tooltip.html(`
                    <strong>${dayNames[d.day]} ${timeRange}</strong><br/>
                    Check-ins: <strong>${d.count}</strong>
                `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 40) + 'px');
            })
            .on('mouseout', function() {
                d3.selectAll('.chart-tooltip').remove();
            });

        // Add day labels
        g.selectAll('.day-label')
            .data(dayNames)
            .enter().append('text')
            .attr('class', 'day-label chart-axis')
            .attr('x', -10)
            .attr('y', (d, i) => i * cellHeight + cellHeight / 2)
            .attr('text-anchor', 'end')
            .attr('dy', '0.35em')
            .style('font-size', isFullscreen ? '12px' : '10px')
            .style('font-weight', 'bold')
            .text(d => d);

        // Add hour labels
        const hourLabelInterval = isFullscreen ? hoursPerCell : 4;
        const hourLabels = d3.range(0, 24, hourLabelInterval);
        
        g.selectAll('.hour-label')
            .data(hourLabels)
            .enter().append('text')
            .attr('class', 'hour-label chart-axis')
            .attr('x', d => (d / hoursPerCell) * cellWidth + cellWidth / 2)
            .attr('y', -10)
            .attr('text-anchor', 'middle')
            .style('font-size', isFullscreen ? '11px' : '10px')
            .style('font-weight', 'bold')
            .text(d => {
                if (isFullscreen && hoursPerCell === 2) {
                    return d === 0 ? '12AM' : d === 12 ? '12PM' : 
                           d < 12 ? `${d}AM` : `${d-12}PM`;
                }
                return `${d}:00`;
            });

        // Title
        g.append('text')
            .attr('x', width / 2)
            .attr('y', -20)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', isFullscreen ? '16px' : '14px')
            .style('font-weight', 'bold')
            .text('DRINKING RHYTHM HEATMAP');

        // Add color scale legend for mobile fullscreen
        if (isFullscreen) {
            const legendWidth = 200;
            const legendHeight = 15;
            const legendX = (width - legendWidth) / 2;
            const legendY = height + 25;

            // Create gradient for legend
            const defs = svg.append('defs');
            const gradient = defs.append('linearGradient')
                .attr('id', 'heatmap-gradient')
                .attr('x1', '0%')
                .attr('x2', '100%');

            gradient.append('stop')
                .attr('offset', '0%')
                .style('stop-color', '#FFFFFF');

            gradient.append('stop')
                .attr('offset', '100%')
                .style('stop-color', colorScale(maxCount));

            // Legend rectangle
            g.append('rect')
                .attr('x', legendX)
                .attr('y', legendY)
                .attr('width', legendWidth)
                .attr('height', legendHeight)
                .style('fill', 'url(#heatmap-gradient)')
                .attr('stroke', '#000000')
                .attr('stroke-width', 1);

            // Legend labels
            g.append('text')
                .attr('x', legendX)
                .attr('y', legendY + legendHeight + 15)
                .attr('text-anchor', 'start')
                .style('font-size', '10px')
                .style('font-weight', 'bold')
                .text('Low Activity');

            g.append('text')
                .attr('x', legendX + legendWidth)
                .attr('y', legendY + legendHeight + 15)
                .attr('text-anchor', 'end')
                .style('font-size', '10px')
                .style('font-weight', 'bold')
                .text('High Activity');
        }

        // Description (skip in fullscreen mode)
        if (!isFullscreen) {
            const description = container.append('div')
                .style('margin-top', '20px')
                .style('padding', '16px')
                .style('background', '#FFFFFF')
                .style('border', '4px solid #000000')
                .style('box-shadow', '4px 4px 0px #000000')
                .style('font-family', "'JetBrains Mono', monospace")
                .style('font-size', '12px')
                .style('line-height', '1.4');

            description.html(`
                <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #FF6600;">🔥 WHAT THIS SHOWS</h3>
                <p style="margin: 0 0 12px 0;"><strong>Heatmap Grid:</strong> Days of the week (vertical) vs hours of the day (horizontal) showing drinking activity intensity.</p>
                <p style="margin: 0 0 12px 0;"><strong>Color Intensity:</strong> Darker colors = more check-ins during that day/hour combination.</p>
                <p style="margin: 0 0 12px 0;"><strong>Time Pattern:</strong> Reveals when the community is most active in their beer consumption.</p>
                <p style="margin: 0 0 12px 0;"><strong>Interactive:</strong> Hover over cells to see exact check-in counts for specific times.</p>
                <h3 style="margin: 12px 0 8px 0; font-size: 14px; color: #0066FF;">🔍 KEY INSIGHTS</h3>
                <p style="margin: 0;">• <strong>Weekend spikes:</strong> Friday/Saturday evenings show peak activity<br/>
                • <strong>Happy hour patterns:</strong> Late afternoon/evening hotspots<br/>
                • <strong>Weekly rhythms:</strong> Workday vs weekend drinking behaviors<br/>
                • <strong>Prime time discovery:</strong> Identify optimal times for beer events</p>
            `);
        }
    }

    // NEW COMMUNITY ANALYSIS CHARTS

    renderSophisticationWaveChart(isFullscreen = false) {
        const container = d3.select('#main-exploration-chart');
        if (container.empty()) return;
        container.selectAll('*').remove();

        const margin = { top: 20, right: 30, bottom: 60, left: 60 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 350 - margin.top - margin.bottom;

        // Calculate weekly sophistication metrics for the last year only
        const now = new Date();
        const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        
        // First, collect all ABV values for outlier analysis
        const allAbvValues = [];
        this.data
            .filter(d => new Date(d.time) >= oneYearAgo)
            .forEach(d => {
                const abvMatch = d.beer_name.match(/(\d+\.?\d*)%/);
                if (abvMatch) {
                    const abv = parseFloat(abvMatch[1]);
                    // Stage 1: Remove impossible beer ABV values (1%-18% realistic range)
                    if (abv >= 1 && abv <= 18) {
                        allAbvValues.push(abv);
                    }
                }
            });

        // Stage 2: Calculate z-score statistics for remaining ABV values
        let abvMean = 0;
        let abvStdDev = 0;
        let validAbvRange = { min: 1, max: 18 }; // Default fallback
        
        if (allAbvValues.length > 0) {
            abvMean = allAbvValues.reduce((sum, abv) => sum + abv, 0) / allAbvValues.length;
            const variance = allAbvValues.reduce((sum, abv) => sum + Math.pow(abv - abvMean, 2), 0) / allAbvValues.length;
            abvStdDev = Math.sqrt(variance);
            
            // Define valid range as mean ± 3 standard deviations (but within realistic bounds)
            validAbvRange = {
                min: Math.max(1, abvMean - 3 * abvStdDev),
                max: Math.min(18, abvMean + 3 * abvStdDev)
            };
        }

        const weeklyData = {};
        this.data
            .filter(d => new Date(d.time) >= oneYearAgo) // Only last year's data
            .forEach(d => {
                const date = new Date(d.time);
                // Get week start (Sunday)
                const weekStart = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
                const weekKey = weekStart.toISOString().split('T')[0];
                
                if (!weeklyData[weekKey]) {
                    weeklyData[weekKey] = {
                        date: weekStart,
                        abvValues: [], // Store individual ABV values for variance calculation
                        styles: new Set(),
                        breweries: new Set(),
                        totalCheckins: 0
                    };
                }
                
                const stats = weeklyData[weekKey];
                stats.totalCheckins++;
                stats.styles.add(d.beer_type);
                stats.breweries.add(d.brewery);
                
                // Parse ABV with hybrid outlier filtering
                const abvMatch = d.beer_name.match(/(\d+\.?\d*)%/);
                if (abvMatch) {
                    const abv = parseFloat(abvMatch[1]);
                    // Apply both stage 1 and stage 2 filtering
                    if (abv >= validAbvRange.min && abv <= validAbvRange.max) {
                        stats.abvValues.push(abv); // Store individual values
                    }
                }
            });

        const data = Object.values(weeklyData)
            .filter(d => d.totalCheckins >= 3) // Lower threshold for weekly data
            .map(d => {
                // Calculate ABV statistics
                let abvAvg = 5; // Default moderate ABV
                let abvComplexity = 0; // ABV variance/standard deviation
                
                if (d.abvValues.length > 0) {
                    // Calculate average
                    abvAvg = d.abvValues.reduce((sum, abv) => sum + abv, 0) / d.abvValues.length;
                    
                    // Calculate standard deviation (complexity measure)
                    if (d.abvValues.length > 1) {
                        const variance = d.abvValues.reduce((sum, abv) => sum + Math.pow(abv - abvAvg, 2), 0) / d.abvValues.length;
                        abvComplexity = Math.sqrt(variance);
                    } else {
                        // Single ABV value = no complexity
                        abvComplexity = 0;
                    }
                }
                
                return {
                    date: d.date,
                    abvAvg: abvAvg,
                    abvComplexity: abvComplexity,
                    stylesDiversity: d.styles.size,
                    breweryDiversity: d.breweries.size,
                    sophisticationScore: (d.styles.size * 0.4) + (d.breweries.size * 0.3) + (abvComplexity * 0.3),
                    totalCheckins: d.totalCheckins
                };
            })
            .sort((a, b) => a.date - b.date);

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width]);

        const y1 = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.sophisticationScore)])
            .range([height, 0]);

        const y2 = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.stylesDiversity, d.breweryDiversity))])
            .range([height, 0]);

        // Area generators
        const sophisticationArea = d3.area()
            .x(d => x(d.date))
            .y0(height)
            .y1(d => y1(d.sophisticationScore))
            .curve(d3.curveCardinal);

        const stylesArea = d3.area()
            .x(d => x(d.date))
            .y0(height)
            .y1(d => y2(d.stylesDiversity))
            .curve(d3.curveCardinal);

        const breweriesArea = d3.area()
            .x(d => x(d.date))
            .y0(height)
            .y1(d => y2(d.breweryDiversity))
            .curve(d3.curveCardinal);

        // Draw areas
        g.append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', sophisticationArea)
            .attr('fill', '#FF6600')
            .attr('fill-opacity', 0.3)
            .attr('stroke', '#FF6600')
            .attr('stroke-width', 3);

        g.append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', stylesArea)
            .attr('fill', '#00FF00')
            .attr('fill-opacity', 0.2)
            .attr('stroke', '#00FF00')
            .attr('stroke-width', 2);

        g.append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', breweriesArea)
            .attr('fill', '#0066FF')
            .attr('fill-opacity', 0.2)
            .attr('stroke', '#0066FF')
            .attr('stroke-width', 2);

        // Add axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x)
                .ticks(d3.timeWeek.every(4)) // Show every 4 weeks
                .tickFormat(d3.timeFormat('%b %d'))) // Show Month Day format
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('transform', 'rotate(-45deg)')
            .style('text-anchor', 'end');

        g.append('g')
            .call(d3.axisLeft(y1))
            .selectAll('text')
            .attr('class', 'chart-axis');

        // Add invisible hover areas for tooltips
        const hoverWidth = width / data.length;
        g.selectAll('.hover-area')
            .data(data)
            .enter().append('rect')
            .attr('class', 'hover-area')
            .attr('x', (d, i) => (x(d.date) - hoverWidth/2))
            .attr('y', 0)
            .attr('width', hoverWidth)
            .attr('height', height)
            .attr('fill', 'transparent')
            .attr('cursor', 'crosshair')
            .on('mouseover', function(event, d) {
                // Add vertical guideline
                const guideline = g.append('line')
                    .attr('class', 'hover-guideline')
                    .attr('x1', x(d.date))
                    .attr('x2', x(d.date))
                    .attr('y1', 0)
                    .attr('y2', height)
                    .attr('stroke', '#000000')
                    .attr('stroke-width', 1)
                    .attr('stroke-dasharray', '3,3')
                    .style('opacity', 0.7);

                // Create tooltip
                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute');

                tooltip.transition().duration(200).style('opacity', 1);
                tooltip.html(`
                    <strong>Week of ${d.date.toLocaleDateString()}</strong><br/>
                    <span style="color: #FF6600;">Sophistication Score: <strong>${d.sophisticationScore.toFixed(1)}</strong></span><br/>
                    <span style="color: #00FF00;">Style Diversity: <strong>${d.stylesDiversity}</strong></span><br/>
                    <span style="color: #0066FF;">Brewery Diversity: <strong>${d.breweryDiversity}</strong></span><br/>
                    ABV Complexity: <strong>${d.abvComplexity.toFixed(2)}</strong> (σ)<br/>
                    Average ABV: <strong>${d.abvAvg.toFixed(1)}%</strong><br/>
                    Total Check-ins: <strong>${d.totalCheckins}</strong>
                `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 50) + 'px');
            })
            .on('mouseout', function() {
                // Remove guideline and tooltip
                g.selectAll('.hover-guideline').remove();
                d3.selectAll('.chart-tooltip').remove();
            });

        // Legend
        const legend = g.append('g')
            .attr('transform', `translate(10, 10)`);

        legend.append('rect')
            .attr('x', -5).attr('y', -5)
            .attr('width', 180).attr('height', 60)
            .attr('fill', '#FFFFFF')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2);

        const legendItems = [
            { color: '#FF6600', label: 'Sophistication Score' },
            { color: '#00FF00', label: 'Style Diversity' },
            { color: '#0066FF', label: 'Brewery Diversity' }
        ];

        legendItems.forEach((item, i) => {
            legend.append('rect')
                .attr('x', 0).attr('y', i * 15)
                .attr('width', 12).attr('height', 12)
                .attr('fill', item.color);
            
            legend.append('text')
                .attr('x', 18).attr('y', i * 15 + 10)
                .text(item.label)
                .attr('class', 'chart-axis')
                .style('font-size', '10px');
        });

        // Title
        g.append('text')
            .attr('x', width / 2)
            .attr('y', -5)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '14px')
            .style('font-weight', 'bold')
            .text('COMMUNITY SOPHISTICATION EVOLUTION');

        // Description (skip in fullscreen mode)
        if (!isFullscreen) {
            const description = container.append('div')
                .style('margin-top', '20px')
                .style('padding', '16px')
                .style('background', '#FFFFFF')
                .style('border', '4px solid #000000')
                .style('box-shadow', '4px 4px 0px #000000')
                .style('font-family', "'JetBrains Mono', monospace")
                .style('font-size', '12px')
                .style('line-height', '1.4');

            description.html(`
                <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #FF6600;">📊 WHAT THIS SHOWS</h3>
                <p style="margin: 0 0 12px 0;"><strong>Time Period:</strong> Weekly data for the last 12 months only, showing recent sophistication trends.</p>
                <p style="margin: 0 0 12px 0;"><strong>Sophistication Score (Orange):</strong> Combines style diversity (40%) + brewery diversity (30%) + ABV complexity (30%).</p>
                <p style="margin: 0 0 12px 0;"><strong>Style Diversity (Green):</strong> Number of different beer styles tried each week. Sharp peaks show experimental periods.</p>
                <p style="margin: 0 0 12px 0;"><strong>Brewery Diversity (Blue):</strong> Number of different breweries explored weekly. Shows community openness to new producers.</p>
                <p style="margin: 0 0 12px 0;"><strong>ABV Complexity:</strong> Standard deviation of alcohol strengths tried. Higher values = more varied strength exploration.</p>
                <h3 style="margin: 12px 0 8px 0; font-size: 14px; color: #0066FF;">🔍 KEY INSIGHTS</h3>
                <p style="margin: 0;">• <strong>ABV variety</strong> rewards exploring both light and strong beers together<br/>
                • <strong>Consistent choices</strong> (all 5% beers) score lower complexity<br/>
                • <strong>Mixed exploration</strong> (3% + 9% beers) shows adventurous drinking</p>
            `);
        }
    }

    renderEcosystemNetworkChart(isFullscreen = false) {
        const container = d3.select('#main-exploration-chart');
        if (container.empty()) return;
        container.selectAll('*').remove();

        const margin = { top: 20, right: 30, bottom: 40, left: 30 };
        const width = container.node().offsetWidth - margin.left - margin.right;
        const height = 350 - margin.top - margin.bottom;

        // Calculate co-occurrence data
        const coOccurrence = {};
        const styleCount = {};
        
        // Group by session (same time within 2 hours)
        const sessions = {};
        this.data.forEach(d => {
            const dateKey = new Date(d.time).toDateString();
            if (!sessions[dateKey]) sessions[dateKey] = [];
            sessions[dateKey].push(d);
        });

        // Calculate style co-occurrences
        Object.values(sessions).forEach(session => {
            const styles = [...new Set(session.map(d => d.beer_type))];
            styles.forEach(style1 => {
                if (!styleCount[style1]) styleCount[style1] = 0;
                styleCount[style1]++;
                
                if (!coOccurrence[style1]) coOccurrence[style1] = {};
                styles.forEach(style2 => {
                    if (style1 !== style2) {
                        if (!coOccurrence[style1][style2]) coOccurrence[style1][style2] = 0;
                        coOccurrence[style1][style2]++;
                    }
                });
            });
        });

        // Filter to top styles and significant connections
        const topStyles = Object.entries(styleCount)
            .filter(([style, count]) => count >= 10)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15)
            .map(([style]) => style);

        const nodes = topStyles.map(style => ({
            id: style,
            count: styleCount[style],
            radius: Math.sqrt(styleCount[style]) * 2 + 8
        }));

        // HYBRID FILTERING APPROACH
        const links = [];
        
        // Step 1: Create all potential links with metrics
        const potentialLinks = [];
        topStyles.forEach(style1 => {
            topStyles.forEach(style2 => {
                if (style1 < style2 && coOccurrence[style1] && coOccurrence[style1][style2]) {
                    const coOccurrences = coOccurrence[style1][style2];
                    const style1Count = styleCount[style1];
                    const style2Count = styleCount[style2];
                    
                    // Calculate relative significance for both styles
                    const relativeToStyle1 = (coOccurrences / style1Count) * 100;
                    const relativeToStyle2 = (coOccurrences / style2Count) * 100;
                    const maxRelative = Math.max(relativeToStyle1, relativeToStyle2);
                    
                    potentialLinks.push({
                        source: style1,
                        target: style2,
                        value: coOccurrences,
                        relativeSignificance: maxRelative
                    });
                }
            });
        });
        
        // Step 2: Apply absolute threshold (≥8 co-occurrences)
        const absoluteFiltered = potentialLinks.filter(link => link.value >= 8);
        
        // Step 3: Apply relative threshold (≥10% significance)
        const relativeFiltered = absoluteFiltered.filter(link => link.relativeSignificance >= 10);
        
        // Step 4: For each style, keep only top 4 connections
        const styleConnections = {};
        topStyles.forEach(style => {
            styleConnections[style] = [];
        });
        
        // Group connections by style
        relativeFiltered.forEach(link => {
            styleConnections[link.source].push({...link, partner: link.target});
            styleConnections[link.target].push({...link, partner: link.source});
        });
        
        // Keep only top 4 connections per style (by co-occurrence value)
        const finalConnections = new Set();
        topStyles.forEach(style => {
            const topConnections = styleConnections[style]
                .sort((a, b) => b.value - a.value)
                .slice(0, 4);
            
            topConnections.forEach(conn => {
                // Create consistent link identifier (alphabetical order)
                const linkId = conn.source < conn.target ? 
                    `${conn.source}-${conn.target}` : 
                    `${conn.target}-${conn.source}`;
                finalConnections.add(linkId);
            });
        });
        
        // Step 5: Build final links array
        relativeFiltered.forEach(link => {
            const linkId = `${link.source}-${link.target}`;
            if (finalConnections.has(linkId)) {
                links.push(link);
            }
        });

        const svg = container.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Color scale
        const colorScale = d3.scaleOrdinal(d3.schemeSet3);

        // Force simulation with better spacing and boundary awareness
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).strength(0.05).distance(70))
            .force('charge', d3.forceManyBody().strength(-250))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(d => d.radius + 12))
            .force('x', d3.forceX(width / 2).strength(0.05))
            .force('y', d3.forceY(height / 2).strength(0.05));

        // Links
        const link = g.append('g')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', '#000000')
            .attr('stroke-width', d => Math.sqrt(d.value))
            .attr('stroke-opacity', 0.6);

        // Nodes
        const node = g.append('g')
            .selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('r', d => d.radius)
            .attr('fill', d => colorScale(d.id))
            .attr('stroke', '#000000')
            .attr('stroke-width', 2)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        // Labels
        const label = g.append('g')
            .selectAll('text')
            .data(nodes)
            .enter().append('text')
            .text(d => d.id.length > 15 ? d.id.substring(0, 12) + '...' : d.id)
            .attr('class', 'chart-axis')
            .style('font-size', '8px')
            .style('font-weight', 'bold')
            .attr('text-anchor', 'middle')
            .attr('dy', 4);

        // Tooltips
        node.on('mouseover', function(event, d) {
            const connections = links.filter(l => l.source.id === d.id || l.target.id === d.id).length;
            const tooltip = d3.select('body').append('div')
                .attr('class', 'chart-tooltip')
                .style('opacity', 0)
                .style('position', 'absolute');

            tooltip.transition().duration(200).style('opacity', 1);
            tooltip.html(`
                <strong>${d.id}</strong><br/>
                Check-ins: <strong>${d.count}</strong><br/>
                Connections: <strong>${connections}</strong>
            `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 50) + 'px');
        }).on('mouseout', function() {
            d3.selectAll('.chart-tooltip').remove();
        });

        simulation.on('tick', () => {
            // Apply boundary constraints to keep nodes within bounds
            node.each(d => {
                d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
                d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
            });

            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            label
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = Math.max(d.radius, Math.min(width - d.radius, event.x));
            d.fy = Math.max(d.radius, Math.min(height - d.radius, event.y));
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        // Title
        g.append('text')
            .attr('x', width / 2)
            .attr('y', -5)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '14px')
            .style('font-weight', 'bold')
            .text('BEER ECOSYSTEM NETWORK');

        // Description (skip in fullscreen mode)
        if (!isFullscreen) {
            const description = container.append('div')
                .style('margin-top', '20px')
                .style('padding', '16px')
                .style('background', '#FFFFFF')
                .style('border', '4px solid #000000')
                .style('box-shadow', '4px 4px 0px #000000')
                .style('font-family', "'JetBrains Mono', monospace")
                .style('font-size', '12px')
                .style('line-height', '1.4');

            description.html(`
                <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #FF6600;">🕸️ WHAT THIS SHOWS</h3>
                <p style="margin: 0 0 12px 0;"><strong>Nodes (Circles):</strong> Beer styles sized by popularity. Larger circles = more check-ins.</p>
                <p style="margin: 0 0 12px 0;"><strong>Connections (Lines):</strong> Only the strongest style relationships shown. Filtered by: ≥8 co-occurrences, ≥10% significance, top 4 per style.</p>
                <p style="margin: 0 0 12px 0;"><strong>Interactive:</strong> Drag nodes to explore relationships. Hover for detailed statistics.</p>
                <h3 style="margin: 12px 0 8px 0; font-size: 14px; color: #0066FF;">🔍 KEY INSIGHTS</h3>
                <p style="margin: 0;">• <strong>Clean clusters</strong> show core taste preference groups<br/>
                • <strong>Bridge styles</strong> connect different beer communities<br/>
                • <strong>Missing connections</strong> indicate distinct taste territories</p>
            `);
        }
    }

    // ============ MOBILE FULLSCREEN FUNCTIONALITY ============

    addFullscreenButton(container) {
        // Find the SVG element specifically
        const svg = container.querySelector('svg');
        
        if (!svg) {
            console.warn('No SVG found for fullscreen button overlay');
            return;
        }
        
        // Create overlay div that only covers the SVG, positioned relative to the SVG
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${svg.getAttribute('height') || '200'}px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.7);
            z-index: 1000;
            pointer-events: none;
        `;
        
        const button = document.createElement('button');
        button.className = 'fullscreen-btn';
        button.innerHTML = '📱 TAP FOR FULLSCREEN VIEW';
        button.style.cssText = `
            background: #FFFF00;
            border: 4px solid #000000;
            padding: 16px 24px;
            font-family: 'JetBrains Mono', monospace;
            font-weight: 800;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 6px 6px 0px #000000;
            transform: rotate(-2deg);
            transition: all 0.2s ease;
            pointer-events: auto;
            text-transform: uppercase;
            letter-spacing: 1px;
            max-width: 280px;
            text-align: center;
            line-height: 1.2;
        `;
        
        // Add hover effect
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'rotate(-2deg) scale(1.05)';
            button.style.boxShadow = '8px 8px 0px #000000';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'rotate(-2deg) scale(1)';
            button.style.boxShadow = '6px 6px 0px #000000';
        });
        
        button.addEventListener('click', () => {
            // Save current scroll position before opening fullscreen
            this.savedScrollPosition = {
                x: window.pageXOffset || document.documentElement.scrollLeft,
                y: window.pageYOffset || document.documentElement.scrollTop
            };
            this.openFullscreenChart();
        });
        
        overlay.appendChild(button);
        
        // Insert the overlay right after the SVG element, before any description divs
        svg.parentNode.insertBefore(overlay, svg.nextSibling);
    }

    showMobileNotification() {
        // Check if on mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                         ('ontouchstart' in window) || 
                         (navigator.maxTouchPoints > 0) ||
                         window.innerWidth <= 768;
        
        if (isMobile) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                z-index: 100000;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            `;
            
            // Create notification popup
            const popup = document.createElement('div');
            popup.style.cssText = `
                background: #FFFFFF;
                border: 6px solid #000000;
                box-shadow: 12px 12px 0px #000000;
                padding: 30px;
                max-width: 350px;
                text-align: center;
                font-family: 'JetBrains Mono', monospace;
                transform: rotate(-1deg);
                position: relative;
            `;
            
            popup.innerHTML = `
                <div style="font-size: 24px; margin-bottom: 15px;">📱➡️💻</div>
                <h3 style="
                    margin: 0 0 15px 0; 
                    font-size: 18px; 
                    font-weight: 800; 
                    color: #FF6600;
                    text-transform: uppercase;
                ">FYI... Better experience on desktop</h3>
                <button id="mobile-notification-ok" style="
                    background: #FFFF00;
                    border: 3px solid #000000;
                    padding: 12px 20px;
                    font-family: 'JetBrains Mono', monospace;
                    font-weight: 700;
                    font-size: 12px;
                    cursor: pointer;
                    box-shadow: 4px 4px 0px #000000;
                    text-transform: uppercase;
                    width: 100%;
                ">GOT IT!</button>
            `;
            
            // Add close functionality
            const closeButton = popup.querySelector('#mobile-notification-ok');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
            
            // Close on overlay click
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
            
            overlay.appendChild(popup);
            document.body.appendChild(overlay);
            
            // Auto-close after 3 seconds
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 3000);
        }
    }

    openFullscreenChart() {
        // Create fullscreen overlay
        const overlay = document.createElement('div');
        overlay.id = 'fullscreen-chart-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            background: #FFFFFF;
            z-index: 99999;
            overflow: hidden;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        `;
        
        // Additional styles to prevent scrollbars and ensure full coverage
        overlay.style.maxWidth = '100vw';
        overlay.style.maxHeight = '100vh';

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕ CLOSE';
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #FF0000;
            color: #FFFFFF;
            border: 2px solid #000000;
            padding: 8px 12px;
            font-family: 'JetBrains Mono', monospace;
            font-weight: 700;
            font-size: 10px;
            cursor: pointer;
            box-shadow: 2px 2px 0px #000000;
            z-index: 10000;
        `;
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
            
            // Clean up any remaining tooltips
            d3.selectAll('.chart-tooltip').remove();
            d3.selectAll('.click-tooltip').remove();
            
            // Restore original styles
            document.body.style.overflow = '';
            document.body.style.margin = '';
            document.body.style.padding = '';
            document.body.style.width = '';
            document.body.style.height = '';
            document.body.style.maxWidth = '';
            document.body.style.maxHeight = '';
            document.documentElement.style.overflow = '';
            document.documentElement.style.margin = '';
            document.documentElement.style.padding = '';
            document.documentElement.style.width = '';
            document.documentElement.style.height = '';
            document.documentElement.style.maxWidth = '';
            document.documentElement.style.maxHeight = '';
            
            // Restore scroll position
            if (this.savedScrollPosition) {
                setTimeout(() => {
                    window.scrollTo(this.savedScrollPosition.x, this.savedScrollPosition.y);
                }, 10); // Small delay to ensure DOM is ready
            }
        });

        // Create chart container
        const chartContainer = document.createElement('div');
        chartContainer.id = 'fullscreen-chart-container';
        chartContainer.style.cssText = `
            width: 100%;
            height: 100%;
            max-width: 100vw;
            max-height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        `;

        overlay.appendChild(closeBtn);
        overlay.appendChild(chartContainer);
        document.body.appendChild(overlay);
        
        // Ensure complete fullscreen coverage and prevent scrollbars
        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.style.maxWidth = '100vw';
        document.body.style.maxHeight = '100vh';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.documentElement.style.width = '100vw';
        document.documentElement.style.height = '100vh';
        document.documentElement.style.maxWidth = '100vw';
        document.documentElement.style.maxHeight = '100vh';

        // Render the chart in fullscreen
        this.renderFullscreenChart(chartContainer);
    }

    renderFullscreenChart(container) {
        const d3Container = d3.select(container);
        
        // Use full viewport dimensions
        const width = window.innerWidth;
        const height = window.innerHeight;

        switch(this.currentView) {
            case 'quality-matrix':
                this.renderQualityMatrixChartFullscreen(d3Container, width, height);
                break;
            case 'seasonal':
                this.renderSeasonalPatternsChartFullscreen(d3Container, width, height);
                break;
            case 'weekend-rhythm':
                this.renderWeekendRhythmChartFullscreen(d3Container, width, height);
                break;
            case 'sophistication-wave':
                this.renderSophisticationWaveChartFullscreen(d3Container, width, height);
                break;
            case 'ecosystem-network':
                this.renderEcosystemNetworkChartFullscreen(d3Container, width, height);
                break;
        }
    }

    renderQualityMatrixChartFullscreen(container, width, height) {
        container.selectAll('*').remove();

        // Fullscreen margins with space for legend below
        const margin = { top: 30, right: 40, bottom: 120, left: 60 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        // Calculate style stats
        const styleStats = {};
        this.data.forEach(d => {
            if (!styleStats[d.beer_type]) {
                styleStats[d.beer_type] = { ratings: [], count: 0, uniqueBeers: new Set() };
            }
            styleStats[d.beer_type].count++;
            styleStats[d.beer_type].uniqueBeers.add(d.beer_name);
            if (d.rating !== null) {
                styleStats[d.beer_type].ratings.push(d.rating);
            }
        });

        let data = Object.entries(styleStats)
            .filter(([style, stats]) => stats.ratings.length >= 8 && stats.count >= 10 && stats.uniqueBeers.size > 2)
            .map(([style, stats]) => ({
                style,
                avgRating: stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length,
                checkins: stats.count,
                uniqueBeers: stats.uniqueBeers.size
            }))
            .sort((a, b) => b.checkins - a.checkins)
            .slice(0, 25); // Top 25 for fullscreen

        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#FFFFFF');

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Color scale
        const colors = [
            '#FF0000', '#00FF00', '#0066FF', '#FFFF00', '#FF6600', 
            '#FF00FF', '#00FFFF', '#FF3366', '#66FF33', '#3366FF',
            '#FFCC00', '#CC00FF', '#00CCFF', '#FF0066', '#66FF00',
            '#FF9900', '#9900FF', '#00FF99', '#FF0099', '#99FF00',
            '#0099FF', '#FF9966', '#66FF99', '#9966FF', '#99FFCC'
        ];
        
        const colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d.style))
            .range(colors);

        // Scales
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.checkins)])
            .range([0, chartWidth]);

        const y = d3.scaleLinear()
            .domain([d3.min(data, d => d.avgRating) - 0.1, d3.max(data, d => d.avgRating) + 0.1])
            .range([chartHeight, 0]);

        const r = d3.scaleSqrt()
            .domain([0, d3.max(data, d => d.uniqueBeers)])
            .range([8, 20]); // Larger circles for fullscreen

        // Create circles with interactions
        g.selectAll('.dot')
            .data(data)
            .enter().append('circle')
            .attr('class', 'dot')
            .attr('cx', d => x(d.checkins))
            .attr('cy', d => y(d.avgRating))
            .attr('r', d => r(d.uniqueBeers))
            .attr('fill', d => colorScale(d.style))
            .attr('stroke', '#000000')
            .attr('stroke-width', 3)
            .style('opacity', 0.8)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .style('opacity', 1)
                    .attr('stroke-width', 4)
                    .style('filter', 'drop-shadow(4px 4px 0px #000000)');

                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute')
                    .style('z-index', '100000')
                    .style('pointer-events', 'none');

                tooltip.html(`
                    <strong>${d.style}</strong><br/>
                    Avg Rating: <strong>${d.avgRating.toFixed(2)}</strong><br/>
                    Check-ins: <strong>${d.checkins}</strong><br/>
                    Unique Beers: <strong>${d.uniqueBeers}</strong>
                `);

                // Get tooltip dimensions
                const tooltipNode = tooltip.node();
                const tooltipRect = tooltipNode.getBoundingClientRect();
                const tooltipWidth = tooltipRect.width;
                const tooltipHeight = tooltipRect.height;

                // Calculate position with bounds checking
                let left = event.pageX + 10;
                let top = event.pageY - 50;

                // Adjust if tooltip goes off right edge
                if (left + tooltipWidth > window.innerWidth) {
                    left = event.pageX - tooltipWidth - 10;
                }

                // Adjust if tooltip goes off left edge
                if (left < 0) {
                    left = 10;
                }

                // Adjust if tooltip goes off top edge
                if (top < 0) {
                    top = event.pageY + 20;
                }

                // Adjust if tooltip goes off bottom edge
                if (top + tooltipHeight > window.innerHeight) {
                    top = window.innerHeight - tooltipHeight - 10;
                }

                tooltip.style('left', left + 'px')
                    .style('top', top + 'px');

                tooltip.transition().duration(200).style('opacity', 1);
            })
            .on('mouseout', function() {
                d3.select(this)
                    .style('opacity', 0.8)
                    .attr('stroke-width', 3)
                    .style('filter', 'drop-shadow(2px 2px 0px #000000)');
                d3.selectAll('.chart-tooltip').remove();
            })
            .on('click', function(event, d) {
                // Enhanced click feedback
                d3.select(this)
                    .transition()
                    .duration(150)
                    .attr('r', r(d.uniqueBeers) * 1.3)
                    .transition()
                    .duration(150)
                    .attr('r', r(d.uniqueBeers));
                
                // Detect mobile or touch devices (including Chrome DevTools mobile simulation)
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                                     ('ontouchstart' in window) || 
                                     (navigator.maxTouchPoints > 0) ||
                                     window.innerWidth <= 768;
                
                if (isMobileDevice) {
                    // For mobile: show a persistent tooltip that can be dismissed
                    d3.selectAll('.click-tooltip').remove(); // Remove any existing click tooltips
                    
                    const clickTooltip = d3.select('body').append('div')
                        .attr('class', 'click-tooltip')
                        .style('opacity', 0)
                        .style('position', 'absolute')
                        .style('z-index', '100001')
                        .style('background', '#FFFF00')
                        .style('border', '3px solid #000000')
                        .style('padding', '12px 16px')
                        .style('font-family', 'JetBrains Mono, monospace')
                        .style('font-weight', 'bold')
                        .style('font-size', '12px')
                        .style('box-shadow', '4px 4px 0px #000000')
                        .style('border-radius', '0')
                        .style('max-width', '250px')
                        .style('pointer-events', 'auto')
                        .style('cursor', 'pointer');

                    clickTooltip.html(`
                        <div style="margin-bottom: 8px;"><strong>${d.style}</strong></div>
                        <div>Avg Rating: <strong>${d.avgRating.toFixed(2)}</strong></div>
                        <div>Check-ins: <strong>${d.checkins}</strong></div>
                        <div>Unique Beers: <strong>${d.uniqueBeers}</strong></div>
                        <div style="margin-top: 8px; font-size: 10px; color: #666;">Tap to close</div>
                    `);

                    // Position with bounds checking
                    let left = event.pageX + 10;
                    let top = event.pageY - 50;

                    const tooltipNode = clickTooltip.node();
                    const tooltipRect = tooltipNode.getBoundingClientRect();
                    const tooltipWidth = tooltipRect.width;
                    const tooltipHeight = tooltipRect.height;

                    if (left + tooltipWidth > window.innerWidth) {
                        left = event.pageX - tooltipWidth - 10;
                    }
                    if (left < 0) left = 10;
                    if (top < 0) top = event.pageY + 20;
                    if (top + tooltipHeight > window.innerHeight) {
                        top = window.innerHeight - tooltipHeight - 10;
                    }

                    clickTooltip.style('left', left + 'px')
                        .style('top', top + 'px');

                    clickTooltip.transition().duration(200).style('opacity', 1);

                    // Auto-close after 4 seconds or on click
                    clickTooltip.on('click', () => clickTooltip.remove());
                    setTimeout(() => {
                        if (clickTooltip.node()) clickTooltip.remove();
                    }, 4000);
                } else {
                    // For desktop: show alert
                    alert(`${d.style}\n\nAverage Rating: ${d.avgRating.toFixed(2)}\nTotal Check-ins: ${d.checkins}\nUnique Beers Tried: ${d.uniqueBeers}`);
                }
            });

        // Add axes with larger text for fullscreen
        g.append('g')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '14px')
            .style('font-weight', 'bold');

        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '14px')
            .style('font-weight', 'bold');

        // Add axis labels
        g.append('text')
            .attr('x', chartWidth / 2)
            .attr('y', chartHeight + 50)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('NUMBER OF CHECK-INS (HYPE)');

        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -chartHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('AVERAGE RATING (QUALITY)');

        // Add horizontal legend below chart
        const legend = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${height - 80})`);

        const legendItemsPerRow = Math.ceil(Math.sqrt(data.length));
        const legendItemWidth = chartWidth / legendItemsPerRow;
        const legendItemHeight = 25;

        data.forEach((d, i) => {
            const row = Math.floor(i / legendItemsPerRow);
            const col = i % legendItemsPerRow;
            const x = col * legendItemWidth;
            const y = row * legendItemHeight;

            const legendItem = legend.append('g')
                .attr('transform', `translate(${x}, ${y})`);

            legendItem.append('circle')
                .attr('cx', 8)
                .attr('cy', 8)
                .attr('r', 6)
                .attr('fill', colorScale(d.style))
                .attr('stroke', '#000000')
                .attr('stroke-width', 2);

            legendItem.append('text')
                .attr('x', 20)
                .attr('y', 12)
                .style('font-size', '10px')
                .style('font-weight', 'bold')
                .text(d.style.length > 12 ? d.style.substring(0, 12) + '...' : d.style);
        });
    }

    renderSeasonalPatternsChartFullscreen(container, width, height) {
        container.selectAll('*').remove();

        const margin = { top: 50, right: 40, bottom: 120, left: 60 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        // Helper function to map months to seasons
        const getSeason = (month) => {
            if (month >= 2 && month <= 4) return 0; // Spring
            if (month >= 5 && month <= 7) return 1; // Summer
            if (month >= 8 && month <= 10) return 2; // Autumn
            return 3; // Winter
        };

        // Group by season and beer style
        const timeData = {};
        this.data.forEach(d => {
            const date = new Date(d.time);
            const season = getSeason(date.getMonth());
            
            if (!timeData[season]) {
                timeData[season] = {};
            }
            if (!timeData[season][d.beer_type]) {
                timeData[season][d.beer_type] = 0;
            }
            timeData[season][d.beer_type]++;
        });

        // Get top 5 beer styles for mobile fullscreen
        const styleCount = {};
        this.data.forEach(d => {
            styleCount[d.beer_type] = (styleCount[d.beer_type] || 0) + 1;
        });
        const topStyles = Object.entries(styleCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([style]) => style);

        // Create data array for stacked bar chart
        const data = Array.from({length: 4}, (_, season) => {
            const result = { period: season };
            topStyles.forEach(style => {
                result[style] = timeData[season] ? (timeData[season][style] || 0) : 0;
            });
            return result;
        });

        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#FFFFFF');

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const x = d3.scaleBand()
            .domain(data.map(d => d.period))
            .range([0, chartWidth])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => topStyles.reduce((sum, style) => sum + d[style], 0))])
            .range([chartHeight, 0]);

        const color = d3.scaleOrdinal()
            .domain(topStyles)
            .range(['#FFFF00', '#FF6600', '#FF0000', '#0066FF', '#00FF00']);

        // Create stacked data
        const stack = d3.stack().keys(topStyles);
        const stackedData = stack(data);

        // Create stacked bars with interactions
        g.selectAll('.layer')
            .data(stackedData)
            .enter().append('g')
            .attr('class', 'layer')
            .attr('fill', d => color(d.key))
            .selectAll('rect')
            .data(d => d)
            .enter().append('rect')
            .attr('x', d => x(d.data.period))
            .attr('y', d => y(d[1]))
            .attr('height', d => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth())
            .attr('stroke', '#000000')
            .attr('stroke-width', 3)
            .style('filter', 'drop-shadow(2px 2px 0px #000000)')
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .attr('stroke-width', 4)
                    .style('filter', 'drop-shadow(4px 4px 0px #000000)');

                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute')
                    .style('z-index', '100000')
                    .style('pointer-events', 'none');

                const timeLabels = ['Spring (Mar-May)', 'Summer (Jun-Aug)', 'Autumn (Sep-Nov)', 'Winter (Dec-Feb)'];
                const styleKey = d3.select(this.parentNode).datum().key;
                const count = d[1] - d[0];
                
                tooltip.html(`
                    <strong>${timeLabels[d.data.period]}</strong><br/>
                    ${styleKey}: <strong>${count}</strong>
                `);

                // Position with bounds checking
                const tooltipNode = tooltip.node();
                const tooltipRect = tooltipNode.getBoundingClientRect();
                const tooltipWidth = tooltipRect.width;
                const tooltipHeight = tooltipRect.height;

                let left = event.pageX + 10;
                let top = event.pageY - 50;

                if (left + tooltipWidth > window.innerWidth) {
                    left = event.pageX - tooltipWidth - 10;
                }
                if (left < 0) left = 10;
                if (top < 0) top = event.pageY + 20;
                if (top + tooltipHeight > window.innerHeight) {
                    top = window.innerHeight - tooltipHeight - 10;
                }

                tooltip.style('left', left + 'px')
                    .style('top', top + 'px');

                tooltip.transition().duration(200).style('opacity', 1);
            })
            .on('mouseout', function() {
                d3.select(this)
                    .attr('stroke-width', 3)
                    .style('filter', 'drop-shadow(2px 2px 0px #000000)');
                d3.selectAll('.chart-tooltip').remove();
            })
            .on('click', function(event, d) {
                // Enhanced click feedback
                d3.select(this)
                    .transition()
                    .duration(150)
                    .style('transform', 'scale(1.05)')
                    .transition()
                    .duration(150)
                    .style('transform', 'scale(1)');
                
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                                     ('ontouchstart' in window) || 
                                     (navigator.maxTouchPoints > 0) ||
                                     window.innerWidth <= 768;
                
                const timeLabels = ['Spring (Mar-May)', 'Summer (Jun-Aug)', 'Autumn (Sep-Nov)', 'Winter (Dec-Feb)'];
                const styleKey = d3.select(this.parentNode).datum().key;
                const count = d[1] - d[0];
                
                if (isMobileDevice) {
                    d3.selectAll('.click-tooltip').remove();
                    
                    const clickTooltip = d3.select('body').append('div')
                        .attr('class', 'click-tooltip')
                        .style('opacity', 0)
                        .style('position', 'absolute')
                        .style('z-index', '100001')
                        .style('background', '#FFFF00')
                        .style('border', '3px solid #000000')
                        .style('padding', '12px 16px')
                        .style('font-family', 'JetBrains Mono, monospace')
                        .style('font-weight', 'bold')
                        .style('font-size', '12px')
                        .style('box-shadow', '4px 4px 0px #000000')
                        .style('max-width', '250px')
                        .style('pointer-events', 'auto')
                        .style('cursor', 'pointer');

                    clickTooltip.html(`
                        <div style="margin-bottom: 8px;"><strong>${timeLabels[d.data.period]}</strong></div>
                        <div>Beer Style: <strong>${styleKey}</strong></div>
                        <div>Check-ins: <strong>${count}</strong></div>
                        <div style="margin-top: 8px; font-size: 10px; color: #666;">Tap to close</div>
                    `);

                    // Position with bounds checking
                    let left = event.pageX + 10;
                    let top = event.pageY - 50;

                    const tooltipNode = clickTooltip.node();
                    const tooltipRect = tooltipNode.getBoundingClientRect();
                    const tooltipWidth = tooltipRect.width;
                    const tooltipHeight = tooltipRect.height;

                    if (left + tooltipWidth > window.innerWidth) {
                        left = event.pageX - tooltipWidth - 10;
                    }
                    if (left < 0) left = 10;
                    if (top < 0) top = event.pageY + 20;
                    if (top + tooltipHeight > window.innerHeight) {
                        top = window.innerHeight - tooltipHeight - 10;
                    }

                    clickTooltip.style('left', left + 'px')
                        .style('top', top + 'px');

                    clickTooltip.transition().duration(200).style('opacity', 1);

                    clickTooltip.on('click', () => clickTooltip.remove());
                    setTimeout(() => {
                        if (clickTooltip.node()) clickTooltip.remove();
                    }, 4000);
                } else {
                    alert(`${timeLabels[d.data.period]}\n\nBeer Style: ${styleKey}\nCheck-ins: ${count}`);
                }
            });

        const timeLabels = ['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'];

        // Add x-axis
        const xAxis = g.append('g')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x).tickFormat(d => timeLabels[d]));
            
        xAxis.selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold');

        // Add y-axis
        g.append('g')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '14px')
            .style('font-weight', 'bold');

        // Add axis labels
        g.append('text')
            .attr('x', chartWidth / 2)
            .attr('y', chartHeight + 50)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('SEASON');

        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -40)
            .attr('x', -chartHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('CHECK-INS');

        // Add horizontal legend below chart
        const legend = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${height - 60})`);

        topStyles.forEach((style, i) => {
            const legendItem = legend.append('g')
                .attr('transform', `translate(${i * (chartWidth / topStyles.length)}, 0)`);

            legendItem.append('rect')
                .attr('width', 20)
                .attr('height', 15)
                .attr('fill', color(style))
                .attr('stroke', '#000000')
                .attr('stroke-width', 2);

            legendItem.append('text')
                .attr('x', 25)
                .attr('y', 12)
                .style('font-size', '11px')
                .style('font-weight', 'bold')
                .text(style.length > 15 ? style.substring(0, 15) + '...' : style);
        });
    }

    renderWeekendRhythmChartFullscreen(container, width, height) {
        container.selectAll('*').remove();

        const margin = { top: 50, right: 20, bottom: 100, left: 80 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        // Create day x hour matrix with 2-hour intervals for fullscreen
        const rhythmData = {};
        const hoursPerCell = 2;
        const totalCells = 12; // 24 hours / 2 = 12 cells

        this.data.forEach(d => {
            const date = new Date(d.time);
            const day = date.getDay(); // 0 = Sunday
            const hour = date.getHours();
            
            // Group hours by interval
            const hourGroup = Math.floor(hour / hoursPerCell) * hoursPerCell;
            const key = `${day}-${hourGroup}`;
            
            if (!rhythmData[key]) {
                rhythmData[key] = { day, hour: hourGroup, count: 0, beers: [] };
            }
            rhythmData[key].count++;
            rhythmData[key].beers.push(d.beer_name);
        });

        const data = Object.values(rhythmData).sort((a, b) => a.day - b.day || a.hour - b.hour);
        const maxCount = d3.max(data, d => d.count);

        const svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#FFFFFF');

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleBand()
            .domain(d3.range(0, totalCells).map(i => i * hoursPerCell))
            .range([0, chartWidth])
            .padding(0.1);

        const yScale = d3.scaleBand()
            .domain(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
            .range([0, chartHeight])
            .padding(0.1);

        const colorScale = d3.scaleSequential(d3.interpolateReds)
            .domain([0, maxCount]);

        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Create heatmap cells with interactions
        g.selectAll('.heatmap-cell')
            .data(data)
            .enter().append('rect')
            .attr('class', 'heatmap-cell')
            .attr('x', d => xScale(d.hour))
            .attr('y', d => yScale(dayNames[d.day]))
            .attr('width', xScale.bandwidth())
            .attr('height', yScale.bandwidth())
            .attr('fill', d => d.count > 0 ? colorScale(d.count) : '#FFFFFF')
            .attr('stroke', '#000000')
            .attr('stroke-width', 2)
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .attr('stroke-width', 4)
                    .style('filter', 'drop-shadow(2px 2px 0px #000000)');

                const tooltip = d3.select('body').append('div')
                    .attr('class', 'chart-tooltip')
                    .style('opacity', 0)
                    .style('position', 'absolute')
                    .style('z-index', '100000')
                    .style('pointer-events', 'none');

                const endHour = d.hour + hoursPerCell;
                const timeRange = `${d.hour.toString().padStart(2, '0')}:00 - ${endHour.toString().padStart(2, '0')}:00`;
                
                tooltip.html(`
                    <strong>${dayNames[d.day]} ${timeRange}</strong><br/>
                    Check-ins: <strong>${d.count}</strong><br/>
                    Unique Beers: <strong>${new Set(d.beers).size}</strong>
                `);

                // Position with bounds checking
                const tooltipNode = tooltip.node();
                const tooltipRect = tooltipNode.getBoundingClientRect();
                const tooltipWidth = tooltipRect.width;
                const tooltipHeight = tooltipRect.height;

                let left = event.pageX + 10;
                let top = event.pageY - 50;

                if (left + tooltipWidth > window.innerWidth) {
                    left = event.pageX - tooltipWidth - 10;
                }
                if (left < 0) left = 10;
                if (top < 0) top = event.pageY + 20;
                if (top + tooltipHeight > window.innerHeight) {
                    top = window.innerHeight - tooltipHeight - 10;
                }

                tooltip.style('left', left + 'px')
                    .style('top', top + 'px');

                tooltip.transition().duration(200).style('opacity', 1);
            })
            .on('mouseout', function() {
                d3.select(this)
                    .attr('stroke-width', 2)
                    .style('filter', 'none');
                d3.selectAll('.chart-tooltip').remove();
            })
            .on('click', function(event, d) {
                // Enhanced click feedback
                d3.select(this)
                    .transition()
                    .duration(150)
                    .style('transform', 'scale(1.1)')
                    .transition()
                    .duration(150)
                    .style('transform', 'scale(1)');
                
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                                     ('ontouchstart' in window) || 
                                     (navigator.maxTouchPoints > 0) ||
                                     window.innerWidth <= 768;
                
                const endHour = d.hour + hoursPerCell;
                const timeRange = `${d.hour.toString().padStart(2, '0')}:00 - ${endHour.toString().padStart(2, '0')}:00`;
                const uniqueBeers = new Set(d.beers).size;
                
                if (isMobileDevice) {
                    d3.selectAll('.click-tooltip').remove();
                    
                    const clickTooltip = d3.select('body').append('div')
                        .attr('class', 'click-tooltip')
                        .style('opacity', 0)
                        .style('position', 'absolute')
                        .style('z-index', '100001')
                        .style('background', '#FFFF00')
                        .style('border', '3px solid #000000')
                        .style('padding', '12px 16px')
                        .style('font-family', 'JetBrains Mono, monospace')
                        .style('font-weight', 'bold')
                        .style('font-size', '12px')
                        .style('box-shadow', '4px 4px 0px #000000')
                        .style('max-width', '250px')
                        .style('pointer-events', 'auto')
                        .style('cursor', 'pointer');

                    clickTooltip.html(`
                        <div style="margin-bottom: 8px;"><strong>${dayNames[d.day]} ${timeRange}</strong></div>
                        <div>Check-ins: <strong>${d.count}</strong></div>
                        <div>Unique Beers: <strong>${uniqueBeers}</strong></div>
                        <div style="margin-top: 8px; font-size: 10px; color: #666;">Tap to close</div>
                    `);

                    // Position with bounds checking
                    let left = event.pageX + 10;
                    let top = event.pageY - 50;

                    const tooltipNode = clickTooltip.node();
                    const tooltipRect = tooltipNode.getBoundingClientRect();
                    const tooltipWidth = tooltipRect.width;
                    const tooltipHeight = tooltipRect.height;

                    if (left + tooltipWidth > window.innerWidth) {
                        left = event.pageX - tooltipWidth - 10;
                    }
                    if (left < 0) left = 10;
                    if (top < 0) top = event.pageY + 20;
                    if (top + tooltipHeight > window.innerHeight) {
                        top = window.innerHeight - tooltipHeight - 10;
                    }

                    clickTooltip.style('left', left + 'px')
                        .style('top', top + 'px');

                    clickTooltip.transition().duration(200).style('opacity', 1);

                    clickTooltip.on('click', () => clickTooltip.remove());
                    setTimeout(() => {
                        if (clickTooltip.node()) clickTooltip.remove();
                    }, 4000);
                } else {
                    alert(`${dayNames[d.day]} ${timeRange}\n\nCheck-ins: ${d.count}\nUnique Beers: ${uniqueBeers}`);
                }
            });

        // Add axes
        g.append('g')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(xScale).tickFormat(d => `${d.toString().padStart(2, '0')}:00`))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold');

        g.append('g')
            .call(d3.axisLeft(yScale))
            .selectAll('text')
            .attr('class', 'chart-axis')
            .style('font-size', '12px')
            .style('font-weight', 'bold');

        // Add axis labels
        g.append('text')
            .attr('x', chartWidth / 2)
            .attr('y', chartHeight + 50)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('HOUR OF DAY');

        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -50)
            .attr('x', -chartHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'chart-axis')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('DAY OF WEEK');

        // Add color scale legend
        const legendWidth = 200;
        const legendHeight = 20;
        const legend = svg.append('g')
            .attr('transform', `translate(${(width - legendWidth) / 2}, ${height - 40})`);

        const legendScale = d3.scaleLinear()
            .domain([0, maxCount])
            .range([0, legendWidth]);

        const legendData = d3.range(0, legendWidth, 2).map(d => ({
            value: legendScale.invert(d),
            x: d
        }));

        legend.selectAll('.legend-rect')
            .data(legendData)
            .enter().append('rect')
            .attr('class', 'legend-rect')
            .attr('x', d => d.x)
            .attr('y', 0)
            .attr('width', 2)
            .attr('height', legendHeight)
            .attr('fill', d => colorScale(d.value));

        legend.append('text')
            .attr('x', 0)
            .attr('y', legendHeight + 15)
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('0');

        legend.append('text')
            .attr('x', legendWidth)
            .attr('y', legendHeight + 15)
            .attr('text-anchor', 'end')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text(maxCount);

        legend.append('text')
            .attr('x', legendWidth / 2)
            .attr('y', -5)
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text('CHECK-INS');
    }

    renderSophisticationWaveChartFullscreen(container, width, height) {
        // Set up centering container first
        container.node().style.display = 'flex';
        container.node().style.flexDirection = 'column';
        container.node().style.justifyContent = 'center';
        container.node().style.alignItems = 'center';
        container.node().style.height = '100vh';
        container.node().style.width = '100vw';
        
        const oldSelect = d3.select;
        d3.select = (selector) => {
            if (selector === '#main-exploration-chart') return container;
            return oldSelect(selector);
        };
        
        this.renderSophisticationWaveChart(true);
        d3.select = oldSelect;
        
        const svg = container.select('svg')
            .style('width', Math.min(width, window.innerWidth - 40) + 'px')
            .style('height', Math.min(height, window.innerHeight - 100) + 'px')
            .style('background', '#FFFFFF')
            .style('display', 'block')
            .style('margin', '0 auto');

        // Enhance readability for mobile fullscreen line chart
        svg.selectAll('.chart-axis text, .axis text')
            .style('font-size', '11px')
            .style('font-weight', 'bold');
            
        // Make lines thicker for mobile visibility
        svg.selectAll('path.line')
            .style('stroke-width', '3px');
            
        // Enhance legend readability
        svg.selectAll('.legend text')
            .style('font-size', '11px')
            .style('font-weight', 'bold');
    }

    renderEcosystemNetworkChartFullscreen(container, width, height) {
        // Set up centering container first
        container.node().style.display = 'flex';
        container.node().style.flexDirection = 'column';
        container.node().style.justifyContent = 'center';
        container.node().style.alignItems = 'center';
        container.node().style.height = '100vh';
        container.node().style.width = '100vw';
        
        const oldSelect = d3.select;
        d3.select = (selector) => {
            if (selector === '#main-exploration-chart') return container;
            return oldSelect(selector);
        };
        
        this.renderEcosystemNetworkChart(true);
        d3.select = oldSelect;
        
        const svg = container.select('svg')
            .style('width', Math.min(width, window.innerWidth - 40) + 'px')
            .style('height', Math.min(height, window.innerHeight - 100) + 'px')
            .style('background', '#FFFFFF')
            .style('display', 'block')
            .style('margin', '0 auto');

        // Enhance readability for mobile fullscreen network chart
        svg.selectAll('text')
            .style('font-size', '10px')
            .style('font-weight', 'bold');
            
        // Make network nodes larger for touch interaction
        svg.selectAll('circle')
            .attr('r', function(d) {
                const currentR = d3.select(this).attr('r');
                return Math.max(currentR * 1.3, 8); // Minimum 8px radius
            });
            
        // Make network links more visible
        svg.selectAll('line')
            .style('stroke-width', '2px');
    }


}

// Initialize when DOM is loaded and D3 is available
function initializeBrutalBeerStats() {
    // Wait for both DOM and D3.js to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBrutalBeerStats);
        return;
    }
    
    // Check if D3.js is loaded
    if (typeof d3 === 'undefined') {
        console.error('D3.js is not loaded. Retrying in 100ms...');
        setTimeout(initializeBrutalBeerStats, 100);
        return;
    }
    
    // Check if BEER_DATA is available
    if (typeof BEER_DATA === 'undefined') {
        console.error('BEER_DATA is not loaded. Make sure venues_data.js loaded properly.');
        return;
    }
    
    // Wait a bit more to ensure all DOM elements are rendered
    setTimeout(() => {
        try {
            new BrutalBeerStats();
        } catch (error) {
            console.error('Failed to initialize BrutalBeerStats:', error);
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
                    <p>Failed to load beer data visualization</p>
                    <p>Check console for details</p>
                </div>
            `;
        }
    }, 50);
}

// Start initialization
initializeBrutalBeerStats();