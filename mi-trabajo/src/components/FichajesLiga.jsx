import HeaderLigaEspaña from "./HeaderLigaEspaña";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function FichajesLiga() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-green-500 text-white px-6 py-6 flex flex-col">
      <HeaderLigaEspaña />

      <nav className="flex gap-6 border-b border-neutral-800 pb-4 mb-6 text-sm text-gray-400 mt-7">
        <Link to="/ligaespañola" className="hover:text-green-400">
          Resultados
        </Link>
        <Link to="/calendarioliga" className="hover:text-green-400">
          Calendario
        </Link>
        <Link to="/clasificacion" className="hover:text-green-400">
          Clasificación
        </Link>
        <Link
          to="/fichajesliga"
          className="text-white font-semibold border-b-2 border-white"
        >
          Fichajes
        </Link>
      </nav>

      <h2 className="text-2xl font-bold mb-6">Últimos fichajes</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
          <div className="flex justify-between items-center px-4 py-2 border-b border-neutral-800 text-sm text-gray-300">
            <span>FICHAJE CONFIRMADO</span>
            <span>Hoy</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img
                src="/jugadores/arnold.webp"
                alt="Alexander Arnold"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Alexander Arnold</p>
                <p className="text-sm text-gray-400">Defensor</p>
              </div>
            </div>
            <img
              src="/escudos/liga/realmadrid.png"
              alt="Real Madrid"
              className="w-10 h-10"
            />
          </div>
          <div className="px-4 text-sm text-center py-2 text-gray-300">
            Liverpol <span className="text-green-400 mx-2">→</span> Real Madrid
          </div>
          <div className="bg-neutral-800 text-center py-2 font-bold text-green-400 text-sm">
            0 €
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
          <div className="flex justify-between items-center px-4 py-2 border-b border-neutral-800 text-sm text-gray-300">
            <span>CONTRATO RENOVADO</span>
            <span>30/05/25</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img
                src="/jugadores/vinicius.png"
                alt="Arek Milik"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Vinicius Jr</p>
                <p className="text-sm text-gray-400">Delantero</p>
              </div>
            </div>
            <img
              src="/escudos/liga/realmadrid.png"
              alt="Real Madrid"
              className="w-10 h-10"
            />
          </div>
          <div className="text-center px-4 py-2 text-sm text-gray-300">
            Contrato hasta junio 2030
          </div>
          <div className="bg-neutral-800 text-center py-2 font-bold text-white text-sm">
            RENOVACIÓN
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
          <div className="flex justify-between items-center px-4 py-2 border-b border-neutral-800 text-sm text-gray-300">
            <span>FICHAJE CONFIRMADO</span>
            <span>07/08/25</span>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img
                src="/jugadores/grimaldo.webp"
                alt="Alejandro Grimaldo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Alejandro Grimaldo</p>
                <p className="text-sm text-gray-400">Defensor</p>
              </div>
            </div>
            <img
              src="/escudos/liga/barcelona.png"
              alt="Barcelona"
              className="w-10 h-10"
            />
          </div>
          <div className="px-4 text-sm text-center py-2 text-gray-300">
            Leverkusen <span className="text-green-400 mx-2">→</span> FC
            Barcelona
          </div>
          <div className="bg-neutral-800 text-center py-2 font-bold text-green-400 text-sm">
            12.000.000€
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FichajesLiga;
