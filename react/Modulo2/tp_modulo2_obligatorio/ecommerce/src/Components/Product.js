import React, {useState} from 'react';
import ProductsPage from '../Pages/ProductsPage';


const Product = ({producto}) => {
    const foto = {
        width: '50px',
        height: '50px',
        margin: '10px',
    }
    const col3 = {
        width: '150px'
    }
    const col2 = {
        width:'750px'
    }
    return (
        <>
        <table>
            <tr className="mt-2">
                    <td><img src={producto.image} className="card-img-top" style={foto} alt="..." /></td>
                    <td style={col2}><h5>{producto.title}</h5></td>
                    <td style={col3}><h5 className="text-right">$ {producto.price}</h5></td>
                    <td className="text-center" style={col3}><button className="btn btn-warning" ><i className="bi bi-eye-fill m-2"></i>Ver Detalle</button> </td>
            </tr>
        </table>

        </>
    );
}

export default Product;
