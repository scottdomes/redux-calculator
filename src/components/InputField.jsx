import React from 'react';
import OperationField from './OperationField'
import NumberField from './NumberField'

class InputField extends React.Component {
    render() {
      const { onClickNumber, onClickOperator } = this.props
      return <div id="InputField">
        <NumberField onClickNumber={onClickNumber} />  
        <OperationField onClickOperator={onClickOperator} />        
      </div>
    }

}

export default InputField
