import React from "react";

const alerts = [
  {
    timestamp: "2025-07-08 14:32",
    location: "Sector 21, Noida",
    type: "Flood Warning",
    severity: "high",
  },
  {
    timestamp: "2025-07-08 13:20",
    location: "MG Road, Bengaluru",
    type: "Drain Blockage",
    severity: "medium",
  },
  {
    timestamp: "2025-07-08 12:05",
    location: "Dadar West, Mumbai",
    type: "Flood Warning",
    severity: "low",
  },
];

const getSeverityColor = (level) => {
  switch (level) {
    case "high":
      return "bg-red-500 text-white";
    case "medium":
      return "bg-yellow-400 text-black";
    case "low":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};

const RecentAlerts = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md shadow rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <p className="text-gray-500 text-sm">{alert.timestamp}</p>
              <p className="font-medium text-lg">{alert.location}</p>
              <p className="text-sm text-gray-700">{alert.type}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
                  alert.severity
                )}`}
              >
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </span>
              <button className="text-blue-600 hover:underline text-sm">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlerts;
