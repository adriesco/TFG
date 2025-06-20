import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMainHome from "./HeaderMainHome";
function HeaderLigasEspana() {
  return (
    <div className=" text-white px-6 py-6">
      <div className="flex justify-between items-center mt-5">
        {/* Logo + Título */}
        <div className="flex items-center gap-4">
          <img src="/logos/laliga.png" alt="LaLiga" className="w-20 h-20" />
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            LALIGA
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderLigasEspana;
