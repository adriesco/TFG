function HeaderLigasEspana() {
  return (
    <div className="bg-black text-white px-6 py-6 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo + Título */}
        <div className="flex items-center gap-4">
          <img src="/logos/laliga.png" alt="LaLiga" className="w-20 h-20" />
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            LALIGA
          </h1>
        </div>

        {/* Botón "Seguir" */}
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors px-5 py-2 rounded-full shadow-md">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm font-medium">Seguir</span>
        </button>
      </div>
    </div>
  );
}

export default HeaderLigasEspana;
