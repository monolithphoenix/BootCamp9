import React, { Component } from 'react';
import {connect} from 'react-redux';
import {plus, minus, reset} from './redux/actions/counterActions';
import {change} from './redux/actions/inputAction';
import './App.css';
import Form from './Form/Form';

class App extends Component {
  increaseFromInput = () => this.props.increase(Number(this.props.input));  
  render() {
    console.log(this.props);
    let {value, increase, decrease, reload, input} = this.props;
    return (
      <div className="container">
       <p className="text">{value}</p>
       <button onClick={decrease}>-</button>
       <button onClick={reload}>Reset</button>
       <button onClick={this.increaseFromInput}>+</button>
       <Form />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    value: state.counter,
    input: state.input,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    increase: function(value) {      
      dispatch(plus(value))
    },
    decrease: function() {
      dispatch(minus(3))
    },
    reload: function() {
      dispatch(reset())
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
