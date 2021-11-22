import React, { useContext } from "react";
import {Link } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";

function HeaderAdmin() {
 
    return (
        <>
             <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <MenuAdmin/>
                    </ul>
                    <ul className="nav col-md-3 text-end">
                        <li className="nav-item"><Link to ="/admin/login" className="nav-link btn btn-primary m-2 text-white">Ingresar</Link></li>
                        <li className="nav-item"><Link to="/admin/register" className="nav-link btn btn-primary m-2 text-white">Registrarse</Link></li>
                    </ul>
                </header>
            </div>
        </>
     );
}

export default HeaderAdmin;