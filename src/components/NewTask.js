import React, {Component} from 'react';

class NewTask extends Component{
    state ={ }

    render(){
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h3 className="card-title text-center mb-5">
                        Rellenar formulario para crear nueva tarea
                    </h3>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Descripción de la Tarea
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción tarea"
                                    name="description"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha límite
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="DD/MM/AAAA"
                                    name="date"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTask;