import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2018_Kerala_floods_rescue_operations.jpg/1920px-2018_Kerala_floods_rescue_operations.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          AI-Powered Urban Drainage Monitoring
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6">
          Flood Alert System for Smarter and Safer Cities
        </p>
        <p className="text-md md:text-lg mb-8 max-w-2xl mx-auto">
          Tackling urban flooding using satellite imagery and real-time
          analytics. Our AI system detects and warns about drainage blockages
          and flood risks before they happen.
        </p>
        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Explore Dashboard
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
