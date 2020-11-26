<template>
  <div class="w-100">
    <h1 class="text-left m-3"><strong>나의 영화 성향은?</strong></h1>
    <hr/>
    <div>
      <h3 class="text-left mx-3"><strong><span id="coloring">{{ favoiteGenre }}</span>를 좋아하는군요!</strong></h3><br>
      <div id="chartdiv" />
    </div>
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
  data () {
    return {
      favoiteGenre: '',
    }
  },
  mounted: function () {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    const series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.2;
    series.rotationThreshold = 0;
    series.text = ''

    for (const review of this.reviews) {
      if (review.user === this.username) {
        for (const genre of review.movie.genres) {
          series.text = series.text + ' ' + genre
        }
      }
    }

    series.heatRules.push({
    "target": series.labels.template,
    "property": "fill",
    "min": am4core.color("#0000CC"),
    "max": am4core.color("#CC00CC"),
    "dataField": "value"
    });

    this.favoiteGenre = series.data[0].word
    series.labels.template.events.on("hit", (ev) => {
      this.$router.push({ name: 'Community', params: {'genre': ev.target.currentText}})
    })

    series.maxFontSize = am4core.percent(40)
    series.minFontSize = am4core.percent(4)

    const hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#FF0000");
    
    for (const path of document.querySelectorAll('path')) { path.remove() }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
}
</script>

<style>
#chartdiv {
  width: 100%;
  height: 50vh;
}
</style>