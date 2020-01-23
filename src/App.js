import React from 'react';
import './App.css';
import Todo from './Todo'
import NewTask from './NewTask';
import uuid from 'react-uuid'

class App extends React.Component {
  state={
    data: [
      {
        id: 1, task: 'Learn React', completed: false
      },
      {
        id: 2, task : 'Make changes on project', completed: false
      }
    ],
    error: false,
    message: ''
  }

  createTask = task => {
    if(task === ''){
      this.setState({
        error: true
      })
    }
    const allTask = this.state.data.map(items => items.task);
      if(!allTask.includes(task) && task !== ''){
      this.setState({
        data: [...this.state.data, {id: uuid(), task: task}],
        error: false
      })
    }
  }



  removeTask = id => {
    const task = this.state.data.filter( item => item.id !== id);
    this.setState({
      data: task
    })
  }

  updateSelectedTask = (id, updateTask) => {
    const allTask = this.state.data.map( items => {
      if(items.id === id){
        return {...items, task: updateTask}
      }
      return items;
    })
    this.setState({
      data: allTask
    })
  }


  toggleCompletion = (id) => {
    const completed = this.state.data.map( items => {
      if(items.id === id){
        return {...items, completed: !items.completed}
      }
      return items;
    })
    this.setState({
      data: completed
    })
  }

  render(){
    const { data } = this.state;

    return (
      <div className="container">
        <h1>Todo List</h1>
          <div className="newTask-form">
            <NewTask
              createTask = {this.createTask}
            />
            {this.state.error ?
            <p className="error">Please, fill field and press Enter!</p>  : ''}
          
          </div>
        <div className="tasks">
            {data.map( task => 
              <Todo key={task.id}  
                    id={task.id}
                    task={task}
                    removeTask = {this.removeTask}
                    oldTask = {task.task}
                    completed={task.completed}
                    updateSelectedTask={this.updateSelectedTask}
                    toggleCompletion={this.toggleCompletion}
                    
              />
            )}
        </div>        
      </div>
    )
  }
}

export default App;