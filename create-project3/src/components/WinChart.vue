<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    data () {
      let wonGames = this.$root.$data.games.filter(game => game.outcome === "Won");
      let drawnGames = this.$root.$data.games.filter(game => game.outcome === "Draw");
      let lostGames = this.$root.$data.games.filter(game => game.outcome === "Lost");
      return {
        chartData: {
          labels: ["Won",	"Draw",	"Lost"],
          datasets: [{
              borderWidth: 1,
              borderColor: [
                'rgba(98, 206, 86, 1)',
              
              'rgba(54, 162, 235, 1)',
              'rgba(255,99,132,1)',
              ],
              backgroundColor: [
              'rgba(98, 255, 132, 0.2)',
              'rgba(200, 162, 235, 0.2)',
              'rgba(255, 98, 86, 0.2)',
              ],
              data: [wonGames.length,	drawnGames.length,	lostGames.length]
            }]
        },
        options: {
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