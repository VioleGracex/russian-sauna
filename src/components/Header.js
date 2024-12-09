"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Corrected import

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/assets/images/silhouette-sauna-icon-emblem-outline-260nw-2439823961.webp"
            alt="Sauna Icon"
            className="w-8 h-8" // Adjust size as needed
          />
          <span className="text-2xl font-bold text-black">Русская Баня</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            { id: "#benefits", label: "Преимущества" },
            { id: "#services", label: "Услуги" },
            { id: "#reviews", label: "Отзывы" },
            { id: "#address", label: "Адрес" },
            { id: "#about", label: "О нас" },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className="font-medium text-black hover:text-yellow-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center bg-white md:hidden space-y-4 py-4">
          {[
            { id: "#benefits", label: "Преимущества" },
            { id: "#services", label: "Услуги" },
            { id: "#reviews", label: "Отзывы" },
            { id: "#address", label: "Адрес" },
            { id: "#about", label: "О нас" },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className="text-lg font-medium text-black hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
