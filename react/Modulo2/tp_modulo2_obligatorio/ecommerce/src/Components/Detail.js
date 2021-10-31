import React from 'react';
import { Link } from "react-router-dom";


const Detail = ({detalle}) => {
    const foto = {
        width: 'auto',
        height: '350px',
        margin: '10px',
    }
    return (
        <>
            <div className="card shadow text-center" >
                <h3 className="card-title "> u$s {detalle.price}</h3>
                <img src={detalle.image} className="card-img-top"  style={foto} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{detalle.category}</h5>
                    <h5 className="card-text">{detalle.title}</h5>
                    <p className="card-text">{detalle.description}</p>
                    <a href="#" className="btn btn-dark"><i class="bi bi-cart-plus-fill m-2"></i> Agregar</a>
                </div>
            </div>

        </>
    );
}

export default Detail;
