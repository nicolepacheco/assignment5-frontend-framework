(function () {
  'use strict'

  // Get the canvas element for the chart
  var ctx = document.getElementById('myChart')

  // Create a new Chart instance
  var myChart = new Chart(ctx, {
    type: 'line',  // Specify the chart type as 'line'
    data: {
      // Define the labels for the x-axis
      labels: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'
      ],
      // Define the datasets for the chart
      datasets: [{
        label: 'Today',  // Label for the first dataset
        data: [  // Data points for the first dataset
          10, 22, 35, 40, 12, 23, 55, 6, 37, 48, 19, 22, 38, 40, 21, 24, 50, 11, 29, 36, 27, 15, 8
        ],
        lineTension: 0.5,  // Line tension for smoothing the curve
        backgroundColor: 'transparent',  // Background color for the line (transparent)
        borderColor: '#3751FF',  // Border color for the line
        borderWidth: 4,  // Width of the line border
        pointBackgroundColor: '#3751FF'  // Color for the data points
      },
      {
        label: 'Yesterday',  // Label for the second dataset
        data: [  // Data points for the second dataset
          15, 28, 30, 45, 8, 18, 50, 12, 40, 42, 23, 19, 34, 48, 18, 21, 46, 16, 25, 32, 20, 12, 10
        ],
        lineTension: 0.5,  // Line tension for smoothing the curve
        backgroundColor: 'transparent',  // Background color for the line (transparent)
        borderColor: '#DFE0EB',  // Border color for the line
        borderWidth: 4,  // Width of the line border
        pointBackgroundColor: '#DFE0EB'  // Color for the data points
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,  // Y-axis does not start at zero
            color: '#9FA2B4'  // Color for the y-axis ticks
          },
          position: 'right'  // Position the y-axis on the right side
        }]
      },
      legend: {
        display: true  // Display the legend
      }
    }
  })
})()
