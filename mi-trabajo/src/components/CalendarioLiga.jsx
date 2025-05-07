import HeaderLigaEspaña from "./HeaderLigaEspaña";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function CalendarioLiga() {
  const partidos = [
    {
      local: { nombre: "Real Madrid", escudo: "/escudos/liga/realmadrid.png" },
      visitante: { nombre: "Girona", escudo: "/escudos/liga/girona.png" },
      resultado: ["–", "–"],
      fecha: "08/05/25",
      hora: "21:00",
    },
    {
      local: { nombre: "Barcelona", escudo: "/escudos/liga/barcelona.png" },
      visitante: { nombre: "Betis", escudo: "/escudos/liga/betis.png" },
      resultado: ["–", "–"],
      fecha: "09/05/25",
      hora: "18:30",
    },
    {
      local: { nombre: "Sevilla", escudo: "/escudos/liga/sevilla.png" },
      visitante: { nombre: "Valencia", escudo: "/escudos/liga/valencia.png" },
      resultado: ["–", "–"],
      fecha: "09/05/25",
      hora: "20:45",
    },
    {
      local: { nombre: "Athletic", escudo: "/escudos/liga/athletic.png" },
      visitante: { nombre: "Celta", escudo: "/escudos/liga/celta.png" },
      resultado: ["–", "–"],
      fecha: "10/05/25",
      hora: "17:00",
    },
    {
      local: { nombre: "Atlético", escudo: "/escudos/liga/atleticomadrid.png" },
      visitante: { nombre: "Mallorca", escudo: "/escudos/liga/mallorca.png" },
      resultado: ["–", "–"],
      fecha: "10/05/25",
      hora: "21:00",
    },
    {
      local: { nombre: "Osasuna", escudo: "/escudos/liga/osasuna.png" },
      visitante: { nombre: "Getafe", escudo: "/escudos/liga/getafe.png" },
      resultado: ["–", "–"],
      fecha: "11/05/25",
      hora: "19:15",
    },
    {
      local: { nombre: "Alavés", escudo: "/escudos/liga/alaves.png" },
      visitante: {
        nombre: "RealSociedad",
        escudo: "/escudos/liga/realsociedad.png",
      },
      resultado: ["–", "–"],
      fecha: "11/05/25",
      hora: "21:00",
    },
    {
      local: { nombre: "Rayo", escudo: "/escudos/liga/rayovallecano.png" },
      visitante: { nombre: "Espanyol", escudo: "/escudos/liga/espanyol.png" },
      resultado: ["–", "–"],
      fecha: "12/05/25",
      hora: "16:00",
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
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-green-500 text-white px-6 py-6">
      <HeaderLigaEspaña />

      {/* Navegación */}
      <nav className="flex gap-6 border-b border-neutral-900 pb-4 mb-6 text-sm text-gray-400 mt-7">
        <Link
          to="/ligaespañola"
          className=" hover:text-green-400 cursor-pointer transition-colors"
        >
          Resultados
        </Link>
        <Link
          to="/calendario"
          className="text-white font-semibold border-b-2 border-white"
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
          Próximos partidos
        </h2>
        <p className="text-md text-gray-300">Jornada 35</p>
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

            {/* Resultado futuro */}
            <div className="flex flex-col items-center font-bold text-xl text-gray-400">
              <span>{partido.resultado[0]}</span>
              <span>{partido.resultado[1]}</span>
            </div>

            {/* Fecha y hora */}
            <div className="text-right text-sm text-gray-400">
              <p>{partido.fecha}</p>
              <p>{partido.hora}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CalendarioLiga;
