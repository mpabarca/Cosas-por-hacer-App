import React, {Component} from 'react';

class NewTask extends Component{
    constructor(props){
        super(props);
        this.createNewTask=this.createNewTask.bind(this);
        this.descriptionRef=React.createRef();
        this.dateRef=React.createRef();
    }
    
    createNewTask(e){
        e.preventDefault();
        let dateTask=(this.dateRef.current.value).split('-');
        dateTask= dateTask[2] + '/' + dateTask[1] + '/' + dateTask[0];
        let newTask = {
            description: this.descriptionRef.current.value,
            date: dateTask,
            state: 'pendiente'
        }
        this.props.createNewTask(newTask);
    }

    render(){
        return(
            <div className="card card-form mt-5 py-5">
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