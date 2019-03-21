import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import {add} from './redux/actions/contactsAction';

class App extends Component {
  const showModal = () => {

  }
  
  render() {
    return (
      <div className="App">
        <button className="createButton">Create new contact</button>
      </div>
    );
  }
}

function MSTP (state) {
  return {
    input: state.input,
  }
}

function MDTP (dispatch) {
  return {
    increase: function(value) {      
      dispatch(add(value))
    },
  }
}


export default connect(null, null) (App);