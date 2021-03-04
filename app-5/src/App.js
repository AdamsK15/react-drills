import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import berlin from './berlin.jpg'
// import Image from './Image'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={berlin} />
          <h1>Berlin</h1>
        </header>
      </div>
    );
  }
}

export default App;

