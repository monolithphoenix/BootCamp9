import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({addTask, showAllTasks, showCompleteTasks, showUncompleteTasks}) => {
    return (
        <form action="" method="get" className='Form' autoComplete='off' onSubmit={addTask}>
            <p>ToDoApp</p>
            <input type="text" name="text" id=""/>
            <input type="submit" value="Create new Task"/>
            <button type="button" onClick={showAllTasks}>Show all tasks</button>
            <button type="button" onClick={showCompleteTasks}>Show complete tasks</button>
            <button type="button" onClick={showUncompleteTasks}>Show uncomplete tasks</button>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;