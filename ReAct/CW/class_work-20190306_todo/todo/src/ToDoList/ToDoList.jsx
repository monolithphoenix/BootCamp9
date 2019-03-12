import React from 'react';
import PropTypes from 'prop-types';
import './ToDoList.css';
import ToDoListItem from '../ToDoListItem/ToDoListItem'

const ToDoList = ({whatToShow, deleteTask, editTask, doneTask}) => {
    return (
        <ul className='ToDoList'>
            {whatToShow.map(el => <ToDoListItem key={el.id} taskObj={el} deleteTask={deleteTask} editTask={editTask} doneTask={doneTask}/>)}
        </ul>
    );
};

ToDoList.propTypes = {
    
};

export default ToDoList;