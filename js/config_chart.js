function grafic(borderw, fs, fsl, tp){
    $.ajax({
      url: 'txts/valor_bitcoin_mes.txt',
          success: function(conteudo) {
            const lista = conteudo.split('\n');
            var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'pico de valor do Bitcoin 2023',
                        data: lista,
                        backgroundColor: 'rgba(153, 217, 240, 0.2)',
                        borderColor: 'rgb(153, 217, 240)',
                        borderWidth: borderw
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                          ticks: {
                            fontColor: 'rgb(153, 217, 240)',
                            fontSize: fs,
                          }
                        }]
                    },
                    legend: {
                        labels: {
                            fontColor: 'rgb(153, 217, 240)',
                            fontSize: fsl
                        }
                    },
                    animation: {
                        onComplete: function() {
                            var chartInstance = this.chart;
                            ctx.textAlign = 'center';
                            ctx.fillStyle = 'rgb(153, 217, 240)';
                            this.data.datasets.forEach(function(dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function(bar, index) {
                                    ctx.fillText(dataset.data[index], bar._model.x, bar._model.y - tp);
                                });
                            });
                        }
                    }
                }
            });
          },
          error: function() {
            console.log('Erro ao carregar o arquivo');
          }
    });
}

var ctx = document.getElementById('myChart').getContext('2d');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    grafic(5, 30, 15, 25)
} else{
    grafic(2, 10, 10, 25)
}

