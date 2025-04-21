import { Link } from "react-router-dom";
import Header from "../components/HeaderMainHome";

function MainHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 space-y-10">
        {/* Noticias */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            📰 Noticias
          </h2>
          <ul className="space-y-2 text-gray-800">
            <li className="border-b pb-2">
              Messi vuelve al Barcelona en 2026.
            </li>
            <li className="border-b pb-2">Mbappé ficha por el Real Madrid.</li>
            <li className="border-b pb-2">
              Nuevas reglas de la FIFA para 2025.
            </li>
          </ul>
        </section>

        {/* Ligas por país */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            🌍 Ligas por País
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              España
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Inglaterra
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Italia
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Alemania
            </button>
          </div>
        </section>

        {/* Jugadores destacados o estadísticas */}
        <section className="bg-white rounded-lg shadow p-6 ">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            📊 Jugadores Destacados
          </h2>
          <ul className="space-y-2 text-gray-800">
            <li className="border-b pb-2">Haaland - 32 goles</li>
            <li className="border-b pb-2">Jude Bellingham - 15 asistencias</li>
            <li className="border-b pb-2">Vinícius Junior - 8 MVPs</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            🗓️ Próximos Partidos
          </h2>
          <ul className="space-y-3 text-gray-800">
            <li className="flex justify-between items-center border-b pb-2">
              <span>Real Madrid vs Barcelona</span>
              <span className="text-sm text-gray-600">
                Dom, 14 Abril – 21:00
              </span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span>Arsenal vs Manchester City</span>
              <span className="text-sm text-gray-600">
                Sáb, 13 Abril – 18:30
              </span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span>PSG vs Marsella</span>
              <span className="text-sm text-gray-600">
                Vie, 12 Abril – 20:00
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MainHome;
