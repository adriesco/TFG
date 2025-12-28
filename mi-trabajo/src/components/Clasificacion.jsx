import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderLigas from "./HeaderLiga";
import HeaderLigaEspaña from "./SubHeaderLiga";
import Footer from "./Footer";

function Clasificación() {
  const [equipos, setEquipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Traer datos de la API
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

  // Determinar color de fila según posición
  const getColorFila = (pos) => {
    if (pos <= 4) return "bg-blue-900/20 border-l-4 border-blue-500";
    if (pos === 5 || pos === 6)
      return "bg-orange-700/20 border-l-4 border-orange-500";
    if (pos === 7) return "bg-green-700/20 border-l-4 border-green-500";
    if (pos >= 18) return "bg-red-800/20 border-l-4 border-red-500";
    return "";
  };

  // Formatear fecha actual
  const fechaActual = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (loading)
    return (
      <p className="text-white text-center mt-10">Cargando clasificación...</p>
    );
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white px-4 sm:px-6 py-6">
      <HeaderLigas />
      <HeaderLigaEspaña />

      <nav className="flex gap-4 sm:gap-6 border-b border-gray-700 pb-4 mb-6 text-sm sm:text-base mt-7">
        <Link
          to="/ligaespañola"
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 pb-2 px-1"
        >
          Resultados
        </Link>
        <Link
          to="/calendarioliga"
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 pb-2 px-1"
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
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 pb-2 px-1"
        >
          Fichajes
        </Link>
      </nav>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">
        Clasificación LaLiga EA
      </h2>
      <p className="text-sm text-gray-400 mb-4">
        Temporada 2024/2025 - Actualizado el {fechaActual}
      </p>

      <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-12 gap-2 p-2 font-medium text-gray-300">
          <span className="col-span-1 text-center">#</span>
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
            className={`grid grid-cols-12 gap-2 p-2 items-center ${getColorFila(
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
