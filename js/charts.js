const chart1 = document.getElementById('chart1');

new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Friday'],
        datasets: [{
            label: 'Today Visitor',
            data: [12000, 8000, 4500, 5000, 1200, 3000],
            borderWidth: 0,
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// SECOND BOX BAR CHART
const chart2 = document.getElementById('chart2');

new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
        datasets: [{
            label: 'Total Active Campaign',
            data: [1250, 1900, 3000, 5000, 2000, 3000],
            borderWidth: 0 ,
            backgroundColor:['Blue', 'Orange', 'Yellow', 'Green', 'Purple', 'Red'] 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//EXTRA LARGE CHART BOX
const box_larger = document.getElementById('box_larger');

new Chart(box_larger, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: ['skyblue', 'Orange', 'Green', 'Tomatoe', 'Red', 'Blue']
        }]
    },
    options: {
        layout: {
width: '5px'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
