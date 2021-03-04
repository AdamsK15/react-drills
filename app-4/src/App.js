import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import LogIn from './LogIn'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LogIn />
        </header>
      </div>
    );
  }
}

export default App;
