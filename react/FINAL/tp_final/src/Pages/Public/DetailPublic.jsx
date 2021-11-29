import { React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DetPublic from "../../Components/Public/DetPublic";
import FooterPublic from "../../Components/Public/FooterPublic";
import HeaderPublic from "../../Components/Public/HeaderPublic";
import firebase from "../../Config/firebase";
import Loading from "../../Components/Loading";

function DetailPublic() {

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
                <HeaderPublic />
                
                    <Loading />
             
                
            </>
        )
    } else {
        return (
            <>
                <HeaderPublic />
                <div className="bg-dark">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="col-4">
                                <DetPublic key={producto.id} producto={producto} />
                            </div>
                        </div>
                    </div>
                </div>
             
                <FooterPublic />
            </>
        )
    }
}
export default DetailPublic;