import HeaderLigaEspaña from "./SubHeaderLiga";
import Footer from "./Footer";
import React from "react";
import HeaderMainHome from "./HeaderMainHome";
import { Link } from "react-router-dom";
import HeaderLigas from "./HeaderLiga";
function CalendarioLiga() {
  const partidos = [
    {
      local: { nombre: "Real Madrid", escudo: "/escudos/liga/realmadrid.png" },
      visitante: { nombre: "Girona", escudo: "/escudos/liga/girona.png" },
      resultado: ["–", "–"],
      fecha: "08/05/25",
      hora: "21:00",
      jornada: 35,
      destacado: true,
      tv: "DAZN",
    },
    {
      local: { nombre: "Barcelona", escudo: "/escudos/liga/barcelona.png" },
      visitante: { nombre: "Betis", escudo: "/escudos/liga/betis.png" },
      resultado: ["–", "–"],
      fecha: "09/05/25",
      hora: "18:30",
      jornada: 35,
      tv: "Movistar+",
    },
    {
      local: { nombre: "Sevilla", escudo: "/escudos/liga/sevilla.png" },
      visitante: { nombre: "Valencia", escudo: "/escudos/liga/valencia.png" },
      resultado: ["–", "–"],
      fecha: "09/05/25",
      hora: "20:45",
      jornada: 35,
      tv: "DAZN",
    },
    {
      local: { nombre: "Athletic", escudo: "/escudos/liga/athletic.png" },
      visitante: { nombre: "Celta", escudo: "/escudos/liga/celta.png" },
      resultado: ["–", "–"],
      fecha: "10/05/25",
      hora: "17:00",
      jornada: 35,
      tv: "Movistar+",
    },
    {
      local: { nombre: "Atlético", escudo: "/escudos/liga/atleticomadrid.png" },
      visitante: { nombre: "Mallorca", escudo: "/escudos/liga/mallorca.png" },
      resultado: ["–", "–"],
      fecha: "10/05/25",
      hora: "21:00",
      jornada: 35,
      tv: "DAZN",
    },
    {
      local: { nombre: "Osasuna", escudo: "/escudos/liga/osasuna.png" },
      visitante: { nombre: "Getafe", escudo: "/escudos/liga/getafe.png" },
      resultado: ["–", "–"],
      fecha: "11/05/25",
      hora: "19:15",
      jornada: 35,
      tv: "Movistar+",
    },
    {
      local: { nombre: "Alavés", escudo: "/escudos/liga/alaves.png" },
      visitante: {
        nombre: "Real Sociedad",
        escudo: "/escudos/liga/realsociedad.png",
      },
      resultado: ["–", "–"],
      fecha: "11/05/25",
      hora: "21:00",
      jornada: 35,
      tv: "DAZN",
      derbi: true,
    },
    {
      local: { nombre: "Rayo", escudo: "/escudos/liga/rayovallecano.png" },
      visitante: { nombre: "Espanyol", escudo: "/escudos/liga/espanyol.png" },
      resultado: ["–", "–"],
      fecha: "12/05/25",
      hora: "16:00",
      jornada: 35,
      tv: "Movistar+",
    },
    {
      local: { nombre: "Leganés", escudo: "/escudos/liga/leganes.png" },
      visitante: {
        nombre: "Villarreal",
        escudo: "/escudos/liga/villareal.png",
      },
      resultado: ["–", "–"],
      fecha: "12/05/25",
      hora: "18:30",
      jornada: 35,
      tv: "DAZN",
    },
    {
      local: { nombre: "Cádiz", escudo: "/escudos/liga/cadiz.png" },
      visitante: {
        nombre: "Valladolid",
        escudo: "/escudos/liga/valladolid.png",
      },
      resultado: ["–", "–"],
      fecha: "12/05/25",
      hora: "21:00",
      jornada: 35,
      tv: "Movistar+",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white px-4 sm:px-6 py-6">
      <HeaderLigas />
      <HeaderLigaEspaña />

      {/* Navegación */}
      <nav className="flex gap-4 sm:gap-6 border-b border-gray-700 pb-4 mb-6 text-sm sm:text-base mt-7">
        <Link
          to="/ligaespañola"
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 pb-2 px-1"
        >
          Resultados
        </Link>
        <Link
          to="/calendarioliga"
          className=" text-white font-bold border-b-2 border-green-500 pb-2 px-1"
        >
          Calendario
        </Link>
        <Link
          to="/clasificacion"
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 pb-2 px-1"
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

      {/* Encabezado */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">
              Próximos partidos
            </h2>
            <p className="text-md text-gray-300">
              Jornada 35 - Temporada 2024/25
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Ver calendario completo
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Mis recordatorios
            </button>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          Todos
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors">
          Destacados
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors">
          Derbis
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors">
          Por TV
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors">
          Jornada 35
        </button>
      </div>

      {/* Tarjetas */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
        {partidos.map((partido, i) => (
          <div
            key={i}
            className={`relative rounded-xl p-5 flex flex-col gap-4 shadow-lg transition-all duration-300 hover:shadow-green-500/30 hover:-translate-y-1 border 
              ${
                partido.destacado
                  ? "border-yellow-400 bg-gradient-to-br from-gray-800 to-gray-900"
                  : partido.derbi
                  ? "border-red-400 bg-gradient-to-br from-gray-800 to-gray-900"
                  : "border-gray-700 bg-gray-800"
              }`}
          >
            {partido.destacado && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                DESTACADO
              </span>
            )}
            {partido.derbi && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                DERBI
              </span>
            )}

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400 font-medium">
                Jornada {partido.jornada}
              </div>
              <div className="text-xs bg-gray-700 text-green-400 px-2 py-1 rounded-full">
                {partido.tv}
              </div>
            </div>

            <div className="flex justify-between items-center">
              {/* Equipo local */}
              <div className="flex items-center gap-3 w-2/5">
                <img
                  src={partido.local.escudo}
                  alt={partido.local.nombre}
                  className="w-10 h-10 object-contain"
                />
                <span className="font-medium truncate">
                  {partido.local.nombre}
                </span>
              </div>

              {/* Resultado */}
              <div className="flex flex-col items-center px-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-400">–</span>
                  <span className="text-gray-400">-</span>
                  <span className="text-2xl font-bold text-gray-400">–</span>
                </div>
                <div className="mt-1 text-xs bg-gray-700 text-white px-2 py-0.5 rounded-full">
                  {partido.hora}
                </div>
              </div>

              {/* Equipo visitante */}
              <div className="flex items-center gap-3 justify-end w-2/5">
                <span className="font-medium truncate text-right">
                  {partido.visitante.nombre}
                </span>
                <img
                  src={partido.visitante.escudo}
                  alt={partido.visitante.nombre}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-700">
              <span className="text-xs text-gray-400">{partido.fecha}</span>
              <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full transition-colors">
                + Recordatorio
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default CalendarioLiga;
