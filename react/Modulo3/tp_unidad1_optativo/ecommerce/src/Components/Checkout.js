import React from 'react';
import { Link } from "react-router-dom";


const Checkout = ({detalle}) => {
    const foto = {
        width: 'auto',
        height: '350px',
        margin: '10px',
    }
    return (
        <>
        <div className="row">
            <div className="col-9">
                <div className="card mb-3 ">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={detalle.image} className="img-fluid rounded-start"  style={foto} alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title "> u$s {detalle.price}</h3>
                                <p className="card-text">{detalle.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-7">
                            <p className="card-text">Producto</p>
                        </div>
                        <div className="col-2">
                        <p className="card-title ">Cant.</p>
                        </div>
                        <div className="col-3">
                            <p className="card-title ">Importe</p>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-7">
                            <p className="card-text">{detalle.title}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-title "><strong>1</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="card-title "><strong>{detalle.price}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Link to={`/confirm/${detalle.id}`} className="btn btn-dark"> Pagar</Link>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Checkout;
