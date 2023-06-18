import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export interface Item {
  label: string;
  value: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  topInitiativesDataset?: Item[];
}

export const TopInitiativesElement = (props: Props): JSX.Element => {
  const labels = props.topInitiativesDataset?.map((item) => item.label);
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 14,
            family: "Montserrat",
          },
          
        },
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Кількість підтримуючих",
        data: props.topInitiativesDataset?.map((item) => item.value),
        borderColor: "#0284FE",
        backgroundColor: "#0284FE",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
