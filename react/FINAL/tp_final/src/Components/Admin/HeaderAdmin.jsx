import React from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
function HeaderAdmin() {
    return (
        <>
             <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <MenuAdmin/>
                    </ul>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2"><Link to ="/admin/login">Login</Link></button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </header>
            </div>
        </>
     );
}

export default HeaderAdmin;