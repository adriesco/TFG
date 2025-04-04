import { Link } from "react-router-dom";
import Header from "../components/HeaderMainHome"; // Asegúrate de que la ruta es correcta

function MainHome() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1>Bienvenido a GoFootball</h1>
        <p>Contenido de la página principal</p>
      </main>
    </div>
  );
}

export default MainHome;
