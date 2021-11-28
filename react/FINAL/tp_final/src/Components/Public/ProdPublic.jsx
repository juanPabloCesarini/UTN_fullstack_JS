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
          <div className="card shadow-sm bg-secondary">
            {productos && productos.map((producto, index) => (
                <>
                    <h1 className="card-title text-center">{ producto.data().nombre}</h1>
                    <img src={producto.data().imagen} className="bd-placehorder card-img-top" style={foto} alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">$ { producto.data().precio}</h3>
                        <p className="card-text">{producto.data().descripcion}</p>
                        <p className="card-text">SKU: { producto.data().sku}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                    </div>
                    </div>
                </>
            ))}
            </div>
        </>
    );

}
export default ProdPublic;