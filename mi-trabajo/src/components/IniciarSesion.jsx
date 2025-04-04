import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function IniciarSesion() {
  return (
    <div className="bg-green-600 text-white min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1 className="text-3xl font-extrabold mb-6">
          Iniciar Sesion en <span className="text-yellow-300">GoFootball</span>
        </h1>

        <form className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="correo@example.com"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-semibold">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <Link
            to="/mainhome"
            className="block w-full bg-green-500 text-white font-semibold py-2 text-center rounded-lg hover:bg-green-700 transition"
          >
            Iniciar Sesion
          </Link>

          <p className="text-sm mt-2">
            ¿No tienes cuenta?{" "}
            <Link to="/registro" className="text-blue-300 hover:underline">
              Regístrate
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default IniciarSesion;
