fetch('chart3.php')
.then(res=> res.json())
.then(data=>{
    const labels = data.map(item=>item.designation);
    const count = data.map(item=>item.count);


const ctx3 = document.getElementById('bar').getContext('2d');

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Teachers',
            data: count,
            backgroundColor: [
       '#3a7bd5', '#00d2ff', '#D3CCE3', '#E6E6FA'
            ],
            borderColor: [
        '#2a5db0', '#00b4d8', '#b8aed6', '#d6d6f0'
            ],

    borderWidth: 2,
    borderRadius: 5 
        }]
    },
    options: {
        responsive: true
    }
});
})
