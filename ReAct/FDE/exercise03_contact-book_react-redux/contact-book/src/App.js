import React, { Component } from 'react';
import {connect} from 'react-redux';
// css
import './App.css';
// components
import Modal from './Modal/Modal';
import Button from './Button/Button';
import ContactCard from './ContactCard/ContactCard';
// actions
import {showModal} from './redux/actions/showModalAction';
import {closeModal, addContactCardsFromLocal} from './redux/actions/saveContactCardAction';

class App extends Component {

  componentDidMount() {
    const readLocalStorage = JSON.parse(localStorage.getItem("contactCards"))
    let {CCfromLocal} = this.props;
    readLocalStorage && CCfromLocal(readLocalStorage);
  }

  render() {
    let {modal, contactCardArray, showModal, closeModal} = this.props;
    return (
      <div className="App">
        <div className="CCConteiner">
          {contactCardArray.map(el => <ContactCard key={el.id} data={el}/>)}
        </div>
        <Button action={showModal} text="Create new contact"/>
        <modal className={modal? "modal show" : "modal hide"} onClick={closeModal}>
          {modal && <Modal/>}
        </modal>
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
    CCfromLocal: (Cards) => { dispatch(addContactCardsFromLocal(Cards)) },

  }
}

export default connect(MSTP, MDTP) (App);