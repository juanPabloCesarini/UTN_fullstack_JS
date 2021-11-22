import React  from "react";
import { useForm } from "react-hook-form";
import firebase from "../../Config/firebase";
import { Link, useHistory } from 'react-router-dom';

function FormLogin(){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = async (data)  => {
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.pass)
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection("administradores")
                .where("userAdminId", "==",responseUser.user.uid)
                .get()
                history.push('/admin/perfil/');
                
                
            }
        }catch(e){
            console.log(e)
        }
    } 

    return(
        <div className="col-6 p-3">
            < div className="card shadow bg-light">
                <h3 className="m-2">Ingresar</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="m-5">
               
                    <div className="container">
                        <div className="row">
                            <div className="mb-3">
                                <input {...register("email", { required: true, pattern: /\S+@\S+/ })} type="text" className="form-control" placeholder="Email" />
                                {errors.email?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                {errors.email?.type === 'pattern' && <p class="text-danger"><b>Email incorrecto</b></p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <input {...register("pass", { required: true, maxLength:6 })} type="password" className="form-control" placeholder="Contraseña" />
                                {errors.pass?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                {errors.pass?.type === 'maxLength' && <p class="text-danger"><b>La clave no puede tener más de 6 caracteres</b></p>}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Ingresar</button>
                    
                </form>
            </div>
        </div>
    )
}
export default FormLogin;