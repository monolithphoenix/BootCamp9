import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    render() {
        let {counter} = this.state;
        return (
            <div>
                <button className="btn" data-action="sub">-1</button>
                <span className="value">{counter}</span>
                <button className="btn" data-action="add">+1</button>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;