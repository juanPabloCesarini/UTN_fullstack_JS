import { React, useState, useEffect } from 'react';
import { useHistory , useParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../Config/firebase';
import HeaderAdmin from './../Components/Admin/HeaderAdmin';
import FooterAdmin from '../Components/Admin/FooterAdmin';

function UpdateProduct(){
    const { register, handleSubmit, formState: { errors },setValue } = useForm();
    const [image, setImage] = useState([])
    const [url, setUrl] = useState()
    const history = useHistory()
    const {id}=useParams()

    const onSubmit = async (data) => {
        try{
            if(image){
                const storageRefer = firebase.storage.ref('productos/images').child(id)
                await storageRefer.put(image);
                setUrl(await storageRefer.getDownloadURL())
            }
            await firebase.db.doc("productos/"+id)
            .set({
                nombre:data.nombre,
                descripcion: data.descripcion,
                precio:data.precio,
                sku:data.sku,
                imagen:url,
            })
            
            history.push('/admin/productos/lista')
        }catch(e){
            console.log(e);
        }
    }
    useEffect(
        () =>{
            const request = async () => {
                try{
                    const response = await firebase.db.doc("productos/"+id)
                    .get()
                    
                    if(response.data()){
                        setValue('nombre', response.data().nombre)
                        setValue('descripcion', response.data().descripcion)
                        setValue('precio', response.data().precio)
                        setValue('sku', response.data().sku)
                        setUrl(response.data().imagen)
                    }
                }catch(e){
                    console.log(e);
                }
            }
            request()
        },[id,setValue]
        
    )
    return(
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className="col-12 p-3">
             <div className="card shadow bg-light">
                <h3 className="m-2">Modificación de Producto</h3>
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
                                <input {...register("descripcion", { required: true })} type="text" className="form-control" placeholder="Descripcion" />
                                {errors.descripcion?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("precio", { required: true })} type="number" className="form-control" placeholder="Precio" />
                                {errors.precio?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input {...register("sku", { required: true, minLength:10 })} type="number" className="form-control" placeholder="SKU" />
                                {errors.sku?.type === 'required' && <p class="text-danger"><b>Campo obligatorio</b></p>}
                                {errors.sku?.type === 'minLength' && <p class="text-danger"><b>El SKU debe tener mínimo 10 dígitos</b></p>}
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <input {...register('imagen',  
                                            {
                                                onChange: (event) => setImage(event.target.files[0]),
                                                validate: {
                                                    validateSize: files => files[0]?.size < 10000000 || 'Tamaño Maximo 10MB',
                                                    validateFormats: files => ['image/jpeg', 'image/png'].includes( files[0]?.type) || 'Solo se Permiten los Formatos PNG y JPEG',
                                                }
                                            } )
                                        } className="form-control" type="file" id="formFile"/>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-2">Guardar cambios</button>
                </form>
            </div>
        </div>
            <FooterAdmin></FooterAdmin>
        </>
    )
}
export default UpdateProduct;