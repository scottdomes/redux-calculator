import React from 'react';
import Button from './Button'

class OperationField extends React.Component {
    render() {
        return <div id="OperationField">
            <div className="vertical row">
                <Button>/</Button>
                <Button>X</Button>
                <Button>+</Button>
                <Button>-</Button>  
                <Button>=</Button>                                              
            </div>
        </div>
    }

}

export default OperationField
