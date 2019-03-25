import React, { Component } from 'react';
import './App.css';
// import ButtonHooks from './Button/ButtonHooks';
// import UserList from './UserList/UserList';
import CRUDApp from './CRUDApp/CRUDApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ButtonHooks /> */}
        {/* <UserList /> */}
        <CRUDApp />
      </div>
    );
  }
}

export default App;
