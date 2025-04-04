import { Link } from "react-router-dom";

function HeaderMainHome() {
  return (
    <header className="bg-green-600 text-white p-4 flex items-center justify-between shadow-lg relative">
      {/* Botón del menú de la página */}
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
              to="/privacidad"
              className="block px-4 py-2 hover:bg-gray-200 rounded"
            >
              Privacidad
            </Link>
          </li>
        </ul>
      </div>

      {/*Foto del usuario predeterminada despues se actualizará*/}
      <div className="flex flex-col items-center mx-4">
        <img
          src="vite.svg"
          alt="perfil"
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
        />
        <p className="text-lg font-semibold">Adrian Escolar</p>
      </div>

      <h1 className="text-2xl font-bold">GoFootball</h1>
    </header>
  );
}

export default HeaderMainHome;
