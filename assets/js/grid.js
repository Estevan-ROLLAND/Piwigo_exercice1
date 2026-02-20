const data = {
    datasets: [
        {
            label: 'Orange Dataset',
            data: [{
                x: 0,
                y: 5,
                r: 50
            }, {
                x: 1,
                y: 6,
                r: 35
            }, {
                x: 1,
                y: 5,
                r: 35
            }, {
                x: 1,
                y: 3,
                r: 35
            }, {
                x: 2,
                y: 6,
                r: 50
            }, {
                x: 2,
                y: 4,
                r: 35
            }, {
                x: 2,
                y: 3,
                r: 35
            }, {
                x: 3,
                y: 4,
                r: 50
            }],
            backgroundColor: 'rgb(255, 135, 0)'
        },
        {
            label: 'Light Orange Dataset',
            data: [{
                x: 0,
                y: 4,
                r: 20
            }, {
                x: 1,
                y: 4,
                r: 25
            }, {
                x: 2,
                y: 5,
                r: 25
            }, {
                x: 3,
                y: 6,
                r: 25
            }, {
                x: 3,
                y: 5,
                r: 20
            }, {
                x: 3,
                y: 3,
                r: 25
            }, {
                x: 4,
                y: 6,
                r: 20
            }, {
                x: 4,
                y: 4,
                r: 25
            }, {
                x: 4,
                y: 3,
                r: 20
            }, {
                x: 4,
                y: 2,
                r: 20
            }, {
                x: 5,
                y: 3,
                r: 20
            }, {
                x: 5,
                y: 2,
                r: 20
            }],
            backgroundColor: 'rgba(255, 145, 0, 0.7)'
        },
        {
            label: 'Light Blue Dataset',
            data: [{
                x: 0,
                y: 6,
                r: 15
            }, {
                x: 0,
                y: 3,
                r: 15
            }, {
                x: 0,
                y: 2,
                r: 15
            }, {
                x: 1,
                y: 1,
                r: 15
            }, {
                x: 2,
                y: 2,
                r: 15
            }, {
                x: 2,
                y: 1,
                r: 15
            }, {
                x: 3,
                y: 2,
                r: 10
            }, {
                x: 3,
                y: 1,
                r: 15
            }, {
                x: 3,
                y: 0,
                r: 15
            }, {
                x: 4,
                y: 5,
                r: 15
            }, {
                x: 4,
                y: 1,
                r: 10
            }, {
                x: 4,
                y: 0,
                r: 15
            }, {
                x: 5,
                y: 6,
                r: 15
            }, {
                x: 5,
                y: 5,
                r: 15
            }, {
                x: 5,
                y: 4,
                r: 15
            }, {
                x: 5,
                y: 1,
                r: 15
            }, {
                x: 5,
                y: 0,
                r: 15
            }, {
                x: 6,
                y: 6,
                r: 15
            }, {
                x: 6,
                y: 5,
                r: 15
            }, {
                x: 6,
                y: 4,
                r: 15
            }, {
                x: 6,
                y: 3,
                r: 15
            }, {
                x: 6,
                y: 2,
                r: 10
            }, {
                x: 6,
                y: 0,
                r: 10
            }, {
                x: 7,
                y: 6,
                r: 15
            }, {
                x: 7,
                y: 5,
                r: 10
            }, {
                x: 7,
                y: 4,
                r: 15
            }, {
                x: 7,
                y: 3,
                r: 10
            }, {
                x: 8,
                y: 6,
                r: 10
            }, {
                x: 8,
                y: 4,
                r: 10
            }],
            backgroundColor: 'rgba(0, 0, 255, 0.2)'
        },
        {
            label: 'Phantom Dataset',
            data: [{
                x: 10,
                y: 5,
                r: 0
            }],
            backgroundColor: 'rgb(255,255, 255)'
        },
    ]
};

const config = {
    type: 'bubble',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                type: 'linear', 
                min: 0 - 0.5, // permet de décaler pour avoir le point en entier, pas découpé
                max: 10,
                ticks: {
                    stepSize: 1,
                    display: false   // cache les nombres
                },
                border: {
                    display: false   // cache la ligne de l’axe
                },
                grid: {
                    display: true    // garde la grille
                }
            },
            y: {
                min: 0 - 0.5, // permet de décaler pour avoir le point en entier, pas découpé
                max: 7,
                ticks: {
                    stepSize: 1,
                    display: false   // cache les nombres
                },
                border: {
                    display: false   // cache la ligne de l’axe
                },
                grid: {
                    display: true    // garde la grille
                }
            },
            bounds: 'ticks',
        }
    }
};

const ctx = document.getElementById('myChart');


new Chart(ctx, config);

function dotsSize() {
    data.datasets.forEach(dataset => {
        dataset.data.forEach(dot => {
            dot.r = (Math.random() + 0.1) * 50
        });
    });
}

dotsSize()
