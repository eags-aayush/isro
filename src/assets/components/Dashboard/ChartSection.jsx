import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const ChartSection = () => {
  // Line Chart: Blocked Drains
  const blockedDrainsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "% Blocked Drains",
        data: [18, 22, 28, 25, 19, 24],
        borderColor: "#ef4444",
        tension: 0.3,
      },
    ],
  };

  // Bar Chart: Risk Scores
  const riskData = {
    labels: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"],
    datasets: [
      {
        label: "Risk Score",
        data: [75, 88, 67, 52, 70],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  // Pie Chart: Land Use
  const landUseData = {
    labels: ["Built-up Area", "Green Cover"],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["#10b981", "#a855f7"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="px-4 py-10">

      <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
        {/* Line Chart */}
        <div className="bg-background/80 backdrop-blur-md shadow-md rounded-lg p-4 w-full md:w-[30%]">
          <h3 className="text-sm font-medium mb-2 text-center">Blocked Drains Over Time</h3>
          <div className="h-48">
            <Line
              data={blockedDrainsData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-background/80 backdrop-blur-md shadow-md rounded-lg p-4 w-full md:w-[30%]">
          <h3 className="text-sm font-medium mb-2 text-center">Risk Score Per Region</h3>
          <div className="h-48">
            <Bar
              data={riskData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-background/80 backdrop-blur-md shadow-md rounded-lg p-4 w-full md:w-[30%]">
          <h3 className="text-sm font-medium mb-2 text-center">Land Use Distribution</h3>
          <div className="h-48">
            <Pie
              data={landUseData}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
