import React from 'react';
import PropTypes from 'prop-types';
import './ToDoListItem.css'

const ToDoListItem = ({taskObj, deleteTask, editTask, doneTask}) => {
    return (
        <li className='ToDoListItem' id={taskObj.id}>
            <span onClick={doneTask} className={taskObj.done ? 'crossed' : ''}>{taskObj.text}</span>
            <div>
                <button onClick={editTask}>Edit</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </li>
    );
};

ToDoListItem.propTypes = {
    
};

export default ToDoListItem;