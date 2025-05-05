import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HeaderMainHome() {
  const [avatar, setAvatar] = useState("default.avif");
  const [nombreUsuario, setNombreUsuario] = useState("Usuario");

  useEffect(() => {
    const iconoGuardado = localStorage.getItem("avatarSeleccionado");
    const usuarioGuardado = localStorage.getItem("nombreUsuario");

    if (iconoGuardado) setAvatar(iconoGuardado);
    if (usuarioGuardado) setNombreUsuario(usuarioGuardado);
  }, []);

  return (
    <header className=" text-white px-6 py-4 shadow-md flex items-center justify-between relative z-10">
      {/* Menú lateral */}
      <div className="relative">
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer text-xl px-3 py-2 bg-green-700 hover:bg-green-800 rounded-lg transition flex items-center gap-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Menú
        </label>

        <ul className="absolute top-14 left-0 bg-white text-gray-900 shadow-xl rounded-lg w-56 p-2 space-y-2 hidden peer-checked:block animate-fade-in-down">
          <li>
            <Link
              to="/preguntasfrecuentes"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              to="/terminoscondiciones"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Términos y Condiciones
            </Link>
          </li>
          <li>
            <Link
              to="/politicaprivacidad"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Política de Privacidad
            </Link>
          </li>
        </ul>
      </div>

      {/* Nombre + foto + editar */}
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt="perfil"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow"
        />
        <div className="flex flex-col">
          <span className="text-sm text-green-100">Hola,</span>
          <div className="flex items-center space-x-1">
            <p className="font-semibold truncate max-w-[100px] md:max-w-[150px]">
              {nombreUsuario}
            </p>
            <Link to="/editarperfil" title="Editar perfil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-300 hover:text-yellow-400 transition"
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

      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
        ⚽ GoFootball
      </h1>
    </header>
  );
}

export default HeaderMainHome;
