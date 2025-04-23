import { Link } from "react-router-dom";
import Header from "../components/HeaderMainHome";

function MainHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 space-y-10">
        <section className="bg-green-100 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">
            🗞️ Últimas Noticias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.marca.com/futbol/barcelona/2025/04/18/messi-habla-salida-psg-mi-intencion-volver-barcelona-pudo.html"
              target="_blank"
              className="flex bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-[1.02] overflow-hidden px-5"
            >
              <img
                src="/noticias/messinoti.jpg"
                alt="Messi vuelve al Barcelona"
                className="w-32 h-32 object-cover mt-2"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full mb-2 inline-block">
                    FICHAJE
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Messi vuelve al Barcelona en 2026
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Marca - 10 Abr 2025
                </p>
              </div>
            </a>
            <a
              href="https://www.marca.com/futbol/real-madrid/2024/06/03/64c7ab27e2704e5f138b458d.html"
              target="_blank"
              className="flex bg-white rounded-lg shadow-md hover:shadow-lg transition px-5 transform hover:scale-[1.02] overflow-hidden "
            >
              <img
                src="/noticias/mbappenoti.jpg"
                alt="Mbappé ficha por el Real Madrid"
                className="w-32 h-32 object-cover mt-2"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full mb-2 inline-block">
                    REAL MADRID
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mbappé ficha por el Real Madrid
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">AS - 9 Ago 2024</p>
              </div>
            </a>
            <a
              href="https://www.sport.es/es/noticias/futbol-internacional/nuevas-reglas-fifa-cambiar-futbol-114677958"
              target="_blank"
              className="flex bg-white rounded-lg shadow-md hover:shadow-lg transition transform px-5 hover:scale-[1.02] overflow-hidden"
            >
              <img
                src="/noticias/normasnoti.jpg"
                alt="Nuevas reglas de la FIFA"
                className="w-32 h-32 mt-2 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full mb-2 ">
                    REGLAMENTO
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Nuevas reglas de la FIFA para 2026
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">SPORT - 8 Abr 2025</p>
              </div>
            </a>
          </div>
        </section>

        {/* Ligas por país */}
        <section className="bg-green-200 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            🌍 Ligas por País
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/logos/laliga.png"
                alt="LaLiga"
                className="w-20 h-20 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800">LaLiga</h3>
              <p className="text-sm text-gray-600">España</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/logos/inglesa.png"
                alt="Premier League"
                className="w-20 h-20 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Premier League
              </h3>
              <p className="text-sm text-gray-600">Inglaterra</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/logos/italiana.png"
                alt="Serie A"
                className="w-20 h-20 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800">Serie A</h3>
              <p className="text-sm text-gray-600">Italia</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/logos/bundes.png"
                alt="Bundesliga"
                className="w-20 h-20 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Bundesliga
              </h3>
              <p className="text-sm text-gray-600">Alemania</p>
            </div>
          </div>
        </section>

        {/* Jugadores destacados o estadísticas */}
        <section className="bg-green-200 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            📊 Jugadores Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/jugadores/haaland.png"
                alt="Haaland"
                className="w-24 h-24 object-contain mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Erling Haaland
              </h3>
              <p className="text-sm text-gray-600">32 goles</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/jugadores/jude.png"
                alt="Bellingham"
                className="w-24 h-24 object-contain mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Jude Bellingham
              </h3>
              <p className="text-sm text-gray-600">15 asistencias</p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src="/jugadores/vinicius.png"
                alt="Vinícius Junior"
                className="w-24 h-24 object-contain mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Vinícius Junior
              </h3>
              <p className="text-sm text-gray-600">8 MVPs</p>
            </div>
          </div>
        </section>

        <section className="bg-green-200 rounded-lg shadow p-6 border-green-300 border-2">
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            🗓️ Próximos Partidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/realmadrid.png"
                  alt="Real Madrid"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/barcelona.png"
                  alt="Barcelona"
                  className="w-10 h-9"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Real Madrid vs Barcelona
              </h3>
              <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">
                Dom, 14 Abril – 21:00
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/arsenal.png"
                  alt="Arsenal"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/city.png"
                  alt="Manchester City"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Arsenal vs Manchester City
              </h3>
              <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">
                Sáb, 13 Abril – 18:30
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src="/escudos/inter.png"
                  alt="Inter"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/lazio.png"
                  alt="Lazio"
                  className="w-10 h-8"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Inter vs Lazio
              </h3>
              <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">
                Dom, 18 Mayo – 15:00
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img src="/escudos/psg.png" alt="PSG" className="w-10 h-10" />
                <span className="text-lg font-bold text-gray-800">vs</span>
                <img
                  src="/escudos/marsella.png"
                  alt="Marsella"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-gray-700 font-semibold mb-1">
                PSG vs Marsella
              </h3>
              <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">
                Vie, 12 Abril – 20:00
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainHome;
