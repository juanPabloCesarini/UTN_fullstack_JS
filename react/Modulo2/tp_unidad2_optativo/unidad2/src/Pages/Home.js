import { useEffect, useState } from "react";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
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
            <Header/>
            <div className="container">
                <div className="row mt-5">
                    <h4 className="h4 text-center">Nuestros Productos</h4>
                        { productos.map(producto => { 
                            return <Product key={producto.id} producto={producto}></Product>;
                        })}

                </div>
            </div>
            <Footer/>
            </>
        )
    }
    

}
export default Home;