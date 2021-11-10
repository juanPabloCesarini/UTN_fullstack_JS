import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import { getAll } from "../Services/ItemServices";
import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const HomePage = () => {
    const [loading, setloading] = useState(true)
    const [productos, setProductos] = useState([])

    const firebaseConfig = {
        apiKey: "AIzaSyBCwCwTb1LLbaiExWEljLf9GxgtQMjujfA",
        authDomain: "ecommerce-8c444.firebaseapp.com",
        projectId: "ecommerce-8c444",
        storageBucket: "ecommerce-8c444.appspot.com",
        messagingSenderId: "1006812424982",
        appId: "1:1006812424982:web:f9e97beeb2616bb0b7fe37"
      };
      
      // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.log(app.firestore())
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