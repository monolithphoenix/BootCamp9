import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({addTask}) => {
    return (
        <form action="" method="get" className='Form' autoComplete='off' onSubmit={addTask}>
            <p>ToDoApp</p>
            <input type="text" name="text" id=""/>
            <input type="submit" value="Create new Task"/>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;