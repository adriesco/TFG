import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Registro() {
  return (
    <div className="bg-green-600 text-white min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1 className="text-3xl font-extrabold mb-6">
          Crear una cuenta en{" "}
          <span className="text-yellow-300">GoFootball</span>
        </h1>

        <form className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <div>
            <label className="block font-semibold">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-semibold">Nombre de Usuario</label>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

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

          <div>
            <label className="block font-semibold">Confirmar contraseña</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          {/* Botón de Registrarse con Link a MainHome */}
          <Link
            to="/mainhome"
            className="block w-full bg-green-500 text-white font-semibold py-2 text-center rounded-lg hover:bg-green-700 transition"
          >
            Registrarse
          </Link>

          <p className="text-sm mt-2">
            ¿Ya tienes cuenta?{" "}
            <Link to="/iniciarsesion" className="text-blue-300 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
}
