import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-4 md:px-8 text-sm text-gray-300 pb-8">
      <div className="w-full">
        <hr className="border-neutral-700 mb-6 w-full" />
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold tracking-wide text-white">GoFootball</p>
          <p className="text-xs mt-1">
            &copy; {year} – Todos los derechos reservados
          </p>
        </div>

        {/* Enlaces rápidos */}
        <nav className="flex justify-center gap-6">
          <Link
            to="/politicaprivacidad"
            className="hover:text-green-400 transition-colors"
          >
            Privacidad
          </Link>
          <Link
            to="/terminoscondiciones"
            className="hover:text-green-400 transition-colors"
          >
            Términos
          </Link>
          <Link
            to="/preguntasfrecuentes"
            className="hover:text-green-400 transition-colors"
          >
            Preguntas Frecuentes
          </Link>
        </nav>

        {/* Iconos de las redes sociales */}
        <div className="flex justify-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 5.92a8.31 8.31 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.24 8.24 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.73A11.65 11.65 0 0 1 3 4.79a4.1 4.1 0 0 0 1.27 5.47 4 4 0 0 1-1.86-.51v.05a4.11 4.11 0 0 0 3.29 4 4.22 4.22 0 0 1-1.85.07 4.11 4.11 0 0 0 3.83 2.85A8.25 8.25 0 0 1 2 18.57a11.63 11.63 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69v-.53A8.35 8.35 0 0 0 22 5.92Z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.966.24 2.427.405a4.9 4.9 0 0 1 1.77 1.04 4.9 4.9 0 0 1 1.04 1.77c.165.46.35 1.256.405 2.427.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.966-.405 2.427a4.9 4.9 0 0 1-1.04 1.77 4.9 4.9 0 0 1-1.77 1.04c-.46.165-1.256.35-2.427.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.966-.24-2.427-.405a4.9 4.9 0 0 1-1.77-1.04 4.9 4.9 0 0 1-1.04-1.77c-.165-.46-.35-1.256-.405-2.427C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.966.405-2.427A4.9 4.9 0 0 1 3.715 2.953a4.9 4.9 0 0 1 1.77-1.04c.46-.165 1.256-.35 2.427-.405C8.416 1.812 8.8 1.8 12 1.8Zm0 1.8c-3.16 0-3.526.01-4.78.068-.97.045-1.495.2-1.846.332a3.1 3.1 0 0 0-1.122.73 3.1 3.1 0 0 0-.73 1.122c-.132.351-.287.876-.332 1.846-.058 1.254-.068 1.62-.068 4.78s.01 3.526.068 4.78c.045.97.2 1.495.332 1.846.197.52.51.968.93 1.388.42.42.868.733 1.388.93.351.132.876.287 1.846.332 1.254.058 1.62.068 4.78.068s3.526-.01 4.78-.068c.97-.045 1.495-.2 1.846-.332a3.1 3.1 0 0 0 1.122-.73 3.1 3.1 0 0 0 .73-1.122c.132-.351.287-.876.332-1.846.058-1.254.068-1.62.068-4.78s-.01-3.526-.068-4.78c-.045-.97-.2-1.495-.332-1.846a3.1 3.1 0 0 0-.73-1.122 3.1 3.1 0 0 0-1.122-.73c-.351-.132-.876-.287-1.846-.332C15.526 3.81 15.16 3.8 12 3.8Zm0 3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.947-.98a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
