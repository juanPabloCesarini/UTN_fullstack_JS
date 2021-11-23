import { React, useState, useEffect } from "react"
import firebase from '../Config/firebase';
import {Link} from 'react-router-dom'
import HeaderAdmin from "../Components/Admin/HeaderAdmin";
import FooterAdmin from "../Components/Admin/FooterAdmin";
function ReadProduct(){
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
        },[]
    )
    return(
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <h3>Productos</h3>
                    </ul>
                    <ul className="nav col-md-3 text-end">
                        <li className="nav-item"><Link to="/admin/productos/nuevo" className="nav-link btn btn-primary m-2 text-white">Agregar + </Link></li>
                    </ul> 
                </div>
            </div>
                 
                
            
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12">
                    <div className="card card-body bg-light mt-5">
                        <div className="col-md-12 table-responsive-sm">
                            <table className="table table-hover">
                                <thead  className="thead-dark">
                                    <tr>
                                        <th scope="col">Código</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">SKU</th>
                                        <th scope="col">$</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos &&
                                        productos.map((producto, index) => (
                                            <tr key={producto.id}>
                                                <td>{(index + 1)}</td>
                                                <td>{producto.data().nombre}</td>
                                                <td>{producto.data().descripcion}</td>
                                                <td>{producto.data().sku}</td>
                                                <td>{producto.data().precio}</td>
                                                <td>
                                                <div className="form-group text-center">
                                                    <Link to={`/admin/productos/editar/${producto.id}`} className="btn btn-success btn-sm m-2">Editar</Link>
                                                    <Link to={`/admin/productos/borrar/${producto.id}`}  className="btn btn-danger btn-sm m-2">Borrar</Link>
                                                </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAdmin></FooterAdmin>
        </>
    )
}
export default ReadProduct