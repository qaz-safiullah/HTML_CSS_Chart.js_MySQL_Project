fetch('chart2.php')
.then(res => res.json())
.then(data=>{
    const labels =data.map(item=> item.department);
    const values = data.map(item=>item.count);



const ctx2 = document.getElementById('doughnut').getContext('2d');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: 'Employees',
            data: values,
            backgroundColor: 
['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']

,
            borderColor: ['#cc4f6a', '#2d89c4', '#d6a93d', '#3a9a9a', '#7a52cc'],
          
    borderWidth: 1,
    borderRadius: 2
        }]
    },
    options: {
        responsive: true
    }
});


})
