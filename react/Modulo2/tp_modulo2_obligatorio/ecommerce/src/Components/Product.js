import React, {useState} from 'react';
import Productos from '../Pages/ProductsPage';


const Product = ({producto}) => {
const [thanks, setThanks] =useState("");
    
    return (    
        <div className="col-4 mt-5">
            <div className="card shadow">
                <img src={producto.photo_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">{producto.description}</p>
                    <div className="card-body text-center">
                        <button className="btn btn-warning" ><i className="bi bi-eye-fill"></i>Ver Detalle</button>                       
                    </div> 
                </div>
                <button className="btn btn-success" onClick={()=>setThanks("Gracias por tu compra!")}>Comprar</button>
                <h5 className="card-title text-success text-center mt-3">{thanks}</h5>
            </div>
        </div>  
    );
}

export default Product;
