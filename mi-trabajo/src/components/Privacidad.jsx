import React from "react";

function PoliticaPrivacidad() {
  const fechaActual = new Date().toLocaleDateString("es-ES");

  return (
    <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
      <div className="max-w-lg w-full px-8 py-5 rounded-xl bg-white shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 opacity-0 animate-fade-in delay-100 text-black">
          Política de Privacidad
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Última modificación: {fechaActual}
        </p>

        <div className="text-left text-gray-800 space-y-4">
          <p>
            En <span className="text-green-600">GoFootball</span>, protegemos tu
            información personal y respetamos tu privacidad.
          </p>

          <h2 className="text-2xl font-bold mt-4">1. Datos que Recopilamos</h2>
          <ul className="list-disc list-inside">
            <li>Nombre y correo electrónico al registrarte.</li>
            <li>Datos de navegación para mejorar la experiencia.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">2. Uso de la Información</h2>
          <ul className="list-disc list-inside">
            <li>Gestionar el acceso y uso de la plataforma.</li>
            <li>Mejorar nuestros servicios y seguridad.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">3. Seguridad</h2>
          <p>
            Tomamos medidas para proteger tu información, pero ninguna
            plataforma es 100% segura.
          </p>

          <h2 className="text-2xl font-bold mt-4">4. Tus Derechos</h2>
          <ul className="list-disc list-inside">
            <li>Acceder, modificar o eliminar tu información.</li>
            <li>Configurar el uso de cookies en tu navegador.</li>
          </ul>

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

export default PoliticaPrivacidad;
