import React from 'react';
import './App.css';

class Home extends React.Component {
  goHtml () {
    window.location.href = './demo.html'
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <span onClick={this.goHtml.bind(this)}>首页4234</span>
        </header>
      </div>
    )
  }
}



export default Home;
