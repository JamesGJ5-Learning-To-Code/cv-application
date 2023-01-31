import React, { Component } from 'react';
import uniqid from 'uniqid';

class FormControlField extends Component {
    render() {
        const controlID = uniqid();
        const control = this.makeControl(controlID);
        return (
            <div className='FormControlField'>
                <label
                    htmlFor={controlID}
                >
                    {this.props.detailLabelText}
                </label>
                {control}
            </div>
        );
    }
    makeControl(controlID) {
        const ControlType = this.getControlType();
        const control = <ControlType
            id={controlID}
        />
        return control;
    }
    getControlType() {
        return (this.props.useTextarea) ? 'textarea' : 'input';
    }
}

export default FormControlField;