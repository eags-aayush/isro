import React from "react";
import { Droplets, Map, Repeat, AlertTriangle, FileText, Share2 } from "lucide-react";

const features = [
  {
    title: "Drainage Detection",
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    description: "Identify blocked or missing drainage using AI and satellite imagery.",
  },
  {
    title: "Road Network Overlay",
    icon: <Map className="w-8 h-8 text-green-600" />,
    description: "Visualize road infrastructure layered with drainage maps for better context.",
  },
  {
    title: "Change Monitoring",
    icon: <Repeat className="w-8 h-8 text-yellow-500" />,
    description: "Track urban changes over time to assess potential impact on drainage.",
  },
  {
    title: "Flood Risk Prediction",
    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    description: "AI-powered models to predict and alert for potential urban flooding.",
  },
  {
    title: "PDF Reports",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    description: "Download detailed reports with maps, stats, and flood risk analysis.",
  },
  {
    title: "Easy Sharing",
    icon: <Share2 className="w-8 h-8 text-pink-600" />,
    description: "Share insights with authorities or communities in one click.",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Key Features</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-border shadow-md rounded-2xl p-6 text-left hover:shadow-lg cursor-cell transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
