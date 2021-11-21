import React from "react";
import MenuAdmin from "./MenuAdmin";
function FooterAdmin() {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <MenuAdmin/>    
                    </ul>
                    <p className="text-center text-muted">&copy; Juan Pablo Cesarini</p>
                </footer>
            </div>
        </>
    );
}

export default FooterAdmin;