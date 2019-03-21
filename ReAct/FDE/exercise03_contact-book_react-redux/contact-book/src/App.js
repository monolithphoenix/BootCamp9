import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import Modal from './Modal/Modal';
import Button from './Button/Button';
import {showModal} from './redux/actions/showModalAction';
import {closeModal} from './redux/actions/saveContactCardAction';



class App extends Component {

  
  render() {
    // console.log(this.props);
    let {modal, contactCardArray, showModal, closeModal} = this.props;
    return (
      <div className="App">
        <modal className={modal? "modal show" : "modal hide"} onClick={closeModal}>
          {modal && <Modal/>}
        </modal>
        {contactCardArray[0] && "Working"}
        <Button action={showModal} text="Create new contact"/>
      </div>
    );
  }
}

function MSTP (state) {
  return {
    modal: state.showModal,
    contactCardArray: state.contactCardArray,
  }
}

function MDTP (dispatch) {
  return {
    showModal: () => { dispatch(showModal()) },
    closeModal: (e) => { e.target.nodeName === "MODAL" && dispatch(closeModal()) },
  }
}


export default connect(MSTP, MDTP) (App);