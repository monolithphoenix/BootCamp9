import React from 'react';
import PropTypes from 'prop-types';
import './ToDoList.css';
import ToDoListItem from '../ToDoListItem/ToDoListItem'

const ToDoList = ({tasks, deleteTask, editTask}) => {
    return (
        <ul className='ToDoList'>
            {tasks.map(el => <ToDoListItem key={el.id} taskObj={el} deleteTask={deleteTask} editTask={editTask}/>)}
        </ul>
    );
};

ToDoList.propTypes = {
    
};

export default ToDoList;