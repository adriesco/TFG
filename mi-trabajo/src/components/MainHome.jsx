import { Link } from "react-router-dom";
import Header from "../components/HeaderMainHome";
import Footer from "../components/Footer";

function MainHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Noticias destacadas */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-100">
              📰 Noticias Destacadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  link: "https://www.marca.com/futbol/barcelona/2025/04/18/messi-habla-salida-psg-mi-intencion-volver-barcelona-pudo.html",
                  img: "/noticias/messinoti.jpg",
                  title: "Messi vuelve al Barcelona en 2026",
                  date: "Marca - 10 Abr 2025",
                },
                {
                  link: "https://www.marca.com/futbol/real-madrid/2024/06/03/64c7ab27e2704e5f138b458d.html",
                  img: "/noticias/mbappenoti.jpg",
                  title: "Mbappé ficha por el Real Madrid",
                  date: "AS - 9 Ago 2024",
                },
                {
                  link: "https://www.sport.es/es/noticias/futbol-internacional/nuevas-reglas-fifa-cambiar-futbol-114677958",
                  img: "/noticias/normasnoti.jpg",
                  title: "Nuevas reglas de la FIFA para 2026",
                  date: "SPORT - 8 Abr 2025",
                },
              ].map((noticia, i) => (
                <a
                  key={i}
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-full aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={noticia.img}
                      alt={noticia.title}
                      className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {noticia.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{noticia.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Ligas por país */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-100">🌍 Ligas</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <Link to="/ligaespañola">
                <div className="flex flex-col items-center bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer hover:scale-[1.02]">
                  <img
                    src="/logos/laliga.png"
                    alt="LaLiga"
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    LaLiga
                  </h3>
                  <p className="text-sm text-gray-800">España</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-100">
              🏆 Próximos Partidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  home: "Real Madrid",
                  homeLogo: "/escudos/liga/realmadrid.png",
                  away: "Barcelona",
                  awayLogo: "/escudos/liga/barcelona.png",
                  date: "Dom, 14 Mayo – 21:00",
                },
                {
                  home: "Real Sociedad",
                  homeLogo: "/escudos/liga/realsociedad.png",
                  away: "Athletic",
                  awayLogo: "/escudos/liga/athletic.png",
                  date: "Mié, 17 Mayo – 18:30",
                },
                {
                  home: "Leganés",
                  homeLogo: "/escudos/liga/leganes.png",
                  away: "Getafe",
                  awayLogo: "/escudos/liga/getafe.png",
                  date: "Jue, 18 Mayo – 15:00",
                },
                {
                  home: "Rayo Vallecano",
                  homeLogo: "/escudos/liga/rayovallecano.png",
                  away: "Atlético",
                  awayLogo: "/escudos/liga/atleticomadrid.png",
                  date: "Vie, 22 Mayo – 20:00",
                },
              ].map((match, i) => (
                <div
                  key={i}
                  className="bg-green-200 p-4 rounded-lg shadow flex flex-col items-center text-center hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <img
                      src={match.homeLogo}
                      alt={match.home}
                      className="w-8 h-8"
                    />
                    <span className="font-bold text-gray-800">vs</span>
                    <img
                      src={match.awayLogo}
                      alt={match.away}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-gray-700 font-semibold text-sm">
                    {match.home} vs {match.away}
                  </h3>
                  <span className="text-xs text-gray-600 bg-green-500 px-2 py-1 rounded-full mt-1">
                    {match.date}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-100">
              ⭐ Jugadores Destacados
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Vinicius Jr.",
                  stat: "23 goles",
                  img: "/jugadores/vinicius.png",
                },
                {
                  name: "Bellingham",
                  stat: "15 asistencias",
                  img: "/jugadores/jude.png",
                },
                {
                  name: "Lamine Yamal",
                  stat: "17 años",
                  img: "/jugadores/lamine.png",
                },
              ].map((player, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition"
                >
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-20 h-20 object-contain mb-2 rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {player.name}
                  </h3>
                  <p className="text-sm text-gray-700">{player.stat}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainHome;
