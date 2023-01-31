import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import FormControlField from './FormControlField';
import uniqid from 'uniqid';

class InformationForm extends Component {
    render() {
        const formControlFields = this.makeFormControlFieldList();
        return (
            <form className='InformationForm'>
                <SubmitButton
                    onDisablingEditing={this.props.onDisablingEditing}
                />
                {formControlFields}
            </form>
        );
    }
    makeFormControlFieldList() {
        const formControlFields = [];
        const details = this.props.details;
        for (let i = 0; i < details.length; i += 1) {
            const detail = details[i];
            formControlFields.push(
                this.makeFormControlField(
                    detail.detailControlLabelText,
                    detail.useTextarea,
                    this.getDetailValue(detail.detailReference)
                )
            )
        }
        return formControlFields;
    }
    makeFormControlField(controlLabelText, useTextarea, value) {
        const formControlField = <FormControlField
            detailLabelText={controlLabelText}
            useTextarea={useTextarea}
            value={value}
            key = {uniqid()}
        />
        return formControlField;
    }
    getDetailValue(detailReference) {
        return this.props.detailValues[detailReference];
    }
}

export default InformationForm;
