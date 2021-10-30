import React from 'react';
import { Link } from "react-router-dom";


const Detail = ({detalle}) => {
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
                <tbody>
                    <tr className="mt-2">
                        <td><img src={detalle.image} className="card-img-top" style={foto} alt="..." /></td>
                        <td style={col2}><h5>{detalle.title}</h5></td>
                        <td style={col3}><h5 className="text-right">$ {detalle.price}</h5></td>
                        <td className="text-center" style={col3}><Link to="/detalle" className="btn btn-warning" ><i className="bi bi-eye-fill m-2"></i>Ver Detalle</Link> </td>
                    </tr>
                </tbody>
        </table>

        </>
    );
}

export default Detail;
