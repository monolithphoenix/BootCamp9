import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Modal.css'

import Button from '../Button/Button';
import Input from '../Input/Input';

const inputs = [
    {type: "text", name: "firstName", id: Date.now(), required: true, placeholder: "First name"},
    {type: "text", name: "lastName", id: Date.now(), required: true, placeholder: "Last name"},
    {type: "tel", name: "tel", id: Date.now(), required: true, placeholder: "123-123-1234", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"},
    {type: "date", name: "date", id: Date.now(), required: true,},
    {type: "email", name: "email", id: Date.now(), required: true, placeholder: "example@email.com"}
]

const Modal = props => {
    return (
        <form action="" className="ModalForm">
            <div className="ModalForm_conteiner">
                <div className="ModalForm_inputs">
                    {inputs.map(el => <Input type={el.type} key={el.name+el.id} id={el.id} name={el.name} isRequired={el.required} pattern={el.pattern} placeholder={el.placeholder}/>)}
                    
                    {/* <input type="text" name="firstName" id={"firstName-"+Date.now()} required/>
                    <input type="text" name="lastName" id="lastName" required />
                    <input type="tel" name="tel" id="tel" required/>
                    <input type="date" name="data" id="data" required/>
                    <input type="email" name="email" id="email" required/> */}
                </div>
                <img src="http://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" width="150" height="150" alt="user_pic"/>
            </div>
            <Button text="Add Contact"/>
        </form>
    );
};

function MSTP (state) {
    return {
        inputs: state.inputs,
    }
  }
  
  function MDTP (dispatch) {
    return {
    //   showModal: function() {      
    //     dispatch(showModal())
    //   },
    }
  }

// Modal.propTypes = {
    
// };

export default connect(MSTP, MDTP) (Modal);