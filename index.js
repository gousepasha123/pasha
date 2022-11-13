import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        Global Data Base Of MIST College 
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
