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
                    detail.detailReference
                )
            )
        }
        return formControlFields;
    }
    makeFormControlField(controlLabelText, useTextarea, detailReference) {
        const value = this.getDetailValue(detailReference)
        const formControlField = <FormControlField
            detailLabelText={controlLabelText}
            useTextarea={useTextarea}
            value={value}
            detailReference={detailReference}
            onChangingValue={this.props.onChangingValue}
            key = {detailReference}
        />
        return formControlField;
    }
    getDetailValue(detailReference) {
        return this.props.sectionState[detailReference];
    }
}

export default InformationForm;
