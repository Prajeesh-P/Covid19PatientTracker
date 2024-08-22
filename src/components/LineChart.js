
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ displayData, selectedState }) => {
  // Sample data
  const data = {
    labels: ["Active", "Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Covid Cases",
        data:
          selectedState?.length === 0
            ? [
                displayData?.data?.total?.active,
                displayData?.data?.total?.confirmed,
                displayData?.data?.total?.recovered,
                displayData?.data?.total?.deaths,
              ]
            : [
                selectedState?.active,
                selectedState?.confirmed,
                selectedState?.recovered,
                selectedState?.deaths,
              ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Covid-19 Cases Data",
      },
    },
  };

  return (
    <div className="line-chart">
      {" "}
      <Bar data={data} options={options} />
    </div>
  );
};

export default LineChart;
