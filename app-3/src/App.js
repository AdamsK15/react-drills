import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: ['apples', 'cherries', 'pizza'],
      userInput: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    let shopList = this.state.items
      .filter((e, i) => {
        return e.includes(this.state.userInput)
      })

      .map((e, i) => {
        return <h2 key={i}>{e}</h2>
      })

    return (
      <div className="App">
        <header className='App-header'>
          <input onChange={e => this.handleChange(e.target.value)} type='text' />
          <p>{shopList}</p>
        </header>
      </div>
    );
  }
}

export default App;
