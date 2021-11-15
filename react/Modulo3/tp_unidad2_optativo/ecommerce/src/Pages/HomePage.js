import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const HomePage = () => {
    const [loading, setloading] = useState(true)
    const [productos, setProductos] = useState([])


    useEffect(
        () => {
            async function request(){
                try {
                    const querySnapshot = await firebase.db.collection("productos")
                    .get()
                    if (querySnapshot.docs){
                        setProductos(querySnapshot.docs)
                        setloading(false)
                    }
                }catch(e){

                }
            }
            request()
        },[]
    )
    

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
                            return <Product datos={{...producto.data(),id:producto.id}}></Product>;
                        })}

                </div>
            </div>
            <Footer/>
            </>
        )
    }
    

}
export default HomePage;