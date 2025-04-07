import React from "react";
import { Link } from "react-router-dom";

function PreguntasFrecuentes() {
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
          Preguntas Frecuentes
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Última modificación: {fechaActual}
        </p>

        <div className="text-left text-gray-800 space-y-4">
          <p>
            Bienvenido a <span className="text-green-600">GoFootball</span>.
            Aquí encontrarás respuestas a las preguntas más comunes sobre la
            plataforma.
          </p>

          <h2 className="text-2xl font-bold mt-4">
            1. ¿Cómo me registro en GoFootball?
          </h2>
          <p>
            Para registrarte, simplemente haz clic en el botón "Registrarse" en
            la página principal y completa el formulario con tu información.
          </p>

          <h2 className="text-2xl font-bold mt-4">
            2. ¿Es gratis usar la plataforma?
          </h2>
          <p>
            Sí, el registro y el uso básico de{" "}
            <span className="text-green-600">GoFootball</span> son totalmente
            gratuitos.
          </p>

          <h2 className="text-2xl font-bold mt-4">
            3. ¿Cómo recupero mi contraseña?
          </h2>
          <p>
            Si olvidaste tu contraseña, puedes hacer clic en "¿Olvidaste tu
            contraseña?" en la página de inicio de sesión y seguir las
            instrucciones para restablecerla.
          </p>

          <h2 className="text-2xl font-bold mt-4">
            4. ¿Cómo contacto con soporte?
          </h2>
          <p>
            Puedes escribirnos a{" "}
            <a
              href="mailto:correo@gofootball.com"
              className="text-blue-500 underline"
            >
              correo@gofootball.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-4">
            5. ¿Puedo eliminar mi cuenta?
          </h2>
          <p>
            Sí, si deseas eliminar tu cuenta, contáctanos a través del correo de
            soporte y gestionaremos tu solicitud.
          </p>

          <h2 className="text-2xl font-bold mt-4">
            6. ¿GoFootball tiene una aplicación móvil?
          </h2>
          <p>
            Actualmente, solo contamos con nuestra versión web, pero estamos
            trabajando en una aplicación móvil.
          </p>
        </div>
      </div>
    </main>
  );
}

export default PreguntasFrecuentes;
