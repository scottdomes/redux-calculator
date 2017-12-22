import React from "react";
import Button from "./Button";

class OperationField extends React.Component {
  render() {
    const { onClickOperator } = this.props
    return (
      <div id="OperationField">
        <div className="vertical row">
          <Button onClick={onClickOperator}>/</Button>
          <Button onClick={onClickOperator}>X</Button>
          <Button onClick={onClickOperator}>+</Button>
          <Button onClick={onClickOperator}>-</Button>
          <Button onClick={onClickOperator}>=</Button>
        </div>
      </div>
    );
  }
}

export default OperationField;
