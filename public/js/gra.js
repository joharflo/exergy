Highcharts.chart('container', {

    title: {
        text: 'Numero de Visitas a la WEB, 2010-2017'
    },

    subtitle: {
        text: 'Exergy Modeling & Analytics'
    },

    yAxis: {
        title: {
            text: 'Numero Visitas'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    //para crear la serie aletoria solicitada
    series: [{
        name: 'Cantidad de Visitantes',
        data: [Math.floor(Math.random() * 9000) + 100 ,
              Math.floor(Math.random() * 9000) + 100 ,
              Math.floor(Math.random() * 9000) + 100 ,
              Math.floor(Math.random() * 9000) + 100 ,
              Math.floor(Math.random() * 9000) + 100 ,
              Math.floor(Math.random() * 9000) + 1100 ,
              Math.floor(Math.random() * 9000) + 100 ,
              Math.floor(Math.random() * 9000) + 100 ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
