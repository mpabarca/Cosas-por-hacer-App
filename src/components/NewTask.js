import React, {Component} from 'react';
import { throwStatement } from '@babel/types';

class NewTask extends Component{
    constructor(props){
        super(props);
        this.createNewTask=this.createNewTask.bind(this);
        this.descriptionRef=React.createRef();
        this.dateRef=React.createRef();
    }
    
    createNewTask(e){
        e.preventDefault();
        let newTask = {
            id: this.props.numberTask,
            description: this.descriptionRef.current.value,
            date: this.dateRef.current.value,
            state: 'pendiente'
        }
        this.props.createNewTask(newTask);
    }

    render(){
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h3 className="card-title text-center mb-5">
                        Rellenar formulario para crear nueva tarea
                    </h3>
                    <form
                        onSubmit={this.createNewTask}
                    >
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
                                    ref={this.descriptionRef}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha límite
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="DD/MM/AAAA"
                                    name="date"
                                    ref={this.dateRef}
                                />
                            </div>
                        </div>

                        <input 
                            type="submit" 
                            className="py-2 mt-5 btn btn-success btn-block"
                            value="Agregar tarea"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTask;