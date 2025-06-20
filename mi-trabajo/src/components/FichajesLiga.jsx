import HeaderLigaEspaña from "./SubHeaderLiga";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
import HeaderLigas from "./HeaderLiga";

function FichajesLiga() {
  const fichajes = [
    {
      nombre: "Alexander Arnold",
      posicion: "Defensor",
      tipo: "FICHAJE CONFIRMADO",
      fecha: "Hoy",
      equipoOrigen: "Liverpool",
      equipoDestino: "Real Madrid",
      escudoDestino: "/escudos/liga/realmadrid.png",
      imagenJugador: "/jugadores/arnold.webp",
      coste: "0 €",
    },
    {
      nombre: "Vinicius Jr",
      posicion: "Delantero",
      tipo: "CONTRATO RENOVADO",
      fecha: "30/05/25",
      equipoDestino: "Real Madrid",
      escudoDestino: "/escudos/liga/realmadrid.png",
      imagenJugador: "/jugadores/vinicius.png",
      detalle: "Contrato hasta junio 2030",
    },
    {
      nombre: "Alejandro Grimaldo",
      posicion: "Defensor",
      tipo: "FICHAJE CONFIRMADO",
      fecha: "07/08/25",
      equipoOrigen: "Leverkusen",
      equipoDestino: "FC Barcelona",
      escudoDestino: "/escudos/liga/barcelona.png",
      imagenJugador: "/jugadores/grimaldo.webp",
      coste: "12.000.000 €",
    },
  ];

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
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 pb-2 px-1"
        >
          Clasificación
        </Link>
        <Link
          to="/fichajesliga"
          className="text-white font-bold border-b-2 border-green-500 pb-2 px-1"
        >
          Fichajes
        </Link>
      </nav>

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">
          Últimos fichajes
        </h2>
        <p className="text-md text-gray-300">
          Mercado de verano - Temporada 2025
        </p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
        {fichajes.map((fichaje, i) => (
          <div
            key={i}
            className={`relative rounded-xl p-5 flex flex-col gap-4 shadow-lg transition-all duration-300 hover:shadow-green-500/30 hover:-translate-y-1 border
              ${
                fichaje.tipo === "FICHAJE CONFIRMADO"
                  ? "border-yellow-400 bg-gradient-to-br from-gray-800 to-gray-900"
                  : "border-blue-400 bg-gradient-to-br from-gray-800 to-gray-900"
              }`}
          >
            <span
              className={`absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full
                ${
                  fichaje.tipo === "FICHAJE CONFIRMADO"
                    ? "bg-yellow-500 text-black"
                    : "bg-blue-500 text-white"
                }`}
            >
              {fichaje.tipo}
            </span>

            <div className="flex justify-between text-sm text-gray-400 font-medium">
              <span>{fichaje.tipo}</span>
              <span>{fichaje.fecha}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 w-2/3">
                <img
                  src={fichaje.imagenJugador}
                  alt={fichaje.nombre}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-base truncate">
                    {fichaje.nombre}
                  </p>
                  <p className="text-sm text-gray-400">{fichaje.posicion}</p>
                </div>
              </div>
              <img
                src={fichaje.escudoDestino}
                alt={fichaje.equipoDestino}
                className="w-10 h-10"
              />
            </div>

            {fichaje.tipo === "FICHAJE CONFIRMADO" ? (
              <>
                <div className="text-sm text-gray-300 text-center">
                  {fichaje.equipoOrigen}{" "}
                  <span className="text-green-400 mx-2">→</span>{" "}
                  {fichaje.equipoDestino}
                </div>
                <div className="bg-gray-800 text-center py-2 font-bold text-green-400 text-sm rounded-md">
                  {fichaje.coste}
                </div>
              </>
            ) : (
              <>
                <div className="text-sm text-gray-300 text-center">
                  {fichaje.detalle}
                </div>
                <div className="bg-gray-800 text-center py-2 font-bold text-white text-sm rounded-md">
                  RENOVACIÓN
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default FichajesLiga;
