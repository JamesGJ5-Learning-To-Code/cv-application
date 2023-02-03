import React from 'react';
import SubmitButton from './SubmitButton';
import FormControlField from './FormControlField';

const InformationForm = (props) => {
    const getDetailValue = (detailReference) => {
        return props.sectionState.allDetailValues[detailReference];
    }
    const makeFormControlField = (controlLabelText, useTextarea, detailReference) => {
        const value = getDetailValue(detailReference);
        const formControlField = <FormControlField
            detailLabelText={controlLabelText}
            useTextarea={useTextarea}
            value={value}
            detailReference={detailReference}
            onChangingValue={props.onChangingValue}
            key = {detailReference}
        />
        return formControlField;
    };
    const makeFormControlFieldList = () => {
        const formControlFields = [];
        const details = props.details;
        for (let i = 0; i < details.length; i += 1) {
            const detail = details[i];
            formControlFields.push(
                makeFormControlField(
                    detail.detailControlLabelText,
                    detail.useTextarea,
                    detail.detailReference
                )
            )
        }
        return formControlFields;
    }
    const formControlFields = makeFormControlFieldList();
    return (
        <form className='InformationForm'>
            <SubmitButton
                onDisablingEditing={props.onDisablingEditing}
            />
            {formControlFields}
        </form>
    );
};

export default InformationForm;
