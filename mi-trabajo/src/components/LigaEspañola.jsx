import HeaderLigaEspaña from "./HeaderLigaEspaña";
import HeaderMainHome from "./HeaderMainHome";

function LigaEspañola() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      <HeaderLigaEspaña />

      {/* Navegación */}
      <nav className="flex gap-6 border-b border-neutral-700 pb-4 mb-6 text-sm text-gray-400 mt-7">
        <span className="text-gray-400 font-semibold border-b-2 border-white">
          Partidos
        </span>
        <span className="hover:text-green-400 cursor-pointer">Noticias</span>
        <span className="hover:text-green-400 cursor-pointer">Resultados</span>
        <span className="hover:text-green-400 cursor-pointer">
          Clasificación
        </span>
        <span className="hover:text-green-400 cursor-pointer">Fichajes</span>
      </nav>

      {/* Título de jornada */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Calendario de la temporada</h2>
        <p className="text-md text-gray-400">Jornada 34</p>
      </div>

      {/* Tarjetas de partidos */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-[#2C2C2C] rounded-lg p-4 flex justify-between items-center shadow-md border border-gray-700"
          >
            {/* Equipos */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="/logos/betis.png" alt="Betis" className="w-6 h-6" />
                <span className="text-sm text-white">Real Betis</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/logos/valladolid.png"
                  alt="Valladolid"
                  className="w-6 h-6"
                />
                <span className="text-sm text-white">Valladolid</span>
              </div>
            </div>

            {/* Resultado */}
            <div className="flex flex-col items-center gap-2 font-bold text-lg text-white">
              <span>5</span>
              <span>1</span>
            </div>

            {/* Fecha y estado */}
            <div className="text-right text-sm text-gray-400">
              <p>24/04/25</p>
              <p className="text-xs">Fin del partido</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LigaEspañola;
