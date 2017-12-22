import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Display, History, InputField } from './components'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Display />
        <History />
        <InputField />
      </div>
    );
  }
}

export default App;
