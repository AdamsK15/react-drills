import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange(val) {
    this.setState({ message: val });
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <input onChange={e => this.handleChange(e.target.value)} type='text' />
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}

export default App;

