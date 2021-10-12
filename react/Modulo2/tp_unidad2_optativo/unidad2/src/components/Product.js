import React, {useState} from 'react';
import Productos from '../Pages/Productos';


const Product = ({producto}) => {
        const [thanks, setThanks] =useState("");
    
    return (    
        <div className="container">
            <div className="row mt-2">
            <div className="col-4">
                <div className="card shadow p-3 m-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <p><strong>Nombre: </strong></p>
                            </div>
                            <div className="col">
                                <p>{producto.name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>Descripción: </strong></p>
                                
                            </div>
                            <div className="col">
                                {producto.description}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>Precio: </strong></p>
                            </div>
                            <div className="col">
                                <p className="h3">{producto.price}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>SKU: </strong></p>
                            </div>
                            <div className="col">
                                {producto.sku}
                                <p>CODC176849E142205</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p><strong>Stock: </strong></p>
                            </div>
                            <div className="col">
                                <p>{producto.stock}</p>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-outline-success" onClick={()=>setThanks("Gracias por tu compra!")}>Comprar</button>
                        </div>
                        <div className="row text-center mt-3">
                                <h3>{thanks}</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Product;
