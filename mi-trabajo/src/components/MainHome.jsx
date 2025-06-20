import { Link } from "react-router-dom";
import Header from "../components/HeaderMainHome";
import Footer from "../components/Footer";

function MainHome() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-green-500">
      <Header />

      <main className="p-6 space-y-10">
        <section className="bg-gradient-to-tr from-black to-green-500 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-6 text-green-100 flex items-center gap-2">
            🗞️ Últimas Noticias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.marca.com/futbol/barcelona/2025/04/18/messi-habla-salida-psg-mi-intencion-volver-barcelona-pudo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-green-200 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-[1.02] overflow-hidden px-5"
            >
              <img
                src="/noticias/messinoti.jpg"
                alt="Messi vuelve al Barcelona"
                className="w-32 h-32 object-cover mt-2"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-green-500 text-green-950 px-2 py-1 rounded-full mb-2 inline-block">
                    FICHAJE
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Messi vuelve al Barcelona en 2026
                  </h3>
                </div>
                <p className="text-sm text-gray-800 mt-1">
                  Marca - 10 Abr 2025
                </p>
              </div>
            </a>
            <a
              href="https://www.marca.com/futbol/real-madrid/2024/06/03/64c7ab27e2704e5f138b458d.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-green-200 rounded-lg shadow-md hover:shadow-lg transition px-5 transform hover:scale-[1.02] overflow-hidden"
            >
              <img
                src="/noticias/mbappenoti.jpg"
                alt="Mbappé ficha por el Real Madrid"
                className="w-32 h-32 object-cover mt-2"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-blue-400 text-blue-950 px-2 py-1 rounded-full mb-2 inline-block">
                    REAL MADRID
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mbappé ficha por el Real Madrid
                  </h3>
                </div>
                <p className="text-sm text-gray-800 mt-1">AS - 9 Ago 2024</p>
              </div>
            </a>
            <a
              href="https://www.sport.es/es/noticias/futbol-internacional/nuevas-reglas-fifa-cambiar-futbol-114677958"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-green-200 rounded-lg shadow-md hover:shadow-lg transition transform px-5 hover:scale-[1.02] overflow-hidden"
            >
              <img
                src="/noticias/normasnoti.jpg"
                alt="Nuevas reglas de la FIFA"
                className="w-32 h-32 mt-2 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-yellow-500 text-yellow-950 px-2 py-1 rounded-full mb-2">
                    REGLAMENTO
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Nuevas reglas de la FIFA para 2026
                  </h3>
                </div>
                <p className="text-sm text-gray-800 mt-1">SPORT - 8 Abr 2025</p>
              </div>
            </a>
          </div>
        </section>

        {/* Ligas por país */}
        <section className="bg-gradient-to-tr from-black to-green-500 rounded-lg shadow-lg p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-4 text-green-100">
            🌍 Ligas por País
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <Link to="/ligaespañola">
              <div className="flex flex-col items-center bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer hover:scale-[1.02]">
                <img
                  src="/logos/laliga.png"
                  alt="LaLiga"
                  className="w-20 h-20 object-contain mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800">LaLiga</h3>
                <p className="text-sm text-gray-800">España</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Jugadores destacados o estadísticas */}
        <section className="bg-gradient-to-tr from-black to-green-500 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-6 text-green-100">
            📊 Jugadores Destacados de La Liga EA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/jugadores/vinicius.png"
                alt="Vinicius Jr."
                className="w-24 h-24 object-contain mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Vinicius Jr.
              </h3>
              <p className="text-sm text-gray-800">23 goles</p>
            </div>

            <div className="flex flex-col items-center bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/jugadores/jude.png"
                alt="Bellingham"
                className="w-24 h-24 object-contain mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Jude Bellingham
              </h3>
              <p className="text-sm text-gray-800">15 asistencias</p>
            </div>

            <div className="flex flex-col items-center bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/jugadores/lamine.png"
                alt="Lamine Yamal"
                className="w-24 h-24 object-contain mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Lamine Yamal
              </h3>
              <p className="text-sm text-gray-800">17 años</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-tr from-black to-green-500 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-6 text-green-100">
            🗓️ Próximos Partidos Importantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-200 p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/liga/realmadrid.png"
                  alt="Real Madrid"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/liga/barcelona.png"
                  alt="Barcelona"
                  className="w-10 h-9"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Real Madrid vs Barcelona
              </h3>
              <span className="text-sm text-gray-600 bg-green-500 px-3 py-1 rounded-full">
                Domingo, 14 Mayo – 21:00
              </span>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/liga/realsociedad.png"
                  alt="Real Sociedad"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/liga/athletic.png"
                  alt="Athletic Club"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Real Sociedad vs Athletic Club
              </h3>
              <span className="text-sm text-gray-600 bg-green-500 px-3 py-1 rounded-full">
                Miercoles, 17 Mayo – 18:30
              </span>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/liga/leganes.png"
                  alt="Leganes"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/liga/getafe.png"
                  alt="Getafe"
                  className="w-10 h-8"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Leganes vs Getafe
              </h3>
              <span className="text-sm text-gray-600 bg-green-500 px-3 py-1 rounded-full">
                Jueves, 18 Mayo – 15:00
              </span>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/liga/rayovallecano.png"
                  alt="Rayo Vallecano"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/liga/atleticomadrid.png"
                  alt="Marsella"
                  className="w-15 h-10"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Rayo Vallecano vs Atletico de Madrid
              </h3>
              <span className="text-sm text-gray-600 bg-green-500 px-3 py-1 rounded-full">
                Vie, 22 Mayo – 20:00
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MainHome;
