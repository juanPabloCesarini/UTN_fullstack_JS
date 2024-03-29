import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import { getAll } from "../Services/ItemServices";

const HomePage = () => {
    const [loading, setloading] = useState(true)
    const [productos, setProductos] = useState([])
    useEffect(() => {
       getAll()
        .then(({data}) =>{
            console.log(data)
            setloading(false)
            setProductos(data)
        })
    }, [])
    

    if(loading){
        return (
            <>
            <Header/>
            <div className="text-center mt-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            </>
        );
    }else{
        return(
            <>
            <Header/>
            <div className="container">
                <div className="row mt-5">
                    
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
export default HomePage;