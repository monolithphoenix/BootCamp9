import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Modal.css'

import Button from '../Button/Button';
import Input from '../Input/Input';
import {saveContactCard} from '../redux/actions/saveContactCardAction';
import {closeModal} from '../redux/actions/saveContactCardAction';


const inputs = [
    {type: "text", name: "firstName", id: Date.now(), required: true, placeholder: "First name"},
    {type: "text", name: "lastName", id: Date.now(), required: true, placeholder: "Last name"},
    {type: "tel", name: "tel", id: Date.now(), required: true, placeholder: "123-123-1234", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"},
    {type: "date", name: "date", id: Date.now(), required: true,},
    {type: "email", name: "email", id: Date.now(), required: true, placeholder: "example@email.com"}
]

const Modal = ({newCard, saveContactCard}) => {
    // console.log(newCard);
    return (
        <form action="" className="ModalForm" onSubmit={e => saveContactCard(e, newCard)}>
            <div className="ModalForm_conteiner">
                <div className="ModalForm_inputs">
                    {inputs.map(el => <Input type={el.type} key={el.name+el.id} id={el.id} name={el.name} isRequired={el.required} pattern={el.pattern} placeholder={el.placeholder}/>)}
                </div>
                <img src="http://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="user_pic" className="ModalForm_picture"/>
            </div>
            <Button text="Add Contact"/>
        </form>
    );
};

function MSTP (state) {
    return {
        newCard: state.lookWhatInInput,
    }
  }
  
  
const MDTP = (dispatch) => ({ 
    saveContactCard: (e, newCard) => { 
        e.preventDefault();
        dispatch(saveContactCard(newCard));
        dispatch(closeModal());
    },
    // exit: dispatch(closeModal(),
  })

// Modal.propTypes = {
    
// };

export default connect(MSTP, MDTP) (Modal);