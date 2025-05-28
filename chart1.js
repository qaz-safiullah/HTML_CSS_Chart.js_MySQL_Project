fetch('chart1.php')
.then (res => res.json())
.then(data => {
    const labels = data.map(item => item.month);
    const values = data.map(item => item.total);

    const ctx = document.getElementById('lineChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Earnings',
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    },
                   /* title: {
                        display: true,
                        text: 'Monthly Earnings'
                    }*/
                }
            }
        });
    })
    .catch(err => console.error('Error loading chart data:', err));
