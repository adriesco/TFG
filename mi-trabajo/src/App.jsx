import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registro from "./components/Registro";
import IniciarSesion from "./components/IniciarSesion";
import Home from "./components/Home";
import Privacidad from "./components/Privacidad";
import TerminosCondiciones from "./components/TerminosCondiciones";
import HeaderMainHome from "./components/HeaderMainHome";
import HeaderLigaEspaña from "./components/HeaderLigaEspaña";
import CalendarioLiga from "./components/CalendarioLiga";
import MainHome from "./components/MainHome";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import EditarPerfil from "./components/EditarPerfil";
import LigaEspañola from "./components/LigaEspañola";
import Clasificacion from "./components/Clasificacion";
import FichajesLiga from "./components/FichajesLiga";
import HeaderLigas from "./components/HeaderLigas";
function App() {
  return (
    <Router>
      <div className=" text-white min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route
            path="/terminoscondiciones"
            element={<TerminosCondiciones />}
          />
          <Route path="/politicaprivacidad" element={<Privacidad />} />
          <Route
            path="/preguntasfrecuentes"
            element={<PreguntasFrecuentes />}
          />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/headermainhome" element={<HeaderMainHome />} />
          <Route path="/headerligaespaña" element={<HeaderLigaEspaña />} />
          <Route path="/editarperfil" element={<EditarPerfil />} />
          <Route path="/ligaespañola" element={<LigaEspañola />} />
          <Route path="/calendarioliga" element={<CalendarioLiga />} />
          <Route path="/clasificacion" element={<Clasificacion />} />
          <Route path="/fichajesliga" element={<FichajesLiga />} />
          <Route path="/headerligas" element={<HeaderLigas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
