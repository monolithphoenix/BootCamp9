import React from 'react';
import './Form.css';

const Form = ({text, email, pass, inputChange, formSubmit}) => {
    return (
        <form autocomplete="off" onSubmit={formSubmit}>
            <input type="text" className='text' name='text' placeholder='Enter word' value={text} onChange={inputChange}/>
            <input type="email" className='text' name="email" placeholder='Enter e-mail' value={email} onChange={inputChange}/>
            <input type="password" className='text' name='pass' placeholder='Enter password' value={pass} onChange={inputChange}/>
            <input type="submit" className='btn'/>
        </form>
    );
};

export default Form;