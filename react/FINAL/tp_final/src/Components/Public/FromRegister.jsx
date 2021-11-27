import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../Config/firebase";

function FormRegister(){
 
    const { register, formState: { errors }, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        //console.log("data: ", data);
        
        firebase.auth.createUserWithEmailAndPassword(data.email,data.pass)
        .then(responseUser=>{
            console.log(responseUser.user.uid)
            
          
            if (responseUser.user.uid){
                const document = firebase.db.collection("usuarios")
                .add({
                    nombre:data.nombre,
                    apellido:data.apellido,
                    userId: responseUser.user.uid
                })
                
                history.push("/");
              
                
            }

        })

    }
    return(
        <div className="col-6 p-3">
            < div className="card shadow bg-light">
                <h3 className="m-2">Registro</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="m-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("nombre", { required: true })} className="form-control" placeholder="Nombre"/>
                                {errors.nombre?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("apellido", { required: true })} type="text" className="form-control" placeholder="Apellido" />
                                {errors.apellido?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("email", { required: true, pattern: /\S+@\S+/ })} type="text" className="form-control" placeholder="Email" />
                                {errors.email?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                {errors.email?.type === 'pattern' && <p class="text-danger"><b>Email incorrecto</b></p>}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("pass", { required: true, maxLength:8 })} type="password" className="form-control" placeholder="Contraseña" />
                                {errors.pass?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                {errors.pass?.type === 'maxLength' && <p class="text-danger"><b>La clave no puede tener más de 8 caracteres</b></p>}
                            </div>
                        </div>
                    </div>
                    <Link to ="/admin/login" className="btn btn-primary m-2">Ingresar</Link>
                    <button type="submit" className="btn btn-primary m-2">Registrarse</button>
                </form>
            </div>
        </div>
    )
}
export default FormRegister;