import HeaderLigaEspaña from "./HeaderLigaEspaña";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LigaEspañola() {
  const partidos = [
    {
      local: { nombre: "Real Madrid", escudo: "/escudos/liga/realmadrid.png" },
      visitante: { nombre: "Barcelona", escudo: "/escudos/liga/barcelona.png" },
      resultado: [2, 1],
      fecha: "24/04/25",
    },
    {
      local: { nombre: "Sevilla", escudo: "/escudos/liga/sevilla.png" },
      visitante: { nombre: "Betis", escudo: "/escudos/liga/betis.png" },
      resultado: [1, 1],
      fecha: "24/04/25",
    },
    {
      local: { nombre: "Atlético", escudo: "/escudos/liga/atleticomadrid.png" },
      visitante: { nombre: "Valencia", escudo: "/escudos/liga/valencia.png" },
      resultado: [3, 0],
      fecha: "24/04/25",
    },
    {
      local: { nombre: "Villarreal", escudo: "/escudos/liga/villareal.png" },
      visitante: { nombre: "Athletic", escudo: "/escudos/liga/athletic.png" },
      resultado: [2, 2],
      fecha: "24/04/25",
    },
    {
      local: { nombre: "Celta", escudo: "/escudos/liga/celta.png" },
      visitante: { nombre: "Alavés", escudo: "/escudos/liga/alaves.png" },
      resultado: [0, 1],
      fecha: "24/04/25",
    },
    {
      local: {
        nombre: "RealSociedad",
        escudo: "/escudos/liga/realsociedad.png",
      },
      visitante: { nombre: "Osasuna", escudo: "/escudos/liga/osasuna.png" },
      resultado: [1, 3],
      fecha: "24/04/25",
    },
    {
      local: { nombre: "Getafe", escudo: "/escudos/liga/getafe.png" },
      visitante: { nombre: "Rayo", escudo: "/escudos/liga/rayovallecano.png" },
      resultado: [2, 0],
      fecha: "24/04/25",
    },
    {
      local: { nombre: "Mallorca", escudo: "/escudos/liga/mallorca.png" },
      visitante: { nombre: "Cádiz", escudo: "/escudos/liga/cadiz.png" },
      resultado: [0, 0],
      fecha: "23/04/25",
    },
    {
      local: { nombre: "Valladolid", escudo: "/escudos/liga/valladolid.png" },
      visitante: { nombre: "Leganes", escudo: "/escudos/liga/leganes.png" },
      resultado: [0, 3],
      fecha: "23/04/25",
    },
    {
      local: { nombre: "Girona", escudo: "/escudos/liga/girona.png" },
      visitante: { nombre: "Espanyol", escudo: "/escudos/liga/espanyol.png" },
      resultado: [3, 2],
      fecha: "21/04/25",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-green-500 text-white px-6 py-6">
      <HeaderLigaEspaña />

      {/* Navegación */}
      <nav className="flex gap-6 border-b border-neutral-900 pb-4 mb-6 text-sm text-gray-400 mt-7">
        <Link
          to="/ligaespañola"
          className="text-white font-semibold border-b-2 border-white"
        >
          Resultados
        </Link>
        <Link
          to="/calendarioliga"
          className="hover:text-green-400 cursor-pointer transition-colors"
        >
          Calendario
        </Link>
        <Link
          to="/clasificacion"
          className="hover:text-green-400 cursor-pointer transition-colors"
        >
          Clasificación
        </Link>
        <Link
          to="/fichajesliga"
          className="hover:text-green-400 cursor-pointer transition-colors"
        >
          Fichajes
        </Link>
      </nav>
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold mb-1 tracking-wide">
          Resultados recientes
        </h2>
        <p className="text-md text-gray-300">Jornada 34</p>
      </div>

      {/* Tarjetas */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {partidos.map((partido, i) => (
          <div
            key={i}
            className="bg-black/70 rounded-2xl p-4 flex justify-between items-center shadow-md hover:shadow-green-500/20 transition-all duration-300 border border-gray-700 hover:scale-[1.02]"
          >
            {/* Equipos */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={partido.local.escudo}
                  alt={partido.local.nombre}
                  className="w-8 h-8"
                />
                <span className="text-sm">{partido.local.nombre}</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={partido.visitante.escudo}
                  alt={partido.visitante.nombre}
                  className="w-8 h-8"
                />
                <span className="text-sm">{partido.visitante.nombre}</span>
              </div>
            </div>

            {/* Resultado */}
            <div className="flex flex-col items-center font-bold text-xl">
              <span>{partido.resultado[0]}</span>
              <span>{partido.resultado[1]}</span>
            </div>

            {/* Fecha */}
            <div className="text-right text-sm text-gray-400">
              <p>{partido.fecha}</p>
              <p className="text-xs italic">Finalizado</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default LigaEspañola;
