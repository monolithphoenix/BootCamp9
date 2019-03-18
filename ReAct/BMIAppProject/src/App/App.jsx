import React, { Component } from 'react';
import './App.css';
import Preload from '../Preload/Preload'
import Main from '../Main/Main';


class App extends Component {
  state = {
    user: {id: ""},
    active_window: 'Main',
  }

  componentDidMount = () => {
    if (!this.state.user.id) {
          setTimeout(() => {
      this.setState({active_window: 'Registration'})
    }, 2000);
    }

    setTimeout(() => {
      this.setState({active_window: 'Main'})
    }, 5000);
  }

  calcBMI = () => {
    // const BMI = mass/Math.pow(height, 2);
  }
  getRegistrationData = (e) => {
    console.log(e);
    e.preventDefault();
  }



  render() {
    const {user, active_window, getRegistrationData} = this.state;
    return (
      <div className="App">
        <div className={active_window === "Main" ? "intro slideUp" : "intro"}>
          <Preload user={user} active_window={active_window} getRegistrationData={this.getRegistrationData}/>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;