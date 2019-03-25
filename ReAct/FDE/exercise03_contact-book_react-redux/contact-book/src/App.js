import React, { Component } from 'react';
import {connect} from 'react-redux';
// css
import './App.css';
// components
import Modal from './Modal/Modal';
import Button from './Button/Button';
import ContactCard from './ContactCard/ContactCard';
// actions
import {showAddModal} from './redux/actions/showModalAction';
import {closeModal, addContactCardsFromLocal} from './redux/actions/saveContactCardAction';

class App extends Component {
  state = {
    addModalComponents: [
      {type: "text", name: "firstName", id: Date.now(), required: true, placeholder: "First name"},
      {type: "text", name: "lastName", id: Date.now(), required: true, placeholder: "Last name"},
      {type: "tel", name: "tel", id: Date.now(), required: true, placeholder: "123-123-1234", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"},
      {type: "date", name: "date", id: Date.now(), required: true,},
      {type: "email", name: "email", id: Date.now(), required: true, placeholder: "example@email.com"}
  ]
  }

  componentDidMount() {
    const readLocalStorage = JSON.parse(localStorage.getItem("contactCards"))
    let {CCfromLocal} = this.props;
    readLocalStorage && CCfromLocal(readLocalStorage);
  }

  render() {
    let {addModalComponents} = this.state;
    let {addmodal, delmodal, contactCardArray, showAddModal, closeModal} = this.props;
    return (
      <div className="App">
        <div className="CCConteiner">
          {contactCardArray.map(el => <ContactCard key={el.id} data={el}/>)}
        </div>
        <Button action={showAddModal} text="Create new contact"/>
        <modal className={addmodal ? "modal show" : "modal hide"} onClick={closeModal}>
          {addmodal && <Modal inputs={addModalComponents}/>}
          {delmodal && <Modal/>}
        </modal>
      </div>
    );
  }
}

function MSTP (state) {
  return {
    addmodal: state.showModal.add,
    delmodal: state.showModal.del,
    contactCardArray: state.contactCardArray,
  }
}

function MDTP (dispatch) {
  return {
    showAddModal: () => { dispatch(showAddModal()) },
    closeModal: (e) => { e.target.nodeName === "MODAL" && dispatch(closeModal()) },
    CCfromLocal: (Cards) => { dispatch(addContactCardsFromLocal(Cards)) },

  }
}

export default connect(MSTP, MDTP) (App);