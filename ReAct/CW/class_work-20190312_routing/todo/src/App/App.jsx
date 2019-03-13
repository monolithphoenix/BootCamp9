import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './App.css';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';


class App extends Component {
    state = {
        tasks: [],
        whatToShow: [],
    };

    addTask = (e) => {
        e.preventDefault();
        if(!e.target.text.value) {return};
        const newTask = {
            text: e.target.text.value,
            id: Date.now(),
            done: false,
        };
        this.setState(prev => ({ tasks: [...prev.tasks, newTask], whatToShow: [...prev.whatToShow, newTask]}))
    };

    deleteTask = (e) => {
        const ID = Number(e.target.parentNode.parentNode.id);
        const delTask = this.state.tasks.filter(el => el.id !== ID);
        this.setState(() => ({ tasks: delTask, whatToShow: delTask }));
    };

    editTask = (e) => {
        const btn = e.target;
        const taskID = Number(btn.parentNode.parentNode.id);
        
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
            const editTask = this.state.tasks.map(el => el.id === taskID ? {...el, text: span.innerText} : el);
            this.setState(() => ({ tasks: editTask, whatToShow: editTask }));
        };
    };

    doneTask = (e) => {
        e.target.classList.toggle('crossed');
        const taskID = Number(e.target.parentNode.id);
        const doneTask = this.state.tasks.map(el => el.id === taskID? {...el, done: !el.done} : el);
        console.log(doneTask);
        this.setState(() => ({ tasks: doneTask, whatToShow: doneTask,}));
    };

    showAllTasks = (e) => {
        console.log('showAllTasks is working now!');
        this.setState(() => ({ whatToShow: this.state.tasks }));
    };
    showCompleteTasks = (e) => {
        console.log('showCompleteTasks is working now!');
        const filteredTasks = this.state.tasks.filter(el => el.done);
        this.setState(() => ({ whatToShow: filteredTasks }));
    };
    showUncompleteTasks = (e) => {
        console.log('showUncompleteTasks is working now!');
        const filteredTasks = this.state.tasks.filter(el => !el.done);
        this.setState(() => ({ whatToShow: filteredTasks }));
    };


    render() {
        const {whatToShow, addTask, deleteTask, editTask, doneTask, showAllTasks, showCompleteTasks, showUncompleteTasks} = this.state;
        
        return (
            <div className="App">

                <Form 
                addTask={this.addTask} 
                showAllTasks={this.showAllTasks} 
                showCompleteTasks={this.showCompleteTasks} 
                showUncompleteTasks={this.showUncompleteTasks}/>
                
                <Switch>
                    <Route exact path='/' render= {props => 
                        <ToDoList 
                            whatToShow={whatToShow} 
                            deleteTask={this.deleteTask} 
                            editTask={this.editTask} 
                            doneTask={this.doneTask}/>
                    }/>
                    <Route path='/All' render= {props => 
                        <ToDoList 
                            whatToShow={whatToShow} 
                            deleteTask={this.deleteTask} 
                            editTask={this.editTask} 
                            doneTask={this.doneTask}/>
                    }/>
                    <Route path='/Done' render= {props => 
                        <ToDoList 
                            whatToShow={whatToShow} 
                            deleteTask={this.deleteTask} 
                            editTask={this.editTask} 
                            doneTask={this.doneTask}/>
                    }/>
                    <Route path='/Undone' render= {props => 
                        <ToDoList 
                            whatToShow={whatToShow} 
                            deleteTask={this.deleteTask} 
                            editTask={this.editTask} 
                            doneTask={this.doneTask}/>
                    }/>
                </Switch>

            </div>
        );
    };
};

App.propTypes = {

};

export default App;