import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

export const EditarPerfil = () => {
  const [selectedIcon, setSelectedIcon] = useState("/default-icon.jpg");
  const [userData, setUserData] = useState({
    name: "Juan",
    surname: "Pérez",
    email: "juan.perez@example.com",
  });

  const icons = [
    "/icon1.jpeg",
    "/icon2.jpg",
    "/icon3.jpeg",
    "/icon4.jpg",
    "/icon5.jpg",
    "/icon6.jpg",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 relative">
      <Link
        to="/mainhome"
        className="absolute top-6 left-6 text-white hover:text-green-200 transition text-xl font-semibold flex items-center"
      >
        <span className="mr-2">←</span> Volver
      </Link>
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* info del usuario a la izquierda */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Información del Usuario
          </h2>
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Apellido
            </label>
            <input
              type="text"
              name="surname"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        {/* cambio de avatar a la derecha */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center w-28 h-28 border-4 border-gray-300 rounded-full overflow-hidden mb-4"></div>
          <p className="text-sm text-gray-600 font-medium">
            Elige un nuevo icono
          </p>

          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/mainhome"
              className="block w-full bg-green-500 text-white font-semibold py-3 px-3 text-center rounded-lg hover:bg-green-700 transition"
            >
              Guardar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;
