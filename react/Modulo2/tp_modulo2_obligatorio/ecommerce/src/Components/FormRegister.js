import React, {useState} from "react";

function FormRegister(){
    const [form,setForm] = useState({nombre:'', apellido:'', email:'', password:''})

    const handleSubmit = (e) =>{
        console.log('form' + form)
        e.preventDefault()
    }

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        setForm({...form, [name]:value})
    }

    return(
        <div className="col-6 p-3">
            < div className="card shadow bg-secondary">
                <h3 className="m-2">Registro</h3>
                <form onSubmit={handleSubmit} className="m-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" name="email"placeholder="Email" value={form.email} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input type="password" className="form-control" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark m-2">Ingresar</button>
                    <button type="submit" className="btn btn-dark m-2">Registrarse</button>
                </form>
            </div>
        </div>
    )
}
export default FormRegister;