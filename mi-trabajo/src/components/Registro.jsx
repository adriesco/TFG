import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!formData.usuario?.trim()) {
      toast.error("⚠️ Debes elegir un nombre de usuario");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("⚠️ Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    // Validación simple de email (aún se puede hacer más robusta)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("⚠️ El correo electrónico no es válido");
      setIsLoading(false);
      return;
    }

    // Validación de contraseña mínima (6 caracteres, por ejemplo)
    if (formData.password.length < 6) {
      toast.error("⚠️ La contraseña debe tener al menos 6 caracteres");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          usuario: formData.usuario,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error en el registro");
      }

      localStorage.setItem("usuario", formData.usuario);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("nombre", formData.nombre);

      toast.success("Usuario registrado con éxito");
      setTimeout(() => {
        navigate("/iniciarsesion");
      }, 2000);
    } catch (error) {
      console.error("Error completo:", error);
      toast.error(`❌ Error: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-extrabold mr-4">
            Crear una cuenta en{" "}
            <span className="text-green-300">GoFootball</span>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
        >
          <div>
            <label className="block font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Nombre de Usuario</label>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="correo@example.com"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg mt-4 font-semibold hover:bg-green-600 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Registrando..." : "Crear cuenta"}
          </button>
        </form>

        <ToastContainer />
      </main>
    </div>
  );
}
