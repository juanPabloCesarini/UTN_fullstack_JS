import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link "><p class="bi bi-house-fill text-center"> Home</p></Link>
              </li>
              <li className="nav-item">
                <Link to="/productos/alta" className="nav-link "><p class="bi bi-plus-square text-center"> Alta Producto</p></Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link"><p class="bi bi-door-open text-center"> Ingresar</p></Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link"><p class="bi bi-person-plus-fill text-center"> Registrarse</p></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Menu;