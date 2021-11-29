
import React from 'react';
import { Link } from "react-router-dom";


const DetPublic = ({producto}) => {
    const foto = {
        width: 'auto',
        height: '250px',
        margin: '10px',
    }
    return (
        <>
            <div className="card shadow text-center m-lg-3" >
                <div className="row">
                    <div className="col-8">
                        <h4 className="card-title m-2">{producto.data().nombre}</h4>
                    </div>
                    <div className="col-4">
                        <h4 className="card-title m-2">$ {producto.data().precio}</h4>
                    </div>
                </div>
                
                
                <div className="card-body">
                    
                    <img src={producto.data().imagen} className="card-img-top"  style={foto} alt="..."/>
                    <p className="card-text">{producto.data().descripcion}</p>
                    <Link to={`/confirm/${producto.id}`}className="btn btn-dark"><i class="bi bi-cart-plus-fill m-2"></i> Agregar</Link>
                </div>
            </div>

        </>
    );
}

export default DetPublic;