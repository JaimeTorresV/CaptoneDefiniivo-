import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar1.css";

const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="container">

            <h3 className="logo">IngeCloud</h3>

            <ul className="nav-links">

                <Link className="no-underline" to="/">
                    <li>Inicio</li>
                </Link>

                <Link className="no-underline" to="/equipo">
                    <li>Equipo</li>
                </Link>

                <Link className="no-underline" to="/nosotros">
                    <li>Nosotros</li>
                </Link>

                <Link to="/Login" className="ms-auto">
                    <button type="button"  class="btn btn-warning">Ingresa</button>
                </Link>

            </ul>
            </div>
        </nav>

    );

}

export default Navbar;