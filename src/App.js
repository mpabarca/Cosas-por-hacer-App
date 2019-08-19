import React, { Component } from 'react';
import axios from 'axios';
import './bootstrap.min.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import atrasada from './recursos/atrasada.png';
import liberada from './recursos/liberada.png';
import pendiente from './recursos/pendiente.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            date: '',
            timestamp: 0,
            numberTask: 0
        };
    }

    createNewTask = data => {
        axios.post('http://localhost:3001/tasks', data)
            .then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
    }


    componentDidMount() {
        var date = new Date();
        date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        var timestamp = new Date().getTime();
        let url = 'http://localhost:3001/tasks';
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let tasks = data.map((task, index) => {
                    if(task.state==='pendiente'){
                        return ( 
                            <div className = "card card-form" key = { task.id } >
                              <div className = "card-body row" >
                                <div class="col-md-2 col-lg-2 form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1" /></div>
                                <h5 className = "col-md-6 col-lg-6" > { task.description } </h5>
                                <p className = "col-md-2 col-lg-2 text-center task-date" > { task.date } </p>
                                <p className = "col-md-2 col-lg-2" ><img src={pendiente} alt="Logo" /></p>
                              </div> 
                            </div>
                          )
                    }else if(task.state==='atrasada'){
                        return ( 
                            <div className = "card card-form" key = { task.id } >
                              <div className = "card-body row" >
                                <div class="col-md-2 col-lg-2 form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1" /></div>
                                <h5 className = "col-md-6 col-lg-6" > { task.description } </h5>
                                <p className = "col-md-2 col-lg-2 text-center task-date" > { task.date } </p>
                                <p className = "col-md-2 col-lg-2" ><img src={atrasada} alt="Logo" /></p>
                              </div> 
                            </div>
                          )
                    }else if(task.state==='liberada'){
                        return ( 
                            <div className = "card card-form" key = { task.id } >
                              <div className = "card-body row" >
                                <div class="col-md-2 col-lg-2 form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1" /></div>
                                <h5 className = "col-md-6 col-lg-6" > { task.description } </h5>
                                <p className = "col-md-2 col-lg-2 text-center task-date" > { task.date } </p>
                                <p className = "col-md-2 col-lg-2" ><img src={liberada} alt="Logo" /></p>
                              </div> 
                            </div>
                          )
                    }
                    
                })
                this.setState({
                    tasks: tasks,
                    date: date,
                    timestamp: timestamp
                });
            })
    }
    componentDidUpdate() {
        let url = 'http://localhost:3001/tasks';
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let tasks = data.map((task, index) => {
                    if(task.state==='pendiente'){
                        return ( 
                            <div className = "card card-form" key = { task.id } >
                              <div className = "card-body row" >
                                <div class="col-md-2 col-lg-2 form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1" /></div>
                                <h5 className = "col-md-6 col-lg-6" > { task.description } </h5>
                                <p className = "col-md-2 col-lg-2 text-center task-date" > { task.date } </p>
                                <p className = "col-md-2 col-lg-2" ><img src={pendiente} alt="Logo" /></p>
                              </div> 
                            </div>
                          )
                    }else if(task.state==='atrasada'){
                        return ( 
                            <div className = "card card-form" key = { task.id } >
                              <div className = "card-body row" >
                                <div class="col-md-2 col-lg-2 form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1" /></div> 
                                <h5 className = "col-md-6 col-lg-6" > { task.description } </h5>
                                <p className = "col-md-2 col-lg-2 text-center task-date" > { task.date } </p>
                                <p className = "col-md-2 col-lg-2" ><img src={atrasada} alt="Logo" /></p>
                              </div> 
                            </div>
                          )
                    }else if(task.state==='liberada'){
                        return ( 
                            <div className = "card card-form" key = { task.id } >
                              <div className = "card-body row" >
                                <div class="col-md-2 col-lg-2 form-group form-check"> <input type="checkbox" class="form-check-input" id="exampleCheck1" /></div>
                                <h5 className = "col-md-6 col-lg-6" > { task.description } </h5>
                                <p className = "col-md-2 col-lg-2 text-center task-date" > { task.date } </p>
                                <p className = "col-md-2 col-lg-2" ><img src={liberada} alt="Logo" /></p>
                              </div> 
                            </div>
                          )
                    }
                    
                })
                this.setState({
                    tasks: tasks
                });
            })
    }
    render() {
        return ( 
        <div className = "container app" >
          <Header 
            title = 'COSAS POR HACER'
            actualDate = { this.state.date }
          />    
          { this.state.tasks } 
          <NewTask 
            createNewTask = { this.createNewTask }
          />    
        </div>
        );
    }
}

export default App;
