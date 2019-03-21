import React, { Component } from 'react';
import {connect} from 'react-redux';
import {asyncData} from './redux/actions/getNewsActions';
import Loader from 'react-loader-spinner';
import './App.css';
import Main from './Main/Main';

class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.fetch();
    }, 5000);
  }
  render() {
    return (
      <div className="App">
      <header></header>
      {this.props.news.length ? <Main/> : <Loader 
         type="Triangle"
         color="#4a9700"
         height="100"	
         width="100"/>}
      </div>
    );
  }
}

const MSTP = state => ({
    news: state.news,
})
const MDTP = dispatch => ({
  fetch: () => dispatch(asyncData())
})

export default connect(MSTP,MDTP)(App);
