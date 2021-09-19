import React from 'react';
import './product.css';

const Product = () => {
    return (    
        <div className="container">
            <div className="row justify-content-center shadow mt-2">
                <div className="card shadow col-6 p-3 m-3 bg-card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <p><strong>Nombre: </strong></p>
                            </div>
                            <div className="col">
                                <p>CELULAR SAMSUNG A02 NEGRO</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>Descripción: </strong></p>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>Alto: 16.42</li>
                                    <li>Ancho: 7.59</li>
                                    <li>Color: NEGRO</li>
                                    <li>Memoria RAM: 2GB</li>
                                    <li>Bluetooth: SI</li>
                                    <li>Camara principal: 13 + 2MP</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>Precio: </strong></p>
                            </div>
                            <div className="col">
                                <p className="h3">$19.999,00</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>SKU: </strong></p>
                            </div>
                            <div className="col">
                                <p>CODC176849E142205</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>Stock: </strong></p>
                            </div>
                            <div className="col">
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
