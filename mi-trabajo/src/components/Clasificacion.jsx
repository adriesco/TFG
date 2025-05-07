import HeaderLigaEspaña from "./HeaderLigaEspaña";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
import HeaderLigas from "./HeaderLigas";

function Clasificación() {
  const equipos = [
    {
      posicion: 1,
      nombre: "FC Barcelona",
      escudo: "/escudos/liga/barcelona.png",
      pj: 34,
      g: 25,
      e: 4,
      p: 5,
      dg: 58,
      pts: 79,
    },
    {
      posicion: 2,
      nombre: "Real Madrid",
      escudo: "/escudos/liga/realmadrid.png",
      pj: 34,
      g: 23,
      e: 6,
      p: 5,
      dg: 36,
      pts: 75,
    },
    {
      posicion: 3,
      nombre: "Atlético de Madrid",
      escudo: "/escudos/liga/atleticomadrid.png",
      pj: 34,
      g: 19,
      e: 10,
      p: 5,
      dg: 29,
      pts: 67,
    },
    {
      posicion: 4,
      nombre: "Athletic Club",
      escudo: "/escudos/liga/athletic.png",
      pj: 34,
      g: 16,
      e: 13,
      p: 5,
      dg: 24,
      pts: 61,
    },
    {
      posicion: 5,
      nombre: "Villarreal",
      escudo: "/escudos/liga/villareal.png",
      pj: 34,
      g: 16,
      e: 10,
      p: 8,
      dg: 13,
      pts: 58,
    },
    {
      posicion: 6,
      nombre: "Real Betis",
      escudo: "/escudos/liga/betis.png",
      pj: 34,
      g: 16,
      e: 9,
      p: 9,
      dg: 10,
      pts: 57,
    },
    {
      posicion: 7,
      nombre: "Celta de Vigo",
      escudo: "/escudos/liga/celta.png",
      pj: 34,
      g: 13,
      e: 7,
      p: 14,
      dg: 0,
      pts: 46,
    },
    {
      posicion: 8,
      nombre: "Osasuna",
      escudo: "/escudos/liga/osasuna.png",
      pj: 34,
      g: 12,
      e: 9,
      p: 13,
      dg: -5,
      pts: 45,
    },
    {
      posicion: 9,
      nombre: "Real Sociedad",
      escudo: "/escudos/liga/realsociedad.png",
      pj: 34,
      g: 11,
      e: 11,
      p: 12,
      dg: -2,
      pts: 44,
    },
    {
      posicion: 10,
      nombre: "Girona",
      escudo: "/escudos/liga/girona.png",
      pj: 34,
      g: 12,
      e: 7,
      p: 15,
      dg: -7,
      pts: 43,
    },
    {
      posicion: 11,
      nombre: "Sevilla",
      escudo: "/escudos/liga/sevilla.png",
      pj: 34,
      g: 11,
      e: 8,
      p: 15,
      dg: -10,
      pts: 41,
    },
    {
      posicion: 12,
      nombre: "Getafe",
      escudo: "/escudos/liga/getafe.png",
      pj: 34,
      g: 10,
      e: 10,
      p: 14,
      dg: -12,
      pts: 40,
    },
    {
      posicion: 13,
      nombre: "Rayo Vallecano",
      escudo: "/escudos/liga/rayovallecano.png",
      pj: 34,
      g: 10,
      e: 9,
      p: 15,
      dg: -15,
      pts: 39,
    },
    {
      posicion: 14,
      nombre: "Valencia",
      escudo: "/escudos/liga/valencia.png",
      pj: 34,
      g: 9,
      e: 11,
      p: 14,
      dg: -18,
      pts: 38,
    },
    {
      posicion: 15,
      nombre: "Alavés",
      escudo: "/escudos/liga/alaves.png",
      pj: 34,
      g: 9,
      e: 10,
      p: 15,
      dg: -19,
      pts: 37,
    },
    {
      posicion: 16,
      nombre: "Las Palmas",
      escudo: "/escudos/liga/laspalmas.png",
      pj: 34,
      g: 9,
      e: 9,
      p: 16,
      dg: -21,
      pts: 36,
    },
    {
      posicion: 17,
      nombre: "Valladolid",
      escudo: "/escudos/liga/valladolid.png",
      pj: 34,
      g: 8,
      e: 8,
      p: 18,
      dg: -23,
      pts: 32,
    },
    {
      posicion: 18,
      nombre: "Mallorca",
      escudo: "/escudos/liga/mallorca.png",
      pj: 34,
      g: 7,
      e: 10,
      p: 17,
      dg: -25,
      pts: 31,
    },
    {
      posicion: 19,
      nombre: "Cádiz",
      escudo: "/escudos/liga/cadiz.png",
      pj: 34,
      g: 6,
      e: 11,
      p: 17,
      dg: -28,
      pts: 29,
    },
    {
      posicion: 20,
      nombre: "Leganes",
      escudo: "/escudos/liga/leganes.png",
      pj: 34,
      g: 4,
      e: 9,
      p: 21,
      dg: -35,
      pts: 21,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-green-500 text-white px-6 py-6">
      <HeaderLigas />
      <HeaderLigaEspaña />

      <nav className="flex gap-6 border-b border-neutral-900 pb-4 mb-6 text-sm text-gray-400 mt-7">
        <Link to="/ligaespañola" className="hover:text-green-400">
          Resultados
        </Link>
        <Link to="/calendarioliga" className="hover:text-green-400">
          Calendario
        </Link>
        <Link
          to="/clasificacion"
          className="text-white font-semibold border-b-2 border-white"
        >
          Clasificación
        </Link>
        <Link to="/fichajesliga" className="hover:text-green-400">
          Fichajes
        </Link>
      </nav>

      <div className="mb-6">
        <h2 className="text-3xl font-extrabold mb-1 tracking-wide">
          Clasificación
        </h2>
      </div>

      <div className="hidden md:flex justify-end mt-4 text-green-100 text-sm pr-2">
        <div className="flex gap-6">
          <span className="w-6 text-right">PJ</span>
          <span className="w-6 text-right">G</span>
          <span className="w-6 text-right">E</span>
          <span className="w-6 text-right">P</span>
          <span className="w-6 text-right">DG</span>
          <span className="w-6 text-right">PTS</span>
        </div>
      </div>

      <div className="space-y-4">
        {equipos.map((equipo) => (
          <div
            key={equipo.posicion}
            className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-900 py-3 px-2 hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.01] hover:bg-green-500/10 rounded-md"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 text-right text-sm">{equipo.posicion}</span>
              <img
                src={equipo.escudo}
                alt={equipo.nombre}
                className="w-6 h-6"
              />
              <span className="text-sm font-medium">{equipo.nombre}</span>
            </div>

            {/* Versión móvil: columnas apiladas */}
            <div className="grid grid-cols-3 gap-2 text-xs mt-2 md:hidden text-right ml-8">
              <span className="text-gray-300">
                PJ: <span className="text-white">{equipo.pj}</span>
              </span>
              <span className="text-gray-300">
                G: <span className="text-white">{equipo.g}</span>
              </span>
              <span className="text-gray-300">
                E: <span className="text-white">{equipo.e}</span>
              </span>
              <span className="text-gray-300">
                P: <span className="text-white">{equipo.p}</span>
              </span>
              <span className="text-gray-300">
                DG: <span className="text-white">{equipo.dg}</span>
              </span>
              <span className="text-gray-300 font-semibold">
                PTS: <span className="text-white">{equipo.pts}</span>
              </span>
            </div>
            <div className="hidden md:flex gap-6 text-sm">
              <span className="w-6 text-right">{equipo.pj}</span>
              <span className="w-6 text-right">{equipo.g}</span>
              <span className="w-6 text-right">{equipo.e}</span>
              <span className="w-6 text-right">{equipo.p}</span>
              <span className="w-6 text-right">{equipo.dg}</span>
              <span className="w-6 text-right font-bold">{equipo.pts}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm space-y-1 text-gray-300">
        <p>
          <span className="inline-block w-3 h-3 mr-2 bg-blue-900 rounded-sm"></span>{" "}
          Champions League
        </p>
        <p>
          <span className="inline-block w-3 h-3 mr-2 bg-orange-700 rounded-sm"></span>{" "}
          Europa League
        </p>
        <p>
          <span className="inline-block w-3 h-3 mr-2 bg-green-700 rounded-sm"></span>{" "}
          Conference League
        </p>
        <p>
          <span className="inline-block w-3 h-3 mr-2 bg-red-800 rounded-sm"></span>{" "}
          Descenso
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Clasificación;
