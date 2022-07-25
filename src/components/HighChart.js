import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function HighChart(props) {
  console.log("Inside highcharts", props.bucketNames);

  const options = {
    chart: {
      type: "column",
      reflow: "true",
      backgroundColor: "transparent",
      height: 180,
      width: 280,
      border: 0,
    },
    xAxis: {
      labels: {
        style: {
          fontSize: "0.5vw",
          color: "white",
        },
      },
    },
    yAxis: {
      labels: {},
      gridLineColor: "transparent",
      visible: false,
    },

    title: {
      text: undefined,
    },
    series: [
      {
        showInLegend: false,
        data: props.pastDueBucketDocumentCount,
        color: "#5DAAE0",
      },
    ],
    plotOptions: {
      series: {
        shadow: false,
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          formatter() {
            console.log(this.y);

            return this.point.y + "%";
          },

          overflow: "none",
          style: {
            fontSize: "0.6vw",
            textOutline: "none",
            color: "lightblue",
          },
        },
      },
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default HighChart;
