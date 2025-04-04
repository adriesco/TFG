import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Registro from "./components/Registro";
import IniciarSesion from "./components/IniciarSesion";
import Home from "./components/Home";
import Privacidad from "./components/Privacidad";
import TerminosCondiciones from "./components/TerminosCondiciones";
import HeaderMainHome from "./components/HeaderMainHome";
import MainHome from "./components/MainHome";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";

function App() {
  return (
    <Router>
      <div className="bg-green-600 text-white min-h-screen flex flex-col justify-between">
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
