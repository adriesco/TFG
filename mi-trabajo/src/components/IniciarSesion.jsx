import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function IniciarSesion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const ROOT_USER = {
    username: "adrian",
    password: "admin123",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === ROOT_USER.username &&
      formData.password === ROOT_USER.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("usuario", formData.username);
      navigate("/mainhome");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="bg-green-600 text-white min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6 px-4">
        <h1 className="text-3xl font-extrabold mb-6">
          Iniciar Sesión en <span className="text-yellow-300">GoFootball</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
        >
          <div>
            <label className="block font-semibold">Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nombre de Usuario"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-semibold">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <button
            type="submit"
            className="block w-full bg-green-500 text-white font-semibold py-2 text-center rounded-lg hover:bg-green-700 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default IniciarSesion;
