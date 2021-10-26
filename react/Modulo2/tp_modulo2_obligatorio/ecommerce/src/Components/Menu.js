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
                <Link to="/" className="nav-link "><i class="bi bi-house-fill text-success h3"></i><h3 class="m-2">Home</h3></Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link"><i class="bi bi-shop text-success h3"></i><h3 class="m-2">Productos</h3></Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link"><i class="bi bi-door-open text-success h3"></i><h3 class="m-2">Ingresar</h3></Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link"><i class="bi bi-person-plus-fill text-success h3"></i><h3 class="m-2">Registrarse</h3></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Menu;