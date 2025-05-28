fetch('chart4.php')
.then(res=>res.json())
.then(data=>{
    const labels =data.map(item=>item.program);
    const total = data.map(item=>item.count);


const ctx4 = document.getElementById('pie').getContext('2d');

new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Students',
            data: total,
        backgroundColor: [
    '#6C5CE7', // Vibrant purple (BSSE)
      '#00B894', // Emerald green (BSCS)
      '#FD79A8', // Soft pink (BSDS)
      '#FDCB6E', // Warm gold (BSAI)
      '#0984E3', // Deep sky blue (BSCY)
      '#A29BFE'  // Lavender (BSIT)
    ],
    borderColor: [
'#5649C4', // Darker purple
      '#009A7A', // Darker green
      '#E84393', // Darker pink
      '#E8AD4A', // Darker gold
      '#0768B5', // Darker blue
      '#847BFF'  // Darker lavender
    ],
    borderWidth: 1,
    borderRadius: 2
  }]
}

,
    options: {
        responsive: true
    }
});
})