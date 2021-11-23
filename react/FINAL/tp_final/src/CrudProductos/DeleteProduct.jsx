import { React, useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import firebase from '../Config/firebase';
import ReadProduct from "./ReadProduct";


function DeleteProduct(){
    const {id} = useParams()
    const history = useHistory()

    const handelDelete = async ()=>{
        try {
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
            history.push("/admin/productos/lista")
            
        }catch(e){
            console.log(e)
        }
    }
    handelDelete()
    return (
        <ReadProduct/>
    )
}
export default DeleteProduct