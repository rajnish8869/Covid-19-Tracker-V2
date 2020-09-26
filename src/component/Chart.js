import React from "react";
import { Line } from "react-chartjs-2";
// /*eslint-disable*/

const Chart = ({ data }) => {
  
  console.log("data",data)

  return <Line data={data} options={{ responsive: true, height: '100%', width: "100%" }} />;
};

export default Chart;