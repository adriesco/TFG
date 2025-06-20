import HeaderLigaEspaña from "./SubHeaderLiga";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HeaderLigas from "./HeaderLiga";

function Clasificación() {
  const [equipos, setEquipos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos desde una API
    const fetchData = async () => {
      try {
        // En una aplicación real, aquí harías una llamada a tu API
        // const response = await fetch('api/clasificacion');
        // const data = await response.json();

        // Simulamos un retraso de red
        await new Promise((resolve) => setTimeout(resolve, 800));

        const data = [
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
            competicion: "champions",
            ultimos5: ["w", "w", "d", "w", "l"],
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
            competicion: "champions",
            ultimos5: ["w", "d", "w", "w", "w"],
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
            competicion: "champions",
            ultimos5: ["w", "l", "w", "d", "w"],
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
            competicion: "champions",
            ultimos5: ["d", "w", "d", "w", "d"],
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
            competicion: "europa",
            ultimos5: ["w", "l", "w", "l", "w"],
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
            competicion: "europa",
            ultimos5: ["d", "w", "d", "l", "w"],
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
            competicion: "conference",
            ultimos5: ["w", "l", "w", "l", "d"],
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
            competicion: null,
            ultimos5: ["l", "w", "d", "l", "w"],
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
            competicion: null,
            ultimos5: ["d", "l", "d", "w", "l"],
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
            competicion: null,
            ultimos5: ["l", "w", "l", "d", "l"],
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
            competicion: null,
            ultimos5: ["w", "l", "d", "w", "l"],
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
            competicion: null,
            ultimos5: ["d", "d", "l", "w", "d"],
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
            competicion: null,
            ultimos5: ["l", "d", "w", "l", "d"],
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
            competicion: null,
            ultimos5: ["d", "l", "w", "l", "d"],
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
            competicion: null,
            ultimos5: ["w", "l", "d", "l", "w"],
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
            competicion: null,
            ultimos5: ["l", "w", "l", "d", "l"],
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
            competicion: null,
            ultimos5: ["l", "d", "l", "w", "l"],
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
            competicion: "descenso",
            ultimos5: ["d", "l", "d", "l", "d"],
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
            competicion: "descenso",
            ultimos5: ["l", "d", "l", "d", "l"],
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
            competicion: "descenso",
            ultimos5: ["l", "l", "d", "l", "l"],
          },
        ];

        setEquipos(data);
        setIsLoading(false);
      } catch (err) {
        setError("Error al cargar los datos de clasificación");
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const getRowColor = (posicion, competicion) => {
    if (posicion <= 4) return "bg-blue-900/20 border-l-4 border-blue-500";
    if (posicion === 5 || posicion === 6)
      return "bg-orange-700/20 border-l-4 border-orange-500";
    if (posicion === 7) return "bg-green-700/20 border-l-4 border-green-500";
    if (posicion >= 18) return "bg-red-800/20 border-l-4 border-red-500";
    return "";
  };

  const renderUltimos5 = (resultados) => {
    return (
      <div className="flex gap-1">
        {resultados.map((resultado, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-sm ${
              resultado === "w"
                ? "bg-green-500"
                : resultado === "d"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            title={
              resultado === "w"
                ? "Victoria"
                : resultado === "d"
                ? "Empate"
                : "Derrota"
            }
          />
        ))}
      </div>
    );
  };

  const formatDate = () => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("es-ES", options);
  };
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-black to-green-500 text-white px-4 py-6 md:px-8 flex flex-col">
        <HeaderLigas />
        <HeaderLigaEspaña />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-4 bg-red-900/30 rounded-lg">
            <p className="text-red-300">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition"
            >
              Reintentar
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white px-4 py-6 md:px-8 flex flex-col">
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

      <div className="mb-6">
        <h2 className="text-3xl font-extrabold mb-1 tracking-wide">
          Clasificación LaLiga EA
        </h2>
        <p className="text-sm text-gray-400">
          Temporada 2024/2025 - Actualizado el {formatDate()}
        </p>
      </div>

      <div className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg mb-8">
        {/* Cabecera de la tabla */}
        <div className="hidden md:grid grid-cols-12 gap-2 p-4 bg-gray-800/80 text-sm font-medium text-gray-300">
          <div className="col-span-5 flex items-center">
            <span className="w-8 text-center">#</span>
            <span>Equipo</span>
          </div>
          <div className="col-span-7 grid grid-cols-8 gap-2 text-right">
            <span className="col-span-1">PJ</span>
            <span className="col-span-1">G</span>
            <span className="col-span-1">E</span>
            <span className="col-span-1">P</span>
            <span className="col-span-1">DG</span>
            <span className="col-span-2">Últ. 5</span>
            <span className="col-span-1 font-bold">PTS</span>
          </div>
        </div>

        {/* Lista de equipos */}
        <div className="divide-y divide-gray-800">
          {equipos.map((equipo) => (
            <div
              key={equipo.posicion}
              className={`p-3 md:p-4 hover:bg-green-900/20 transition-all duration-200 ${getRowColor(
                equipo.posicion,
                equipo.competicion
              )}`}
            >
              <div className="md:hidden flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 text-center font-medium ${
                      equipo.posicion <= 4
                        ? "text-blue-400"
                        : equipo.posicion === 5 || equipo.posicion === 6
                        ? "text-orange-400"
                        : equipo.posicion === 7
                        ? "text-green-400"
                        : equipo.posicion >= 18
                        ? "text-red-400"
                        : ""
                    }`}
                  >
                    {equipo.posicion}
                  </span>
                  <img
                    src={equipo.escudo}
                    alt={equipo.nombre}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                  <span className="font-medium">{equipo.nombre}</span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{equipo.pts}</div>
                  <div className="text-xs text-gray-400">PTS</div>
                </div>
              </div>

              <div className="hidden md:grid grid-cols-12 gap-2 items-center">
                <div className="col-span-5 flex items-center">
                  <span
                    className={`w-8 text-center font-medium ${
                      equipo.posicion <= 4
                        ? "text-blue-400"
                        : equipo.posicion === 5 || equipo.posicion === 6
                        ? "text-orange-400"
                        : equipo.posicion === 7
                        ? "text-green-400"
                        : equipo.posicion >= 18
                        ? "text-red-400"
                        : ""
                    }`}
                  >
                    {equipo.posicion}
                  </span>
                  <img
                    src={equipo.escudo}
                    alt={equipo.nombre}
                    className="w-8 h-8 object-contain mx-3"
                    loading="lazy"
                  />
                  <span className="font-medium truncate">{equipo.nombre}</span>
                </div>
                <div className="col-span-7 grid grid-cols-8 gap-2 text-right items-center">
                  <span className="col-span-1">{equipo.pj}</span>
                  <span className="col-span-1">{equipo.g}</span>
                  <span className="col-span-1">{equipo.e}</span>
                  <span className="col-span-1">{equipo.p}</span>
                  <span className="col-span-1">
                    {equipo.dg > 0 ? `+${equipo.dg}` : equipo.dg}
                  </span>
                  <div className="col-span-2 flex justify-end">
                    {renderUltimos5(equipo.ultimos5)}
                  </div>
                  <span className="col-span-1 font-bold">{equipo.pts}</span>
                </div>
              </div>

              {/* Detalles móvil */}
              <div className="md:hidden mt-3 grid grid-cols-5 gap-2 text-xs text-center bg-gray-800/50 p-2 rounded">
                <div>
                  <div className="text-gray-400">PJ</div>
                  <div>{equipo.pj}</div>
                </div>
                <div>
                  <div className="text-gray-400">G</div>
                  <div>{equipo.g}</div>
                </div>
                <div>
                  <div className="text-gray-400">E</div>
                  <div>{equipo.e}</div>
                </div>
                <div>
                  <div className="text-gray-400">P</div>
                  <div>{equipo.p}</div>
                </div>
                <div>
                  <div className="text-gray-400">DG</div>
                  <div>{equipo.dg > 0 ? `+${equipo.dg}` : equipo.dg}</div>
                </div>
                <div className="col-span-5 mt-2">
                  <div className="text-gray-400 mb-1">Últimos 5 partidos</div>
                  <div className="flex justify-center gap-1">
                    {renderUltimos5(equipo.ultimos5)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competiciones y leyenda */}
      <div className="mt-8 text-sm space-y-2 text-gray-300">
        <h3 className="text-white font-medium mb-2">Leyenda:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-sm"></span>
              <span className="font-medium">UEFA Champions League</span>
            </div>
            <p className="text-xs text-gray-400 pl-5">Puestos 1º a 4º</p>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <span className="inline-block w-3 h-3 mr-2 bg-orange-500 rounded-sm"></span>
              <span className="font-medium">UEFA Europa League</span>
            </div>
            <p className="text-xs text-gray-400 pl-5">Puestos 5º y 6º</p>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <span className="inline-block w-3 h-3 mr-2 bg-green-500 rounded-sm"></span>
              <span className="font-medium">UEFA Conference League</span>
            </div>
            <p className="text-xs text-gray-400 pl-5">Puesto 7º</p>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <span className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-sm"></span>
              <span className="font-medium">Descenso a Segunda</span>
            </div>
            <p className="text-xs text-gray-400 pl-5">Puestos 18º a 20º</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Clasificación;
