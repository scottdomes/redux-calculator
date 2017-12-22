import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Display, History, InputField } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0,
      nextOperator: null,
      prevNumber: null
    };
  }

  handleClickNumber(nextNumber) {
    if (this.state.nextOperator) {
      this.setState(prev => { return { prevNumber: prev.currentNumber, currentNumber: parseInt(nextNumber, 10) }});
    } else if (this.state.currentNumber) {
      this.setState(prev => { return { currentNumber: prev.currentNumber.toString() + nextNumber } });
    } else {
      this.setState({ currentNumber: nextNumber });
    }
  }

  handleClickOperator(nextOperator) {
    this.setState({ currentNumber: this.formatTotal(this.calculateTotal()) }, () => {
      this.setState({ nextOperator });
    });
  }

  formatTotal(total) {
    const stringTotal = total.toString()
    let numberTotal = 0
    if (stringTotal.length > 9) {
      numberTotal = parseFloat(stringTotal.slice().slice(0, 9), 10)
    } else {
      numberTotal = parseFloat(total, 10)
    }
    return numberTotal
  }

  calculateTotal() {
    console.log(this.state.currentNumber, this.state.nextNumber)
    switch (this.state.nextOperator) {
      case "/":
        return this.state.prevNumber / this.state.currentNumber;
      case "X":
        return this.state.prevNumber * this.state.currentNumber;
      case "+":
        return this.state.prevNumber + this.state.currentNumber;
      case "-":
        return this.state.prevNumber - this.state.currentNumber;
      default:
        return this.state.currentNumber;
    }
  }

  render() {
    return (
      <div id="App">
        <Display total={this.state.currentNumber} />
        <History />
        <InputField
          onClickNumber={this.handleClickNumber.bind(this)}
          onClickOperator={this.handleClickOperator.bind(this)}
        />
      </div>
    );
  }
}

export default App;
