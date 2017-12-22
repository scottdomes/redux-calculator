import React from 'react';
import OperationField from './OperationField'
import NumberField from './NumberField'

class InputField extends React.Component {
    render() {
      return <div id="InputField">
        <OperationField />
        <NumberField />  
      </div>
    }

}

export default InputField
