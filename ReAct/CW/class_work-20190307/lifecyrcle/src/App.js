import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    pictures: [],
  }

  componentDidMount() {
    const endPoint = 'https://pixabay.com/api/?key=';
    const apiKey = '5018958-ed49ccd90878e6614abdf24a6';
    // console.log(`${endPoint}${apiKey}&category=food&order=popular&per_page=9`);
    
    fetch(endPoint+apiKey+'&category=food&order=popular&per_page=9')
      .then(res => res.json())
      .then(data => this.setState({
        pictures: [...data.hits]
      }))
      .catch(err => console.log(err))
  }

  render() {
    const {pictures} = this.state;
    return (
      <div className="gallery">
        {pictures.map(item => (
          <div key={item.webformatURL} className='gallery-item'>
          <img src={item.webformatURL} alt={item.tags} className='gallery-image'/>
          </div>
        ))}             
      </div>
    );
  }
}

export default App;
