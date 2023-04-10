const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

var ctx = document.getElementById("tokenchart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Pre-ICO', 'Bounties', 'Seeding businesses', 'YUPIE reserve', 'Locked for future use', 'Team & experts', 'ICO'],
        datasets: [{
            label: '% of total tokens',
            data: [0.8, 1, 5, 10, 19, 20, 44.2],
            backgroundColor: ['rgba(91, 192, 235, 0.2)', 'rgba(255, 231, 76, 0.2)', 'rgba(243, 117, 43, 0.2)', 'rgba(243, 167, 18, 0.2)', 'rgba(168, 198, 134, 0.2)', 'rgba(192, 215, 234, 0.2)', 'rgba(256, 59, 63, 0.2)'],
            borderColor: ['rgba(91, 192, 235, 1)', 'rgba(255, 231, 76, 1)', 'rgba(243, 117, 43, 1)', 'rgba(243, 167, 18, 1)', 'rgba(168, 198, 134, 1)', 'rgba(192, 215, 234, 1)', 'rgba(256, 59, 63, 1)'],
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: '#F8F9FA'
            }
        },
        scales: {
            yAxes: [{
                display: false,
            }],
            xAxes: [{
                display: false,
                ticks: {
                    fontColor: '#F8F9FA',
                },
                gridLines: {
                    color: '#F8F9FA',
                    display: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'ETH value of investment',
                    fontColor: '#F8F9FA',
                }
            }]
        },
        plugins: {
            datalabels: {
                color: '#F8F9FA',
                display: function(context) {
                    return context.dataIndex > 0.9; // display labels with an odd index
                },
                font: {
                    size: 16
                },
            }
        }
    }
});