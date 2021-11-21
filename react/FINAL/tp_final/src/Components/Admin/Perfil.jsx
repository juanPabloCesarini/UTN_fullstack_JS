import React, {useState} from "react";

function Perfil(props) {
    const administrador = props;

    return(
        <>
            <div className="container">
                <div className="m-0 vh-100 row justify-content-center align-items-center">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <p><strong>Nombre:</strong></p>
                            </div>
                            <div className="col-6">
                                <p><strong>{administrador.nombre}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <p><strong>Apellido:</strong></p>
                            </div>
                            <div className="col-6">
                                <p><strong>{administrador.apellido}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }
    export default Perfil;
