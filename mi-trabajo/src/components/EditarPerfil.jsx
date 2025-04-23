import React, { useState } from "react";
import { Link } from "react-router-dom";

export const EditarPerfil = () => {
  const [selectedIcon, setSelectedIcon] = useState("/default.avif");
  const [userData, setUserData] = useState({
    name: "Adrian",
    email: "adrian.escolar@example.com",
    username: "adriesco.7",
  });

  const icons = [
    "/avatar/hombre.png",
    "/avatar/mujer.png",
    "/avatar/futbolista.png",
    "/avatar/chicafut.png",
    "/avatar/bombero.png",
    "/avatar/mono.png",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 relative p-4">
      <Link
        to="/mainhome"
        className="absolute top-6 left-6 text-white hover:text-green-200 transition text-xl font-semibold flex items-center"
      >
        <span className="mr-2">←</span> Volver
      </Link>

      <div className="bg-white shadow-xl rounded-lg w-full max-w-5xl px-6 py-8 flex flex-col md:grid md:grid-cols-2 gap-10 gap-y-8">
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
              value={userData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Nombre de Usuario
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 text-gray-700"
            />
          </div>
        </div>

        {/* cambio de avatar a la derecha */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={selectedIcon}
            alt="Avatar seleccionado"
            className="w-28 h-28 rounded-full border-4 border-green-500 shadow-lg"
          />
          <p className="text-sm text-gray-600 font-medium">
            Elige un nuevo icono
          </p>

          <div className="grid grid-cols-3 gap-3">
            {icons.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt={`icon-${i}`}
                onClick={() => setSelectedIcon(icon)}
                className={`w-16 h-16 rounded-full cursor-pointer border-2 ${
                  selectedIcon === icon ? "border-green-500" : "border-gray-300"
                } hover:scale-105 transition`}
              />
            ))}
          </div>
        </div>

        {/* botón guardar ocupa toda la fila en móviles */}
        <div className="md:col-span-2">
          <Link
            to="/mainhome"
            onClick={() => {
              localStorage.setItem("avatarSeleccionado", selectedIcon);
            }}
            className="block w-full bg-green-500 text-white font-semibold py-3 px-6 text-center rounded-lg hover:bg-green-700 transition"
          >
            Guardar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;
