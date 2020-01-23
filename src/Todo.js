import React from 'react'
import './Todo.css';

class Todo extends React.Component {
    state = {
        newTask: this.props.oldTask,
        isEditing: false
    }

    remove = (e) => {
        e.stopPropagation()
        this.props.removeTask(this.props.task.id)
    }

    formEdit = (e) => {
        e.preventDefault();
        this.props.updateSelectedTask(this.props.id, this.state.newTask)
        this.setState({
            isEditing: false
        })
    }

    handleChange = (e) =>{
        this.setState({
             newTask:e.target.value
        })
       
    }
    toggleForm = () => {
        this.setState({
                isEditing: !this.state.isEditing
            })
    }

    completedTask = (e) =>{
        e.stopPropagation(true)
        this.props.toggleCompletion(this.props.id);
    }
    render(){
            const {task, completed} =this.props;
        return (

            !this.state.isEditing ? (
            <li                 
                className="task"
            > 
            <div className="task-value">
            <span onClick={this.completedTask} className={`${completed ? "completed" : ""}`}>
                {task.task}          
            </span>
            {completed ? <span className="message">Completed!</span>: ''}
            </div>
                <div className="buttons">                    
                        <ion-icon 
                            name="create" 
                            onClick={this.toggleForm}
                            title="Edit"
                        ></ion-icon>

                        <ion-icon 
                            name="trash" 
                            onClick={this.remove}
                            title="Delete"
                        ></ion-icon>
                </div>              
            </li>
            ) : (
                <div className="task edit-task">
                    <form onSubmit={this.formEdit}>
                        <input type="text"
                            name="task"
                            className="edit-task-field"
                            value={this.state.newTask}
                            onChange={this.handleChange}
                        />
                         <button className="btn btn-edit-save">OK</button>
                    </form>
                </div>
            )
        )
    }
}

export default Todo;