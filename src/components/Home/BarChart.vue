<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { HorizontalBar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: HorizontalBar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['추천점수'],
          datasets: [
            {
              label: '추천',
              backgroundColor: '#f87979',
              barThickness: 20,
              data: [60]
            },
            {
              label: '비추천',
              backgroundColor: '#6C757D',
              barThickness: 20,
              data: [40]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              gridLines: {
                display: true
              },
              stacked: true
            }],
            xAxes: [ {
              ticks: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 100,    
              },
              gridLines: {
                display: false,
              },
              stacked: true
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
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
      this.$emit('recommendScore', this.datacollection.datasets[0].data)
    }
  }
</script>