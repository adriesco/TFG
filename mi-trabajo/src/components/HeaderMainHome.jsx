import { Link } from "react-router-dom";

function HeaderMainHome() {
  return (
    <header className="bg-green-600 text-white p-4 flex items-center justify-between shadow-lg relative">
      {/* Menú lateral */}
      <div className="relative">
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer text-lg px-3 py-2 rounded-lg bg-green-700 hover:bg-green-800 transition"
        >
          ☰ Menú
        </label>

        <ul className="absolute top-12 left-0 bg-white text-gray-900 shadow-lg rounded-lg w-48 p-2 space-y-2 hidden peer-checked:block">
          <li>
            <Link
              to="/preguntasfrecuentes"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              to="/terminoscondiciones"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              Términos y Condiciones
            </Link>
          </li>
          <li>
            <Link
              to="/politicaprivacidad"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              Privacidad
            </Link>
          </li>
        </ul>
      </div>

      {/* Foto + Nombre + Editar */}
      <div className="flex flex-col items-center space-x-3">
        <img
          src="default.avif"
          alt="perfil"
          className="w-20 h-20 rounded-full border-2 border-white shadow"
        />
        <div className="flex items-center space-x-2">
          <p className="text-lg font-semibold mt-2">Adrian Escolar</p>
          <Link
            to="/editarperfil"
            className="text-white hover:text-yellow-300 transition"
            title="Editar perfil"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5 mt-2"
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
      <h1 className="text-2xl font-bold">GoFootball</h1>
    </header>
  );
}

export default HeaderMainHome;
