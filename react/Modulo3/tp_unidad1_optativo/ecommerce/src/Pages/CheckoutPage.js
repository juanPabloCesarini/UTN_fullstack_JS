import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Checkout from "../Components/Checkout";
import Footer from "../Components/Footer";
import { getById } from "../Services/ItemServices";
import { useParams, Link } from "react-router-dom";

const CheckoutPage = () => {
    const [loading, setloading] = useState(true)
    const [detalle, setDetalle] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getById(id)
            .then(({ data }) => {
                console.log("byid: " + data)
                setloading(false)
                setDetalle(data)
            })
      
    }, [id])
    

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
        
                <h4 className="text-center m-5">Detalle del Carrito</h4>
                
                <Checkout key={detalle.id} detalle={detalle}></Checkout>
            <Footer/>
            </>
        )
    }
    

}
export default CheckoutPage;