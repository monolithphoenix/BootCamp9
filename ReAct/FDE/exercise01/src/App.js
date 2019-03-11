import React, { Component } from 'react';
import './App.css';
import NewsList from './NewsList/NewsList';

class App extends Component {
  state = {
    apiSearch:'http://content.guardianapis.com/search?',
    apiKey:'api-key=test',
    news:[],
    article:[],
  }

  componentDidMount() {
    fetch(this.state.apiSearch+this.state.apiKey)
              .then(res => res.json())
              .then(data => {
                // console.log(data);
                this.setState(() => ({news: data.response.results}));
                // console.log(this.state.news);
                })
              .catch(err => console.log(err))
  }

  showMoreInfo = (e) => {
      console.log(e);
      e.target.parentNode.classList.toggle('Blue');
    const articleID = e.target.parentNode.parentNode.id;
    const targetArticle = this.state.news.find(el => el.id === articleID);
      console.log(targetArticle.apiUrl);
      console.log(articleID);
    fetch(targetArticle.apiUrl+'?show-blocks=body&'+this.state.apiKey)
              .then(res => res.json())
              .then(data => {
                console.log(data);
                this.setState(() => ({article: data.response.content}));
                console.log(this.state.article);
                })
              .catch(err => console.log(err))
  }

  render() {
    const {news, article, showMoreInfo} = this.state;
    const ErrText = 'Sorry, we couldn`t find news for you. Please try again later.';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-title">the guardian news</h1>
        </header>
        <main>
          <button onClick={this.componentDidMount}>Refresh</button>
          {/* {console.log(news)} */}
          {news.length === 0 ? <p className="App-noNews">{ErrText}</p> : <NewsList news={news} article={article} showMoreInfo={this.showMoreInfo}/>}
        </main>
      </div>
    );
  }
}

export default App;
