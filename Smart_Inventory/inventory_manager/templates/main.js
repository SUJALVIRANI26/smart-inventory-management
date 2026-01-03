/* static/inventory_manager/js/master.js */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Chart 1: Customer Habits (Bar Chart) ---
    const ctxBar = document.getElementById('barChart');
    if (ctxBar) {
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Seen Product',
                        data: [40000, 30000, 20000, 45000, 25000, 50000, 40000],
                        backgroundColor: '#e2e6ea',
                        borderRadius: 5,
                        barPercentage: 0.6
                    },
                    {
                        label: 'Sales',
                        data: [30000, 20000, 15000, 39784, 20000, 40000, 30000],
                        backgroundColor: '#4e73df',
                        borderRadius: 5,
                        barPercentage: 0.6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top', align: 'start', labels: { usePointStyle: true } } },
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [5, 5], drawBorder: false } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // --- Chart 2: Product Statistic (Doughnut) ---
    const ctxDonut = document.getElementById('donutChart');
    if (ctxDonut) {
        new Chart(ctxDonut, {
            type: 'doughnut',
            data: {
                labels: ['Electronics', 'Games', 'Furniture'],
                datasets: [{
                    data: [45, 30, 25],
                    backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                cutout: '75%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
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
});