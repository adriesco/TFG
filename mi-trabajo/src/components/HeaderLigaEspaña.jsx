import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMainHome from "./HeaderMainHome";
function HeaderLigasEspana() {
  return (
    <div className=" text-white px-6 py-6">
      <HeaderMainHome />
      <div className="flex justify-between items-center mt-5">
        {/* Logo + Título */}
        <div className="flex items-center gap-4">
          <img src="/logos/laliga.png" alt="LaLiga" className="w-20 h-20" />
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            LALIGA
          </h1>
        </div>

        <button className="group flex items-center gap-2 bg-green-800 hover:bg-green-700 px-5 py-2 rounded-full shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 border border-green-600">
        <svg
          className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="text-sm font-semibold text-white">Añadir a favoritos</span>
      </button>

      </div>
    </div>
  );
}

export default HeaderLigasEspana;
