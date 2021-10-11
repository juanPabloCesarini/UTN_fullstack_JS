import React from 'react';


const Formulario = () => {
    return (
        <div className="container">
            <div className="card shadow rounded-3 mt-5">
                <div className="card-body">
                    <h3 className="card-title text-center">Formuario de Registro</h3>
                    <form>
                        <div className="row mt-3">
                            <div className="col-6">  
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i className="bi bi-person-fill text-info h3"></i></span>
                                    <input type="text" class="form-control" placeholder="Nombre"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i className="bi bi-person-fill text-info h3"></i></span>
                                    <input type="text" class="form-control" placeholder="Apellido" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">  
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i className="bi bi-envelope-fill text-info h3"></i></span>
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i className="bi bi-telephone-fill text-info h3"></i></span>
                                    <input type="phone" class="form-control" placeholder="Teléfono" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill text-info h3"></i></span>
                                    <input type="password" class="form-control" placeholder="Contraseña" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill text-info h3"></i></span>
                                    <input type="password" class="form-control" placeholder="Repetir contraseña" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <button type="submit" className="btn btn-info shadow h3 text-dark">Enviar</button>
                        </div>        
                    </form> 
                </div>
            </div>
        
        </div>
    );
}

export default Formulario;
