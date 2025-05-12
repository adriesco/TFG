import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HeaderMainHome() {
  const [avatar, setAvatar] = useState("default.avif");
  const [nombreUsuario, setNombreUsuario] = useState("Usuario");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 1. Obtener el username del localStorage
        const username =
          localStorage.getItem("usuario") || localStorage.getItem("username");

        if (!username) {
          setLoading(false);
          return;
        }

        // 2. Hacer la petición a la API
        const response = await fetch(
          `http://localhost:5000/usuario/${username}`
        );

        if (!response.ok) {
          throw new Error("Error al obtener datos del usuario");
        }

        const data = await response.json();

        // 3. Actualizar el estado con los datos del usuario
        if (data.success && data.user) {
          setNombreUsuario(data.user.nombre || data.user.username || username);
          setAvatar(data.user.avatar || "default.avif");

          // Guardar en localStorage para futuras cargas rápidas
          localStorage.setItem(
            "nombreUsuario",
            data.user.nombre || data.user.username || username
          );
          if (data.user.avatar) {
            localStorage.setItem("avatarSeleccionado", data.user.avatar);
          }
        }
      } catch (error) {
        // Usar datos del localStorage como fallback
        const savedName = localStorage.getItem("nombreUsuario");
        const savedAvatar = localStorage.getItem("avatarSeleccionado");
        if (savedName) setNombreUsuario(savedName);
        if (savedAvatar) setAvatar(savedAvatar);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <header className="text-white px-4 py-3 flex justify-between items-center">
        <div className="animate-pulse bg-gray-700 h-8 w-24 rounded"></div>
        <div className="animate-pulse bg-gray-700 h-10 w-10 rounded-full"></div>
      </header>
    );
  }

  return (
    <header className="text-white px-4 py-3 flex flex-wrap items-center justify-between gap-4 relative z-10">
      {/* Menú lateral */}
      <div className="relative">
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer text-lg px-3 py-2 bg-green-900 hover:bg-green-950 rounded-lg transition flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="hidden sm:block">Menú</span>
        </label>

        <ul className="absolute top-14 left-0 bg-green-700 text-white shadow-xl rounded-lg w-52 p-2 space-y-2 hidden peer-checked:block animate-fade-in-down z-50">
          <li>
            <Link
              to="/preguntasfrecuentes"
              className="block px-4 py-2 hover:bg-green-500 rounded"
              onClick={() =>
                (document.getElementById("menu-toggle").checked = false)
              }
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              to="/terminoscondiciones"
              className="block px-4 py-2 hover:bg-green-500 rounded"
              onClick={() =>
                (document.getElementById("menu-toggle").checked = false)
              }
            >
              Términos y Condiciones
            </Link>
          </li>
          <li>
            <Link
              to="/politicaprivacidad"
              className="block px-4 py-2 hover:bg-green-500 rounded"
              onClick={() =>
                (document.getElementById("menu-toggle").checked = false)
              }
            >
              Política de Privacidad
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
        ⚽ GoFootball
      </h1>

      <div className="flex items-center gap-3 sm:gap-4 ml-auto">
        <select className="bg-transparent border border-white text-xs px-2 py-1 rounded text-white">
          <option value="ES">ES</option>
        </select>

        <button className="p-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded hover:bg-yellow-500 transition">
          <Link to="/iniciarsesion" title="Iniciar Sesión">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </Link>
        </button>

        <div className="flex items-center space-x-2 max-w-[140px] overflow-hidden">
          <img
            src={avatar}
            alt="perfil"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow"
            onError={(e) => {
              e.target.src = "default.avif";
            }}
          />
          <div className="flex flex-col text-xs sm:text-sm">
            <span className="text-green-100">Hola,</span>
            <div className="flex items-center gap-1">
              <p className="font-semibold truncate max-w-[80px] sm:max-w-[120px]">
                {nombreUsuario}
              </p>
              <Link to="/editarperfil" title="Editar perfil">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 hover:text-yellow-400 transition"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 15a1 1 0 011-1h11a1 1 0 110 2H3a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMainHome;
