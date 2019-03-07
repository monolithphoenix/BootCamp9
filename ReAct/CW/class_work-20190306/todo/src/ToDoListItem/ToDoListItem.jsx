import React from 'react';
import PropTypes from 'prop-types';
import './ToDoListItem.css'

const ToDoListItem = ({taskObj, deleteTask, editTask}) => {
    return (
        <li className='ToDoListItem' id={taskObj.id}>
            <span>{taskObj.text}</span>
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