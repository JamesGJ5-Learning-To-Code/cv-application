import React from 'react';
import uniqid from 'uniqid';

const FormControlField = (props) => {
    const handleControlClick = (event) => {
        const detailReference = props.detailReference;
        const newValue = event.target.value;
        props.onChangingValue(detailReference, newValue);
    }

    const getControlType = () => {
        return (props.useTextarea) ? 'textarea' : 'input';
    };
    const makeControl = (controlID) => {
        const ControlType = getControlType();
        const control = <ControlType
            id={controlID}
            value={props.value}
            onChange={handleControlClick}
        />
        return control;
    };
    const controlID = uniqid();
    const control = makeControl(controlID);
    return (
        <div className='FormControlField'>
            <label
                htmlFor={controlID}
            >
                {props.detailLabelText}
            </label>
            {control}
        </div>
    );
};

export default FormControlField;