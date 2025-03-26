import React from "react";
import Footer from "./components/Footer";

function MainPage() {
  return (
    <div className="bg-green-600 text-white min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1 className="text-4xl font-extrabold mb-4 opacity-0 animate-fade-in delay-100">
          Bienvenido a <span className="text-yellow-300">GoFootball</span>
        </h1>

        <p className="text-lg mb-6 opacity-0 animate-fade-in delay-300">
          ¿Qué deseas hacer?
        </p>

        <div className="flex gap-5 opacity-0 animate-fade-in delay-500">
          <a
            href="/Registro"
            className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Registrarse
          </a>
          <a
            href="/IniciarSesion"
            className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
          >
            Iniciar Sesión
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
