
import React from 'react';
import { useEffect, useState } from 'react';



const CheckEcommerce = ({producto}) => {
    
    const foto = {
        width: 'auto',
        height: '500px',
        margin: '10px',
    }
    const [mensaje, setMensaje]=useState("");
    return (
        <>
            <div className="card shadow m-lg-3" >
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src={producto.data().imagen} className="card-img-top"  style={foto} alt="..."/>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body text-center">
                            <h4 className="card-title m-2">{producto.data().nombre}</h4>
                            <h4 className="card-title m-2">$ {producto.data().precio}</h4>
                            <p className="card-text">{producto.data().descripcion}</p>
                            <button className="btn btn-dark" onClick={()=>setMensaje("Suspendido el servicio de compra ONLINE!")}>Pagar</button>
                        </div>
                        
                            <h3 className="text-danger text-center">{mensaje}</h3>
                        
                    </div>
                
                </div>
            </div>

        </>
    );
}

export default CheckEcommerce;