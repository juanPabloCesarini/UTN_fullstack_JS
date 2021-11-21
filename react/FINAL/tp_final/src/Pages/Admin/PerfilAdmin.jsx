
import React, {useEffect,useState} from 'react';
import FooterAdmin from '../../Components/Admin/FooterAdmin';
import HeaderAdmin from '../../Components/Admin/HeaderAdmin';
import Perfil from '../../Components/Admin/Perfil';
import firebase from '../../Config/firebase';
import 'firebase/compat/firestore';

function PerfilAdmin() {

  const [loading, setloading] = useState(true)
  const [administradores, setAdministradores] = useState([])
  useEffect(
    () => {
        async function request(){
            try {
                const querySnapshot = await firebase.db.collection("administradores")
                .get()
                if (querySnapshot.docs){
                    setAdministradores(querySnapshot.docs)
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
            <HeaderAdmin/>
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
            <HeaderAdmin/>
            <div className="container">
                <div className="row mt-5">
                    
                    { administradores.map(administrador => { 
                            return <Perfil datos={{...administrador.data(),id:administrador.id}}></Perfil>;
                        })}

                </div>
            </div>
            <FooterAdmin/>
            </>
        )
    }
    
}

export default PerfilAdmin;