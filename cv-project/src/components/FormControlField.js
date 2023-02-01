import React, { Component } from 'react';
import uniqid from 'uniqid';

class FormControlField extends Component {
    constructor(props) {
        super(props);
        this.handleControlClick = this.handleControlClick.bind(this);
    }
    handleControlClick(event) {
        const detailReference = this.props.detailReference;
        const newValue = event.target.value;
        this.props.onChangingValue(detailReference, newValue);
    }
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
            value={this.props.value}
            onChange={this.handleControlClick}
        />
        return control;
    }
    getControlType() {
        return (this.props.useTextarea) ? 'textarea' : 'input';
    }
}

export default FormControlField;