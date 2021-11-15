import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Product (props){
    const {datos} = props
  
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
                        
                        
                        <td style={col2}><h5>{datos.title}</h5></td>
                        <td style={col2}><h5>{datos.description}</h5></td>
                        <td style={col3}><h5 className="text-right">$ {datos.price}</h5></td>
                       
                    </tr>
            </table>

        </>
    );
}

export default Product;
