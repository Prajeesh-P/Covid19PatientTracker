
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
import { useSelector } from "react-redux";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const reduxData = useSelector((state) => state.covid.data);
  console.log(reduxData);
  const selectedState = useSelector((state) => state.covid.selectedState);
  const data = {
    labels: ["Active", "Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        label: "Covid Cases",
        data:
          selectedState === null
            ? [
              reduxData?.data?.total?.active,
              reduxData?.data?.total?.confirmed,
              reduxData?.data?.total?.recovered,
              reduxData?.data?.total?.deaths,
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
