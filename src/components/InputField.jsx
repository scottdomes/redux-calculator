import React from 'react';
import OperationField from './OperationField'
import NumberField from './NumberField'

class InputField extends React.Component {
    render() {
      return <div id="InputField">
        <NumberField />  
        <OperationField />        
      </div>
    }

}

export default InputField
