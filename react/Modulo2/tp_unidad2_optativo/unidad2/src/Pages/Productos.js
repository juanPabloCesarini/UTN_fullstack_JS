import { useEffect, useState } from "react";
import Product from "../components/Product";

const Productos = () => {
    const [loading, setloading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch("https://jsonfy.com/items")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setloading(false)
            setProductos(data)
        })
    }, [])
    

    if(loading){
        return (  
            <div className="text-center mt-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }else{
        return(
            <>
    
            <div>
                { productos.map(producto => {
                    
                    return <Product key={producto.id} producto={producto}></Product>;
                })}
            </div>
    
            </>
        )
    }
    

}
export default Productos;