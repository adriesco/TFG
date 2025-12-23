import { Link } from "react-router-dom";
import HeaderLigas from "./HeaderLiga";
import Footer from "./Footer";
import React, { useState } from "react";

export default function Premium() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white px-4 sm:px-6 py-6">
      <HeaderLigas />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Hazte <span className="text-yellow-400">Premium</span> en GoFootball
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Accede a estadísticas avanzadas, fichajes exclusivos y una experiencia
          sin límites.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              📊 Estadísticas avanzadas
            </h3>
            <p className="text-gray-300">
              Consulta datos detallados de partidos, rendimiento de jugadores y
              comparativas exclusivas de cada jornada.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              🔁 Fichajes en tiempo real
            </h3>
            <p className="text-gray-300">
              Accede antes que nadie a rumores, fichajes confirmados y
              movimientos del mercado por liga.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              🚫 Sin publicidad
            </h3>
            <p className="text-gray-300">
              Disfruta de GoFootball sin anuncios y con una navegación más
              rápida y limpia.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 max-w-xl mx-auto shadow-xl mb-5">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Suscripción Premium
          </h2>

          <p className="text-center text-gray-300 mb-6">
            Acceso completo por solo:
          </p>

          <div className="text-center mb-6">
            <span className="text-5xl font-bold text-yellow-400">4,99€</span>
            <span className="text-gray-300"> / mes</span>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre en la tarjeta"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/AA"
                className="w-1/2 p-3 rounded bg-gray-700 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 rounded bg-gray-700 text-white focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => setMostrarModal(true)}
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition"
            >
              Simular pago Premium
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-11 text-center">
            * Pago simulado con fines ficticios.
          </p>
        </div>
      </div>

      <Footer />

      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              ¡Felicidades! 🎉
            </h2>

            <p className="text-gray-300 mb-6">
              Ya perteneces a la sección{" "}
              <span className="text-yellow-400 font-semibold">Premium</span> de
              GoFootball. Disfruta de estadísticas avanzadas, fichajes
              exclusivos y una experiencia sin límites.
            </p>

            <button
              onClick={() => setMostrarModal(false)}
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition"
            >
              Empezar a disfrutar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
