import { useState, useEffect } from "react";
import HeaderLigas from "./HeaderLiga";
import HeaderLigasEspana from "./SubHeaderLiga";
import Footer from "./Footer";

function LigaEspañola() {
  const [partidos, setPartidos] = useState([]);
  const [jornada, setJornada] = useState(34);
  const [selectedPartido, setSelectedPartido] = useState(null);

  useEffect(() => {
    const partidosEjemplo = [
      {
        id: 1,
        local_nombre: "Real Madrid",
        visitante_nombre: "Barcelona",
        local_escudo: "/escudos/liga/realmadrid.png",
        visitante_escudo: "/escudos/liga/barcelona.png",
        goles_local: 2,
        goles_visitante: 1,
        fecha: "2025-05-14",
        jornada: 34,
        destacado: true,
        goles: [
          { jugador: "Vinicius Jr.", minuto: 34, equipo: "Real Madrid" },
          { jugador: "Benzema", minuto: 50, equipo: "Real Madrid" },
          { jugador: "Lewandowski", minuto: 56, equipo: "Barcelona" },
        ],
      },
      {
        id: 2,
        local_nombre: "Sevilla",
        visitante_nombre: "Betis",
        local_escudo: "/escudos/liga/sevilla.png",
        visitante_escudo: "/escudos/liga/betis.png",
        goles_local: 1,
        goles_visitante: 1,
        fecha: "2025-05-14",
        jornada: 34,
        derbi: true,
        goles: [
          { jugador: "En-Nesyri", minuto: 12, equipo: "Sevilla" },
          { jugador: "Guardado", minuto: 78, equipo: "Betis" },
        ],
      },
      {
        id: 3,
        local_nombre: "Atlético",
        visitante_nombre: "Valencia",
        local_escudo: "/escudos/liga/atleticomadrid.png",
        visitante_escudo: "/escudos/liga/valencia.png",
        goles_local: 3,
        goles_visitante: 0,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [
          { jugador: "Joao Félix", minuto: 22, equipo: "Atlético" },
          { jugador: "Griezmann", minuto: 55, equipo: "Atlético" },
          { jugador: "Correa", minuto: 80, equipo: "Atlético" },
        ],
      },
      {
        id: 4,
        local_nombre: "Villarreal",
        visitante_nombre: "Athletic",
        local_escudo: "/escudos/liga/villareal.png",
        visitante_escudo: "/escudos/liga/athletic.png",
        goles_local: 2,
        goles_visitante: 2,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [
          { jugador: "Pino", minuto: 10, equipo: "Villarreal" },
          { jugador: "Moi Gómez", minuto: 65, equipo: "Villarreal" },
          { jugador: "Raúl García", minuto: 20, equipo: "Athletic" },
          { jugador: "Vesga", minuto: 75, equipo: "Athletic" },
        ],
      },
      {
        id: 5,
        local_nombre: "Celta",
        visitante_nombre: "Alavés",
        local_escudo: "/escudos/liga/celta.png",
        visitante_escudo: "/escudos/liga/alaves.png",
        goles_local: 0,
        goles_visitante: 1,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [{ jugador: "Joselu", minuto: 44, equipo: "Alavés" }],
      },
      {
        id: 6,
        local_nombre: "Real Sociedad",
        visitante_nombre: "Osasuna",
        local_escudo: "/escudos/liga/realsociedad.png",
        visitante_escudo: "/escudos/liga/osasuna.png",
        goles_local: 1,
        goles_visitante: 3,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [
          { jugador: "Merino", minuto: 12, equipo: "Real Sociedad" },
          { jugador: "Toko Ekambi", minuto: 22, equipo: "Osasuna" },
          { jugador: "Oier", minuto: 60, equipo: "Osasuna" },
          { jugador: "Kike", minuto: 78, equipo: "Osasuna" },
        ],
      },
      {
        id: 7,
        local_nombre: "Getafe",
        visitante_nombre: "Rayo Vallecano",
        local_escudo: "/escudos/liga/getafe.png",
        visitante_escudo: "/escudos/liga/rayovallecano.png",
        goles_local: 2,
        goles_visitante: 0,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [
          { jugador: "Beauvue", minuto: 10, equipo: "Getafe" },
          { jugador: "Mata", minuto: 55, equipo: "Getafe" },
        ],
      },
      {
        id: 8,
        local_nombre: "Mallorca",
        visitante_nombre: "Elche",
        local_escudo: "/escudos/liga/mallorca.png",
        visitante_escudo: "/escudos/liga/elche.png",
        goles_local: 0,
        goles_visitante: 0,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [],
      },
      {
        id: 9,
        local_nombre: "Oviedo",
        visitante_nombre: "Levante",
        local_escudo: "/escudos/liga/oviedo.png",
        visitante_escudo: "/escudos/liga/levante.png",
        goles_local: 1,
        goles_visitante: 2,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [
          { jugador: "Dela", minuto: 15, equipo: "Levante" },
          { jugador: "Santi Cazorla", minuto: 55, equipo: "Oviedo" },
          { jugador: "Santi Cazorla", minuto: 80, equipo: "Oviedo" },
        ],
      },
      {
        id: 10,
        local_nombre: "Girona",
        visitante_nombre: "Espanyol",
        local_escudo: "/escudos/liga/girona.png",
        visitante_escudo: "/escudos/liga/espanyol.png",
        goles_local: 3,
        goles_visitante: 2,
        fecha: "2025-05-14",
        jornada: 34,
        goles: [
          { jugador: "Stuani", minuto: 10, equipo: "Girona" },
          { jugador: "Aday", minuto: 30, equipo: "Girona" },
          { jugador: "Cristhian", minuto: 60, equipo: "Girona" },
          { jugador: "Darder", minuto: 40, equipo: "Espanyol" },
          { jugador: "Wu Lei", minuto: 85, equipo: "Espanyol" },
        ],
      },
    ];

    setPartidos(partidosEjemplo);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white px-4 sm:px-6 py-6">
      <HeaderLigas />
      <HeaderLigasEspana />

      <nav className="flex gap-4 sm:gap-6 border-b border-gray-700 pb-4 mb-6 text-sm sm:text-base mt-7">
        <span className="text-white font-bold border-b-2 border-green-500 pb-2 px-1">
          Resultados
        </span>
        <a
          href="CalendarioLiga"
          className="text-gray-300 hover:text-green-400 pb-2 px-1"
        >
          Calendario
        </a>
        <a
          href="Clasificacion"
          className="text-gray-300 hover:text-green-400 pb-2 px-1"
        >
          Clasificación
        </a>
        <a
          href="fichajesliga"
          className="text-gray-300 hover:text-green-400 pb-2 px-1"
        >
          Fichajes
        </a>
      </nav>

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">
          Resultados recientes - Ultima Jornada
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
        {partidos.map((partido) => (
          <div
            key={partido.id}
            className={`relative rounded-xl p-5 flex flex-col gap-4 shadow-lg transition-all duration-300 hover:shadow-green-500/30 hover:-translate-y-1 border 
              ${
                partido.destacado
                  ? "border-yellow-400 bg-gradient-to-br from-gray-800 to-gray-900"
                  : partido.derbi
                  ? "border-red-400 bg-gradient-to-br from-gray-800 to-gray-900"
                  : "border-gray-700 bg-gray-800"
              }`}
            onClick={() => setSelectedPartido(partido)}
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

            <div className="text-xs text-gray-400 font-medium">
              Jornada {17} • {new Date(partido.fecha).toLocaleDateString()}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 w-2/5">
                <img
                  src={partido.local_escudo}
                  alt={partido.local_nombre}
                  className="w-10 h-10 object-contain"
                />
                <span className="font-medium truncate">
                  {partido.local_nombre}
                </span>
              </div>

              <div className="flex items-center gap-4 px-4">
                <span
                  className={`text-2xl font-bold ${
                    partido.goles_local > partido.goles_visitante
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {partido.goles_local}
                </span>
                <span className="text-gray-400">-</span>
                <span
                  className={`text-2xl font-bold ${
                    partido.goles_visitante > partido.goles_local
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {partido.goles_visitante}
                </span>
              </div>

              <div className="flex items-center gap-3 justify-end w-2/5">
                <span className="font-medium truncate text-right">
                  {partido.visitante_nombre}
                </span>
                <img
                  src={partido.visitante_escudo}
                  alt={partido.visitante_nombre}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-700">
              <span className="text-xs text-gray-400">
                Estadio: {partido.local_nombre}
              </span>
              <span className="text-xs bg-gray-700 text-green-400 px-2 py-1 rounded-full">
                Finalizado
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de goleadores */}
      {selectedPartido && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 w-11/12 sm:w-96">
            <h3 className="text-xl font-bold mb-4 text-green-400">
              {selectedPartido.local_nombre} vs{" "}
              {selectedPartido.visitante_nombre}
            </h3>
            {selectedPartido.goles.length > 0 ? (
              <ul className="space-y-2">
                {selectedPartido.goles.map((gol, i) => (
                  <li key={i} className="text-gray-200">
                    ⚽ {gol.jugador} - {gol.minuto}' ({gol.equipo})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No hay goles</p>
            )}
            <button
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              onClick={() => setSelectedPartido(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default LigaEspañola;
