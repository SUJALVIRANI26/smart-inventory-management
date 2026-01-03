/* static/inventory_manager/js/owner.js */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Chart 1: Revenue Trend (Line Chart) ---
    const ctxLine = document.getElementById('revenueChart');
    if (ctxLine) {
        new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [45000, 52000, 48000, 61000, 59000, 73000, 68000, 79000, 85000, 92000, 98000, 105000],
                        borderColor: '#4e73df',
                        backgroundColor: 'rgba(78, 115, 223, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Profit',
                        data: [22000, 25000, 23000, 30000, 29000, 36000, 34000, 39000, 42000, 46000, 49000, 52000],
                        borderColor: '#1cc88a',
                        backgroundColor: 'rgba(28, 200, 138, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'start',
                        labels: { usePointStyle: true }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { borderDash: [5, 5], drawBorder: false },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'nearest'
                }
            }
        });
    }

    // --- Chart 2: Sales by Category (Doughnut) ---
    const ctxCategory = document.getElementById('categoryChart');
    if (ctxCategory) {
        new Chart(ctxCategory, {
            type: 'doughnut',
            data: {
                labels: ['Electronics', 'Furniture', 'Games', 'Clothing', 'Books', 'Other'],
                datasets: [{
                    data: [35, 20, 18, 12, 8, 7],
                    backgroundColor: [
                        '#4e73df',
                        '#1cc88a',
                        '#f6c23e',
                        '#e74a3b',
                        '#36b9cc',
                        '#858796'
                    ],
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                cutout: '70%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    // --- Chart 3: Monthly Comparison (Bar Chart) ---
    const ctxBar = document.getElementById('comparisonChart');
    if (ctxBar) {
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: '2023',
                        data: [45000, 52000, 48000, 61000, 59000, 73000],
                        backgroundColor: '#4e73df',
                        borderRadius: 5,
                        barPercentage: 0.6
                    },
                    {
                        label: '2022',
                        data: [38000, 42000, 40000, 48000, 52000, 58000],
                        backgroundColor: '#e0e7ff',
                        borderRadius: 5,
                        barPercentage: 0.6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'start',
                        labels: { usePointStyle: true }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { borderDash: [5, 5], drawBorder: false },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // --- Chart 4: Growth Forecast (Line Chart) ---
    const ctxForecast = document.getElementById('forecastChart');
    if (ctxForecast) {
        new Chart(ctxForecast, {
            type: 'line',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Actual',
                        data: [145000, 168000, 192000, null],
                        borderColor: '#4e73df',
                        borderWidth: 3,
                        tension: 0.4,
                        pointBackgroundColor: '#4e73df',
                        pointRadius: 6
                    },
                    {
                        label: 'Forecast',
                        data: [null, null, 192000, 220000],
                        borderColor: '#f6c23e',
                        borderWidth: 3,
                        borderDash: [5, 5],
                        tension: 0.4,
                        pointBackgroundColor: '#f6c23e',
                        pointRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'start',
                        labels: { usePointStyle: true }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { borderDash: [5, 5], drawBorder: false },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // --- Active Menu Handling ---
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        if(item.getAttribute('href') && currentPath.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        }
    });

    // --- Date Range Picker Initialization ---
    const dateRangeInput = document.getElementById('dateRange');
    if (dateRangeInput) {
        // Initialize date range picker (you would integrate a library like flatpickr here)
        dateRangeInput.addEventListener('click', function() {
            // In a real implementation, you would initialize flatpickr or similar
            console.log('Date range picker clicked');
        });
    }

    // --- Export Button Handlers ---
    document.querySelectorAll('.export-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const format = this.classList[1].replace('export-', '');
            alert(`Exporting report as ${format.toUpperCase()}...`);
            // In a real implementation, this would trigger a download
        });
    });

    // --- Print Report Function ---
    const printBtn = document.querySelector('.export-print');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // --- Filter Form Submission ---
    const filterForm = document.querySelector('.report-filters');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, this would submit the form and reload the report
            console.log('Filters applied:', {
                dateRange: document.getElementById('dateRange')?.value,
                reportType: document.getElementById('reportType')?.value,
                // Add other filter values
            });
            
            // Show loading state
            const generateBtn = document.querySelector('.generate-report');
            if (generateBtn) {
                const originalText = generateBtn.innerHTML;
                generateBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
                generateBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    generateBtn.innerHTML = originalText;
                    generateBtn.disabled = false;
                    alert('Report generated successfully!');
                }, 1500);
            }
        });
    }

    // --- Auto-refresh Data (for real-time dashboards) ---
    if (document.querySelector('.auto-refresh-toggle')) {
        const refreshToggle = document.querySelector('.auto-refresh-toggle');
        let refreshInterval;
        
        refreshToggle.addEventListener('change', function() {
            if (this.checked) {
                refreshInterval = setInterval(() => {
                    console.log('Refreshing dashboard data...');
                    // In a real implementation, this would fetch new data and update charts
                }, 30000); // Refresh every 30 seconds
            } else {
                clearInterval(refreshInterval);
            }
        });
    }

    // --- Toggle Chart Visibility ---
    document.querySelectorAll('.chart-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const chartId = this.dataset.chart;
            const chartContainer = document.getElementById(chartId);
            if (chartContainer) {
                chartContainer.style.display = this.checked ? 'block' : 'none';
            }
        });
    });

    // --- Initialize Tooltips ---
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // --- Report Summary Calculations ---
    function calculateReportSummary() {
        const totalSales = document.querySelector('.total-sales');
        const totalProfit = document.querySelector('.total-profit');
        const avgOrder = document.querySelector('.avg-order-value');
        const growthRate = document.querySelector('.growth-rate');
        
        if (totalSales && totalProfit && avgOrder && growthRate) {
            // In a real implementation, these would be calculated from actual data
            const sales = 245876;
            const profit = 98234;
            const avg = 245.67;
            const growth = 12.5;
            
            totalSales.textContent = '$' + sales.toLocaleString();
            totalProfit.textContent = '$' + profit.toLocaleString();
            avgOrder.textContent = '$' + avg.toFixed(2);
            growthRate.textContent = growth + '%';
        }
    }
    
    // Call on page load
    calculateReportSummary();
});