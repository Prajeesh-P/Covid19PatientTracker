
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({displayData,selectedState}) => {
  const data = {
    labels: ['Active','Confirmed', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'COVID-19 Statistics',
        data: selectedState?.length === 0
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
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(0, 100, 0, 1)'
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          ' rgba(0, 100, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'COVID-19 Cases Distribution',
      },
    },
  };

  return (
    <div className='pie-chart'>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
