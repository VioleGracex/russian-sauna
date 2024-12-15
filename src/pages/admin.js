import React, { useState } from "react";
import axios from "axios";
import AdminHero from "@/components/admin/adminHero";
import "../app/globals.css";
const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = () => {
    if (password === "admin123") { // Replace with a secure mechanism
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      {!isAuthenticated ? (
        <div className="p-6 bg-white shadow-md rounded">
          <h2 className="text-lg font-bold mb-4">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Login
          </button>
        </div>
      ) : (
        <AdminHero /> 
      )}
    </div>
  );
};

export default Admin;
