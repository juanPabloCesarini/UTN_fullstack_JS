import React, {useState} from 'react';
import ProductsPage from '../Pages/ProductsPage';


const Product = ({producto}) => {

    
    return (    
        <div className="col-3 mt-5">
            <div className="card shadow">
                <img src={producto.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">$ {producto.price}</p>
                    <div className="card-body text-center">
                        <button className="btn btn-warning" ><i className="bi bi-eye-fill m-2"></i>Ver Detalle</button>                       
                    </div> 
                </div>
            </div>
        </div>  
    );
}

export default Product;
