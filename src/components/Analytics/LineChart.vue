<script>
  //Importing Line class from the vue-chartjs wrapper
  import { Line } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Line,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['0','1', '2', '3', '4', '5'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              borderColor: '#f87979',
              borderWidth: 3,
              pointBackgroundColor: 'white',
              pointBorderColor: '#white',
              //Data to be represented on y-axis
              data: [0, 0, 0, 0, 0, 0],
              fill: false,
              lineTension: 0,
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              display: false,
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
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    computed: {
      profile: function () {
        return this.$store.state.profile
      }
    },
    created: function () {
        const tmpData = []
        this.profile.articles.forEach(article => tmpData.push(article.rank))

        for (var i=0; i < tmpData.length; i++ ) {
          this.datacollection.datasets[0].data[tmpData[i]] = this.datacollection.datasets[0].data[tmpData[i]] + 1
        }
  },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>