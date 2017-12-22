import React from 'react';
import Button from './Button'

class NumberField extends React.Component {
    render() {
      return <div id="NumberField">
        <div className="row">
            <Button>C</Button>
            <Button>+/-</Button>
            <Button>%</Button>
        </div>
        <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
        </div>
        <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
        </div>
        <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
        </div>
        <div className="row">
            <Button>0</Button>
            <Button>,</Button>
        </div>
      </div>
    }

}

export default NumberField
