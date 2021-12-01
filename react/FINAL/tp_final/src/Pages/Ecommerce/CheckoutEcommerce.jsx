import { React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CheckEcommerce from '../../Components/Ecommerce/CheckEcommerce';
import FooterEcommerce from "../../Components/Ecommerce/FooterEcommerce";
import HeaderEcommerce from "../../Components/Ecommerce/HeaderEcommerce";
import firebase from "../../Config/firebase";
import Loading from "../../Components/Loading";

function CheckoutEcommerce() {

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])

        useEffect(
        () => {
            const request = async () => {
                try {
                    const response = await firebase.db.doc("productos/" + id)
                        .get()
                    console.log(response.data())
                    if (response.data()) {
                        setProducto(response)
                        setLoading(false)
                    } 

                } catch (e) {
                    console.log(e);
                }
            }
            request()
        }, [id])
    if (loading) {
        return (
            <>
                <HeaderEcommerce />
                
                    <Loading />
             
                
            </>
        )
    } else {
        return (
            <>
                <HeaderEcommerce />
                <div className="bg-dark">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            
                                <CheckEcommerce key={producto.id} producto={producto} />
    
                        </div>
                    </div>
                </div>
             
                <FooterEcommerce />
            </>
        )
    }
}
export default CheckoutEcommerce;