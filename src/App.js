import React, {Component} from 'react';
import './bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      tasks: []
    };
  }

  componentDidMount(){
    let url = 'http://localhost:3001/tasks'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let tasks =data.map((task,index)=>{
          return(
            <div key={task.id}>
              <h3>{task.description}</h3>
              <p>Fecha: {task.date}</p>
              <p>Estado: {task.state}</p>
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
      <div className="App">
        {this.state.tasks}
      </div>
    );
  }
}

export default App;
