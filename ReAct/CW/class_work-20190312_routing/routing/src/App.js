import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './Header/Header';
import Roadster from './Roadster/Roadster';
import ModelS from './ModelS/ModelS';
import ModelX from './ModelX/ModelX';
import User from './User/User';



class App extends Component {
  state = {
    user: {},
  }
  fetchData = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => this.setState({
      user: data.results[0],
    }))
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchData();
    console.log(this.state);
    
  }
  render() {
    const {user} = this.state;
    return (
      <div>
       <Header/>
       <Switch>
        <Route exact path='/' component=''/>
        <Route path='/Roadster' component={Roadster}/>
        <Route path='/ModelS' component={ModelS}/>
        <Route path='/ModelX' component={ModelX}/>
        <Route path='/user' render= {props => <User userData = {user} {...props}/>}/>
       </Switch>
      </div>
    );
  }
}

export default App;
