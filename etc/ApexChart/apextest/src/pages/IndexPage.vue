<template>
  <q-page class="flex flex-center">
    <button @click="changeData">Toggle Data</button>
    <VueApexCharts
      ref="chart"
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
    <ul>
      <li @click="toggleSeries">item</li>
    </ul>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import VueApexCharts from "vue3-apexcharts";
const liste = ["series1", "series2"];
const chart = ref(null);
const toggleSeries = () => {
  flag.value = !flag.value;
  chart.value.toggleSeries("series-1");
  chart.value.toggleSeries("series-2");
};
const dummy01 = [
  { x: 1991, y: 91 },
  { x: 1992, y: 70 },
  { x: 1993, y: 60 },
  { x: 1994, y: 49 },
  { x: 1995, y: 50 },
  { x: 1996, y: 35 },
  { x: 1997, y: 40 },
  { x: 1998, y: 30 },
];
const dummy02 = [
  { x: 1991, y: 30 },
  { x: 1992, y: 40 },
  { x: 1993, y: 35 },
  { x: 1994, y: 50 },
  { x: 1995, y: 49 },
  { x: 1996, y: 60 },
  { x: 1997, y: 70 },
  { x: 1998, y: 91 },
];
const chartOptions = ref({
  chart: {
    id: "vuechart-example",
  },
  markers: {
    size: 4,
  },
  colors: ["#ff0000", "#00ff00"],
  legend: {
    customLegendItems: ["series"],
    toggleVisible: true,
    showForSingleSeries: true,
    markers: {
      onClick: (chart, seriesIndex, opts) => {
        console.log(chart);
        console.log(seriesIndex);
        console.log(opts);
        opts.config.legend.show = true;
      },
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
});

const chartOptions01 = ref({
  chart: {
    id: "vuechart-example",
  },
  markers: {
    size: 4,
  },
  colors: ["#00ff00", "#ff0000"],
  legend: {
    customLegendItems: ["series-1"],
    toggleVisible: true,

    markers: {
      onClick: (chart, seriesIndex, opts) => {
        console.log(chart);
        console.log(seriesIndex);
        console.log(opts);
      },
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
});

const chartOptions02 = ref({
  chart: {
    id: "vuechart-example",
  },
  markers: {
    size: 4,
  },
  colors: ["#00ff00", "#ff0000"],
  legend: {
    customLegendItems: ["series-1"],
    toggleVisible: true,

    markers: {
      onClick: (chart, seriesIndex, opts) => {
        console.log(chart);
        console.log(seriesIndex);
        console.log(opts);
      },
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
});

const series = ref([
  {
    name: "series-1",
    type: "line",
    data: dummy01,
  },
  {
    name: "series-2",
    type: "line",
    data: dummy02,
  },
]);

const flag = ref(false);

const changeData = () => {
  // series.value[0].data = series.value[0].data.reverse();
  flag.value = !flag.value;
  series.value[0].data = flag.value ? dummy01 : dummy02;
  series.value[1].data = flag.value ? dummy02 : dummy01;
  chartOptions.value = flag.value ? chartOptions02.value : chartOptions01.value;
  console.log(chartOptions.value);
};
</script>
