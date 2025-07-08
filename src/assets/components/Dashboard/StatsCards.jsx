import React from "react";
import { Droplets, AlertTriangle, Flame, Clock } from "lucide-react";

const stats = [
  {
    icon: <Droplets className="text-indigo-600 w-6 h-6" />,
    label: "Total Drainage Lines",
    value: 1284,
  },
  {
    icon: <AlertTriangle className="text-red-500 w-6 h-6" />,
    label: "Blocked Drainage (%)",
    value: "23%",
  },
  {
    icon: <Flame className="text-yellow-500 w-6 h-6" />,
    label: "Flood Risk Score",
    value: "Medium",
  },
  {
    icon: <Clock className="text-gray-500 w-6 h-6" />,
    label: "Last Updated",
    value: "5 mins ago",
  },
];

const StatsCards = () => {
  return (
    <div className="h-full flex flex-col justify-between items-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-full max-w-md bg-background/80 backdrop-blur-md shadow-md rounded-xl p-6 flex items-center gap-4"
        >
          <div className="p-3 rounded-full bg-background shadow">{stat.icon}</div>
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default StatsCards;
