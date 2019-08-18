import React, {Component} from 'react';
import axios from 'axios';
import './bootstrap.min.css';
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
    let newTasks=[...this.state.tasks, data];
    this.setState({
      tasks: newTasks,
      numberTask: (this.state.numberTask) +1
    })

    console.log(this.state.tasks)
  }


  componentDidMount(){
    var date = new Date();
    date = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    var timestamp = new Date().getTime();
    let url = 'http://localhost:3001/tasks'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let tasks = data;
        let readTask =data.map((task,index)=>{
          return(
            <div key={task.id}>
              <h3>{task.description}</h3>
              <p>Fecha: {task.date}</p>
              <p>Estado: {task.state}</p>
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
  render(){
    console.log(this.state.tasks)
    return(
      <div className="container">
        <Header
          title='COSAS POR HACER'
          actualDate = {this.state.date}
        />  
        <NewTask
          createNewTask={this.createNewTask}
          numberTask={this.state.numberTask}
        />      
      </div>
    );
  }
}

export default App;
/*{this.state.tasks}*/