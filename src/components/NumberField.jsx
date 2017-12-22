import React from "react";
import Button from "./Button";

class NumberField extends React.Component {
  render() {
    const { onClickNumber } = this.props
    return (
      <div id="NumberField">
        <div className="row">
          <Button>C</Button>
          <Button>+/-</Button>
          <Button>%</Button>
        </div>
        <div className="row">
          <Button onClick={onClickNumber}>7</Button>
          <Button onClick={onClickNumber}>8</Button>
          <Button onClick={onClickNumber}>9</Button>
        </div>
        <div className="row">
          <Button onClick={onClickNumber}>4</Button>
          <Button onClick={onClickNumber}>5</Button>
          <Button onClick={onClickNumber}>6</Button>
        </div>
        <div className="row">
          <Button onClick={onClickNumber}>1</Button>
          <Button onClick={onClickNumber}>2</Button>
          <Button onClick={onClickNumber}>3</Button>
        </div>
        <div className="row">
          <Button onClick={onClickNumber} className="zero">
            0
          </Button>
          <Button>,</Button>
        </div>
      </div>
    );
  }
}

export default NumberField;
