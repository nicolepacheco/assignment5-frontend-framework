/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'
      ],
      datasets: [{
        label: 'Today',
        data: [
          10, 22, 35, 40, 12, 23, 55, 6, 37, 48, 19, 22, 38, 40, 21, 24, 50, 11, 29, 36, 27, 15, 8
        ],
        lineTension: 0.5,
        backgroundColor: 'transparent',
        borderColor: '#3751FF',
        borderWidth: 4,
        pointBackgroundColor: '#3751FF'
      },
      {
        label: 'Yesterday',
        data: [
          15, 28, 30, 45, 8, 18, 50, 12, 40, 42, 23, 19, 34, 48, 18, 21, 46, 16, 25, 32, 20, 12, 10
        ],
        lineTension: 0.5,
        backgroundColor: 'transparent',
        borderColor: '#DFE0EB',
        borderWidth: 4,
        pointBackgroundColor: '#DFE0EB'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            color: '#9FA2B4'
          },
          position: 'right'
        }]
      },
      legend: {
        display: true
      }
    }
  })
})()
