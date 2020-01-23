import React from 'react'
import './NewTask.css';

class NewTask extends React.Component {
    state = {
        task: ''
    }

    handleChange = (e) =>{
        this.setState({
             task:e.target.value
        })
       
    }

    formSubmit = e => {
        e.preventDefault();
        this.props.createTask(this.state.task)
        this.setState({
            task: ''
        })
    }



    render(){        
        return (
            <div className="new-task">
                <form onSubmit={this.formSubmit}>
                    <input type="task"
                           name="task"
                           className="task-field"
                           value={this.state.task}
                           onChange={this.handleChange}
                    />
                    <button className="btn btn-save">OK</button>
                </form>
            </div>
        )
    }
}

export default NewTask;