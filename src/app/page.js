"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToSection from "@/components/Actions/ScrollTosection";
import Admin from "@/pages/admin";
import Home from "@/pages/home";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that the Router runs only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
