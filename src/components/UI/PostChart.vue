<template>
  <Bar
    class="h-160"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "PostChart",
  components: { Bar },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartOptions() {
        return { responsive: true };
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.comments.map((comment) => {
          if (comment.email.length > 12) {
            return comment.email.slice(0, 10) + "...";
          }
          return comment.email;
        }),
        datasets: [
          {
            label: "Count email chars",
            backgroundColor: "#0E9F6E",
            data: this.comments.map((comment) => comment.email.length),
          },
        ],
      };
    },
  },
};
</script>
