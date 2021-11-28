import React from "react";
import MenuPublic from "./MenuPublic";
function FooterPublic() {
     return (
        <>
            <div className="container bg-dark">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <MenuPublic/>  
                    </ul>
                    <p className="text-center text-muted">&copy; tucelu.com</p>
                </footer>
            </div>
        </>
    );
}
export default FooterPublic