import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';


class App extends Component {
    state = {
        // text: '',
        tasks: [],
    };

    addTask = (e) => {
        e.preventDefault();
        if(!e.target.text.value) {return};
        const newTask = {
            text: e.target.text.value,
            id: Date.now(),
        };
        this.setState(prev=>({ tasks: [...prev.tasks, newTask] }))
    };

    deleteTask = (e) => {
        const ID = Number(e.target.parentNode.parentNode.id);
        const delTask = this.state.tasks.filter(el => el.id !== ID)
        this.setState(prev=>({ tasks: delTask }))
    };

    editTask = (e) => {
        const btn = e.target;
        if(btn.innerText === 'Edit'){
            const input = document.createElement('input');
            input.value = btn.parentNode.parentNode.firstChild.innerText;
            btn.parentNode.before(input);
            btn.parentNode.parentNode.firstChild.remove();
            btn.innerText = 'Submit';
        } else {
            const span = document.createElement('span');
            span.innerText = btn.parentNode.parentNode.firstChild.value;
            btn.parentNode.before(span);
            btn.parentNode.parentNode.firstChild.remove();
            btn.innerText = 'Edit';
            console.log(this.state.tasks);
            
        };
    };

    render() {
        const {tasks, addTask, deleteTask, editTask} = this.state;
        return (
            <div className="App">
                <Form addTask={this.addTask}/>
                <ToDoList tasks={tasks} deleteTask={this.deleteTask} editTask={this.editTask}/>
            </div>
        );
    };
};

App.propTypes = {

};

export default App;