new Chart(document.getElementById("myChart-1"), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          //label: "Population (millions)",
          labels: [
            'Red',
            'Yellow',
        ],
          backgroundColor: ["#3dfcfd", "#14A4A4"],
          data: [95, 5],
          borderWidth: 0,
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'HTML',
        position: 'bottom'
        
      },
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 70,
      animation: {
        duration:1000,
      }
    }
});
new Chart(document.getElementById("myChart-2"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        //label: "Population (millions)",
        labels: [
          'Red',
          'Yellow',
      ],
        backgroundColor: ["#3dfcfd", "#14A4A4"],
        data: [90, 10],
        borderWidth: 0,
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'CSS',
      position: 'bottom'
    },
    tooltips: {
      enabled: false
 },
 cutoutPercentage: 70,
 animation: {
  duration:1200,
}
  }
});
new Chart(document.getElementById("myChart-3"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        //label: "Population (millions)",
        labels: [
          'Red',
          'Yellow',
      ],
        backgroundColor: ["#3dfcfd", "#14A4A4"],
        data: [75, 25],
        borderWidth: 0,
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'JS',
      position: 'bottom'
      
    },
    tooltips: {
      enabled: false
 },
 cutoutPercentage: 70,
 animation: {
  duration:1400,
}
  }
});
new Chart(document.getElementById("myChart-4"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        //label: "Population (millions)",
        labels: [
          'Red',
          'Yellow',
      ],
        backgroundColor: ["#3dfcfd", "#14A4A4"],
        data: [80, 20],
        borderWidth: 0,
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bootstrap',
      position: 'bottom'
      
    },
    tooltips: {
      enabled: false
 },
 cutoutPercentage: 70,
 animation: {
  duration:1600,
}
  }
});
new Chart(document.getElementById("myChart-5"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        //label: "Population (millions)",
        labels: [
          'Red',
          'Yellow',
      ],
        backgroundColor: ["#3dfcfd", "#14A4A4"],
        data: [80, 20],
        borderWidth: 0,
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'JQuery',
      position: 'bottom'
      
    },
    tooltips: {
      enabled: false
 },
 cutoutPercentage: 70,
 animation: {
  duration:1900,
}
  }
});