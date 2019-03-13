import React, { Component } from 'react';
import './App.css';
import FirstTimeForm from '../FirstTimeForm/FirstTimeForm';

class App extends Component {
  state = {
    user: {},
  }
  
  render() {
    return (
      <div className="App">
        <FirstTimeForm />
      </div>
    );
  }
}

export default App;