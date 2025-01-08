import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        Welcome to Our E-Learning Platform
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Learn, grow, and achieve your goals with the best mentors and resources.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >

          
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
