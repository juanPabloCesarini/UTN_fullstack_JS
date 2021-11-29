import { React, useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import firebase from '../../Config/firebase';

function ProdPublic() {
     const [productos, setProductos] = useState([])

    useEffect(
        () => {
            const request = async () =>{
                try {
                    const querySnapshot = await firebase.db.collection("productos")
                    .get()
                    if(querySnapshot.docs){
                        setProductos(querySnapshot.docs)
                    }
                }catch (e){
                    console.log(e);
                }
            }
            request()
        }, []
    )
    const foto = {
        width: '100%',
        height: '250px',
    }
    return (
        <>
            
                
            {productos && productos.map((producto) => (
                <>
                    
                        <div className="col">
                            <div className="card shadow-sm bg-white">
                                <h1 className="card-title text-center">{ producto.data().nombre}</h1>
                                <img src={producto.data().imagen} className="bd-placehorder card-img-top" style={foto} alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-center">$ { producto.data().precio}</h3>
                                    <p className="card-text">{producto.data().descripcion}</p>
                                    <p className="card-text">SKU: { producto.data().sku}</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn-group">
                                            <Link to ={`/detalle/${producto.id}`} type="button" class="btn btn-sm btn-primary"><i class="bi bi-eye-fill m-1"></i>Ver detalle</Link>
                                            <button type="button" class="btn btn-sm btn-primary"><i class="bi bi-cart4 m-1"></i>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </>
            ))}
                
        </>
    );

}
export default ProdPublic;