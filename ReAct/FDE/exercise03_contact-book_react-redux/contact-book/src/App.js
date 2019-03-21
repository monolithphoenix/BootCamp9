import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import Modal from './Modal/Modal';
import Button from './Button/Button';
import {showModal} from './redux/actions/showModalAction';


class App extends Component {

  
  render() {
    console.log(this.props);
    let {modal, showModal} = this.props;
    return (
      <div className="App">
        <modal className={modal? "modal show" : "modal hide"}>
          {modal && <Modal/>}
        </modal>
        <Button action={showModal} text="Create new contact"/>
      </div>
    );
  }
}

function MSTP (state) {
  return {
    modal: state.showModal,
  }
}

function MDTP (dispatch) {
  return {
    showModal: function() {      
      dispatch(showModal())
    },
  }
}


export default connect(MSTP, MDTP) (App);