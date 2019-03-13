import React from 'react';
import {NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Form.css';

const Form = ({addTask, showAllTasks, showCompleteTasks, showUncompleteTasks}) => {
    return (
        <form action="" method="get" className='Form' autoComplete='off' onSubmit={addTask}>
            <p>ToDoApp</p>
            <input type="text" name="text" id=""/>
            <input type="submit" value="Create new Task"/>
            <NavLink className="Form_button" to='/All' onClick={showAllTasks}>Show all tasks</NavLink>
            <NavLink className="Form_button" to='/Done' onClick={showCompleteTasks}>Show complete tasks</NavLink>
            <NavLink className="Form_button" to='/Undone' onClick={showUncompleteTasks}>Show uncomplete tasks</NavLink>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;