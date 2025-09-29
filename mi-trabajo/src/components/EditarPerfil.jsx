import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const EditarPerfil = () => {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState("/default.avif");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const icons = [
    "/avatar/hombre.png",
    "/avatar/mujer.png",
    "/avatar/futbolista.png",
    "/avatar/chicafut.png",
    "/avatar/bombero.png",
    "/avatar/mono.png",
  ];

  // Cargar datos del usuario al montar el componente
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const username = localStorage.getItem("usuario");
        if (!username) {
          throw new Error("No hay usuario logueado");
        }

        const response = await fetch(
          `http://localhost:5000/usuario/${username}`
        );
        const data = await response.json();

        if (data.success && data.user) {
          setUserData({
            name: data.user.nombre || "",
            email: data.user.email || "",
            username: data.user.usuario || "",
          });
          setSelectedIcon(data.user.avatar || "/default.avif");
        }
      } catch (error) {
        toast.error("Error al cargar datos del usuario");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Validación básica
      if (!userData.name || !userData.email || !userData.username) {
        throw new Error("Todos los campos son obligatorios");
      }

      const response = await fetch("http://localhost:5000/actualizar-perfil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("usuario"),
          name: userData.name,
          email: userData.email,
          newUsername: userData.username,
          avatar: selectedIcon,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Error al actualizar el perfil");
      }

      // Actualizar localStorage con los nuevos datos
      localStorage.setItem("nombreUsuario", userData.name);
      localStorage.setItem("avatarSeleccionado", selectedIcon);

      if (userData.username !== localStorage.getItem("usuario")) {
        localStorage.setItem("usuario", userData.username);
      }

      toast.success("Perfil actualizado correctamente");
      setTimeout(() => navigate("/mainhome"), 1500);
    } catch (error) {
      toast.error(error.message);
      console.error("Error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/cambiar-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("usuario"),
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Error al cambiar la contraseña");
      }

      toast.success("Contraseña cambiada correctamente");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowPasswordForm(false);
    } catch (error) {
      toast.error(error.message);
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
        <div className="text-white text-xl">Cargando perfil...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 relative p-4">
      <ToastContainer position="top-center" autoClose={3000} />

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
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Nombre de Usuario
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700"
              placeholder="nombredeusuario"
            />
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="text-green-600 hover:text-green-800 font-medium text-sm"
            >
              {showPasswordForm ? "Cancelar" : "Cambiar contraseña"}
            </button>

            {showPasswordForm && (
              <form
                onSubmit={handlePasswordSubmit}
                className="mt-4 space-y-4 bg-gray-50 p-4 rounded-lg"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Contraseña actual
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Nueva contraseña
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700"
                    placeholder="••••••••"
                    required
                    minLength="6"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Confirmar nueva contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-700"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                  Cambiar contraseña
                </button>
              </form>
            )}
          </div>
        </div>

        {/* cambio de avatar a la derecha */}
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <img
              src={selectedIcon}
              alt="Avatar seleccionado"
              className="w-32 h-32 rounded-full border-4 border-green-500 shadow-lg mx-auto"
            />
            <p className="text-sm text-gray-600 font-medium mt-3">
              Elige un nuevo icono
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {icons.map((icon, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedIcon(icon)}
                className={`p-1 rounded-full ${
                  selectedIcon === icon ? "ring-2 ring-green-500" : ""
                } hover:scale-105 transition`}
              >
                <img
                  src={icon}
                  alt={`icon-${i}`}
                  className="w-16 h-16 rounded-full"
                />
              </button>
            ))}
          </div>

          <div className="w-full pt-4">
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className={`w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition ${
                isSaving ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSaving ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Guardando...
                </span>
              ) : (
                "Guardar cambios"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;
