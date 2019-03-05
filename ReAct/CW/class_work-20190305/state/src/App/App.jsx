import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  //ES6 syntaxis:
    // constructor(){
    //     super();
    //     this.state = {
    //         counter: 0,
    //     }
    //      this.decrement = this.decrement.bind.this
    // }
  //ES7 syntaxis:
    state = { counter: 0, }

    increment = () => { this.setState({counter: ++this.state.counter,}) }   //ES7
    decrement = () => { this.setState(prevState => ({counter: --prevState.counter,})) }   //ES7
    reset = () => { this.setState({counter: 0,})}
    render() {
        let {counter} = this.state;
        return (
            <div>
                <button className="btn" data-action="sub" onClick={this.decrement}>-1</button>
                <span className="value">{counter}</span>
                <button className="btn" data-action="add" onClick={this.increment}>+1</button>
                <button className="btn" data-action="reset" onClick={this.reset}>RESET</button>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;