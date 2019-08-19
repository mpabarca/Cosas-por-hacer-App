import React, {Component} from 'react';
import axios from 'axios';
import './bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import NewTask from './components/NewTask';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      tasks: [],
      date: '',
      timestamp: 0,
      numberTask: 0
    };
  }

  createNewTask = data => {
    /*let newTasks=[...this.state.tasks, data];
    this.setState({
      tasks: newTasks,
      numberTask: (this.state.numberTask) +1
    })*/
    axios.post('http://localhost:3001/tasks', data)
      .then(resp => {
        console.log(resp.data);
      }).catch(error =>{
        console.log(error);
      });
  }


  componentDidMount(){
    var date = new Date();
    date = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    var timestamp = new Date().getTime();
    let url = 'http://localhost:3001/tasks'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let tasks =data.map((task,index)=>{
          return(
            <div className="card" key={task.id}>
              <div className="card-body row">
                <h5 className="col-md-6 col-lg-6">{task.description}</h5>
                <p className="col-md-4 col-lg-4">Fecha: {task.date}</p>
                <p className="col-md-2 col-lg-2"><FontAwesomeIcon icon={['far', 'faClock']}/></p>
              </div>
            </div>
          )
        })
        this.setState({
          tasks: tasks,
          date: date,
          timestamp: timestamp
        });
      })
  }
  componentDidUpdate(){
    let url = 'http://localhost:3001/tasks'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let tasks =data.map((task,index)=>{
          return(
            <div className="card" key={task.id}>
              <div className="card-body row">
                <h5 className="col-md-8 col-lg-8">{task.description}</h5>
                <p className="col-md-2 col-lg-2 text-center task-date">{task.date}</p>
                <p className="col-md-2 col-lg-2"><FontAwesomeIcon icon={['far', 'faClock']}/></p>
              </div>
            </div>
          )
        })
        this.setState({
          tasks: tasks
        });
      })
  }
  render(){
    return(
      <div className="container app">
        <Header
          title='COSAS POR HACER'
          actualDate = {this.state.date}
        />   
        {this.state.tasks}
        <NewTask
          createNewTask={this.createNewTask}
        />   
      </div>
    );
  }
}

export default App;
/**/