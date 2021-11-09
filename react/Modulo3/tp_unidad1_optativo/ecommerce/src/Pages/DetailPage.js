import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Detail from "../Components/Detail";
import Footer from "../Components/Footer";
import { getById } from "../Services/ItemServices";
import { useParams, Link } from "react-router-dom";

const DetailPage = () => {
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
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h4 className="text-center m-5">Detalle del producto</h4>
                        <Detail key={detalle.id} detalle={detalle}></Detail>
                    </div>
                </div>
            <Footer/>
            </>
        )
    }
    

}
export default DetailPage;