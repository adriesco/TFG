import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderLigas from "./HeaderLiga";
import HeaderLigaEspaña from "./SubHeaderLiga";
import Footer from "./Footer";

function Clasificación() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clasificacion")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setEquipos(data.equipos);
        else setError("Error al obtener la clasificación");
      })
      .catch(() => setError("Error al cargar los datos"))
      .finally(() => setLoading(false));
  }, []);

  // Colores según posición
  const colorFila = (pos) =>
    pos <= 4
      ? "bg-blue-900/20 border-l-4 border-blue-500"
      : pos === 5 || pos === 6
      ? "bg-orange-700/20 border-l-4 border-orange-500"
      : pos === 7
      ? "bg-green-700/20 border-l-4 border-green-500"
      : pos >= 18
      ? "bg-red-800/20 border-l-4 border-red-500"
      : "";
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white px-4 sm:px-6 py-6">
      <HeaderLigas />
      <HeaderLigaEspaña />

      <nav className="flex gap-4 sm:gap-6 border-b border-gray-700 pb-4 mb-6 text-sm sm:text-base mt-7">
        <Link
          to="/ligaespañola"
          className="text-gray-300 hover:text-green-400 pb-2 px-1"
        >
          Resultados
        </Link>
        <Link
          to="/calendarioliga"
          className="text-gray-300 hover:text-green-400 pb-2 px-1"
        >
          Calendario
        </Link>
        <Link
          to="/clasificacion"
          className="text-white font-bold border-b-2 border-green-500 pb-2 px-1"
        >
          Clasificación
        </Link>
        <Link
          to="/fichajesliga"
          className="text-gray-300 hover:text-green-400 pb-2 px-1"
        >
          Fichajes
        </Link>
      </nav>

      <h2 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-green-300">
        Clasificación LaLiga EA
      </h2>

      <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg mt-5 mb-5">
        {/* Cabecera de tabla */}
        <div className="grid grid-cols-12 gap-2 p-2 font-medium text-gray-300">
          <span className="col-span-1 text-center">Posicion</span>
          <span className="col-span-4">Equipo</span>
          <span className="col-span-1 text-center">PJ</span>
          <span className="col-span-1 text-center">G</span>
          <span className="col-span-1 text-center">E</span>
          <span className="col-span-1 text-center">P</span>
          <span className="col-span-1 text-center">DG</span>
          <span className="col-span-1 text-center font-bold">PTS</span>
        </div>

        {equipos.map((eq) => (
          <div
            key={eq.posicion}
            className={`grid grid-cols-12 gap-2 p-2 items-center ${colorFila(
              eq.posicion
            )}`}
          >
            <span className="col-span-1 text-center">{eq.posicion}</span>
            <div className="col-span-4 flex items-center gap-2">
              <img
                src={eq.escudo_url}
                alt={eq.nombre}
                className="w-6 h-6 object-contain"
              />
              <span>{eq.nombre}</span>
            </div>
            <span className="col-span-1 text-center">{eq.pj}</span>
            <span className="col-span-1 text-center">{eq.g}</span>
            <span className="col-span-1 text-center">{eq.e}</span>
            <span className="col-span-1 text-center">{eq.p}</span>
            <span className="col-span-1 text-center">
              {eq.dg > 0 ? `+${eq.dg}` : eq.dg}
            </span>
            <span className="col-span-1 text-center font-bold">{eq.pts}</span>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Clasificación;
