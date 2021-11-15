import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../Config/firebase";

function AltaProd(){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try{
            const document = await firebase.db.collection("productos")
            .add(data)
            console.log(document);
        }catch(e){
            console.log(e.code)
        }
    }
    return(
        <div className="col-6 p-3">
            < div className="card shadow bg-secondary">
                <h3 className="m-2">Nuevo Producto</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="m-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("title", { required: true })} className="form-control" placeholder="Nombre"/>
                                {errors.title?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("price", { required: true })} type="number" className="form-control" placeholder="Precio" />
                                {errors.price?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <input {...register("description", { required: true})} type="text" className="form-control" placeholder="Descripcion" />
                                {errors.description?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark m-2">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AltaProd;