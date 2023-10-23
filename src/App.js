import React from "react";
import Navbar from "./Navbar1";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./inicio";
import Equipo from "./equipo";
import Nosotros from "./nosotros";
import Registro from "./Login";


const App = () => {
  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/Login" element={<Registro />} />

      </Routes>
    </Router>
  );
}

export default App;



