<template>
  <div id="chartdiv"  style="height: 40vh: ; width: 50vw;">
  </div>

</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  name: 'CloudChart',
  computed: {
    reviews () { return this.$store.state.reviews },
    username () { return this.$store.state.username },
  },
  mounted: function () {
    this.$store.dispatch('getMovieReviews')

    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    // chart.Width = am4core.percent(100)
    // chart.relativeHeight = am4core.percent(50)
    series.text = ''

    for (const review of this.reviews) {
      if (review.user === this.username) {
        for (const genre of review.movie.genres) {
          series.text = series.text + ' ' + genre
        }
      }
    }

    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {};

    setTimeout(function () {
      const tspans = document.querySelectorAll('tspan')
      console.log(tspans)
      console.log(tspans.forEach(tspan => console.log(tspan.textContent)))
    }, 1000)
    for (const path of document.querySelectorAll('path')) { path.remove() }
  }
}
</script>

<style>
#chartdiv {
  width: 100%;
  height: 600px;
}
</style>