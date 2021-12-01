import React from "react";
import { Link } from "react-router-dom";
import MenuEcommerce from "./MenuEcommerce";
import AuthContext from "../../Context/AuthContext";

function HeaderEcommerce() {
    return (
        <>
             <div className="container bg-dark">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <MenuEcommerce/>
                    </ul>
                    <AuthContext.Consumer>
                        {
                        context =>
                        <>
                            {
                                !context.userLogin && 
                                <>
                                    <ul className="nav col-md-3 text-end">
                                        <li className="nav-item"><Link to ="/login" className="nav-link btn btn-primary m-2 text-white">Ingresar</Link></li>
                                        <li className="nav-item"><Link to="/register" className="nav-link btn btn-primary m-2 text-white">Registrarse</Link></li>
                                    </ul>   
                                </>
                            }
                            {
                                context.userLogin &&
                                <>
                                    <ul className="nav col-md-3 text-end">
                                        <li className="nav-item"><p className="nav-link m-2 ">Hola {context.userInfo.nombre}</p></li>
                                        <li className="nav-item"><Link onClick={context.logoutUser} className="nav-link btn btn-primary m-2 text-white">Salir</Link></li>
                                    </ul>
                                </>
                            }
                        </>
                        }
                    </AuthContext.Consumer>
                </header>
            </div>
        </>
     );
}
export default HeaderEcommerce