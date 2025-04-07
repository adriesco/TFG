import React from "react";
import { Link } from "react-router-dom";

function TerminosCondiciones() {
  const fechaActual = new Date().toLocaleDateString("es-ES");

  return (
    <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
      <Link
        to="/mainhome"
        className="self-start mb-4 text-white hover:text-green-200 transition text-xl font-semibold"
      >
        ← Volver
      </Link>
      <div className="max-w-lg w-full px-8 py-5 rounded-xl bg-white shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 opacity-0 animate-fade-in delay-100 text-black">
          Términos y Condiciones
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Última modificación: {fechaActual}
        </p>

        <div className="text-left text-gray-800 space-y-4">
          <p>
            Bienvenido a <span className="text-green-600">GoFootball</span>. Al
            utilizar nuestra plataforma, aceptas los siguientes términos y
            condiciones.
          </p>

          <h2 className="text-2xl font-bold mt-4">1. Uso de la Plataforma</h2>
          <ul className="list-disc list-inside">
            <li>Debes ser mayor de 13 años para registrarte.</li>
            <li>
              No puedes usar nuestra plataforma para actividades ilegales.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">2. Registro y Seguridad</h2>
          <ul className="list-disc list-inside">
            <li>Es tu responsabilidad mantener segura tu cuenta.</li>
            <li>No compartas tu contraseña con terceros.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de{" "}
            <span className="text-green-600">GoFootball</span> (logos, textos,
            imágenes) está protegido y no puede ser copiado sin permiso.
          </p>

          <h2 className="text-2xl font-bold mt-4">4. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de actualizar estos términos en cualquier
            momento.
          </p>

          <p className="mt-6">
            Para más información, contáctanos en{" "}
            <a
              href="mailto:correo@gofootball.com"
              className="text-blue-500 underline"
            >
              correo@gofootball.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default TerminosCondiciones;
