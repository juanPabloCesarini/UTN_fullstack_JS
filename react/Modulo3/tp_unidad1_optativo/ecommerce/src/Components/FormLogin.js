import React  from "react";
import { useForm } from "react-hook-form";

function FormLogin(){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div className="col-6 p-3">
            < div className="card shadow bg-secondary">
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
                                <input {...register("pass", { required: true, maxLength:8 })} type="password" className="form-control" placeholder="Contraseña" />
                                {errors.pass?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                {errors.pass?.type === 'maxLength' && <p class="text-danger"><b>La clave no puede tener más de 8 caracteres</b></p>}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark m-2">Ingresar</button>
                    
                </form>
            </div>
        </div>
    )
}
export default FormLogin;