<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data () {
      let dates = this.$root.$data.games.map(a => a.date).reverse()
      let ratings = this.$root.$data.games.map(a => a.rating).reverse()
      return {
        chartData: {
          labels: dates,
          datasets: [
            {
              label: 'Line Chart',
              data: ratings,
              fill: false,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>