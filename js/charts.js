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
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}