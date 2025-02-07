/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

interface OverviewProps {
  data: any[];
  type: "bar" | "line";
  colors: {
    backgroundColor: string;
    borderColor: string;
  };
}

export const Overview: React.FC<OverviewProps> = ({ data, type, colors }) => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  useEffect(() => {
    const handleSwitchToBar = () => setChartType("bar");
    const handleSwitchToLine = () => setChartType("line");

    window.addEventListener('switchToBar', handleSwitchToBar);
    window.addEventListener('switchToLine', handleSwitchToLine);

    return () => {
      window.removeEventListener('switchToBar', handleSwitchToBar);
      window.removeEventListener('switchToLine', handleSwitchToLine);
    };
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Revenue Analysis",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Revenue",
        data: data.map((item) => item.total),
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        borderWidth: 2,
        borderRadius: type === 'bar' ? 5 : 0,
        tension: 0.3,
      },
    ],
  };

  return type === "bar" ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  );
};
