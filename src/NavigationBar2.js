import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar2() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="menu2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">IngeCloud</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Equipo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nosotros
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            hi
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar2;
