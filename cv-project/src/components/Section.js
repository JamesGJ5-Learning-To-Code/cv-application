import React, { useState } from 'react';
import EditButton from './EditButton';
import InformationForm from './InformationForm';
import DisplayedInformation from './DisplayedInformation';

const Section = (props) => {
    const changeValue = (detailReference, newValue) => {
        const newAllDetailValues = JSON.parse(JSON.stringify(allDetailValues));
        newAllDetailValues[detailReference] = newValue;
        setAllDetailValues(newAllDetailValues);
    };
    const enableEditing = () => {
        setCurrentlyEditing(true);
    }
    const disableEditing = () => {
        setCurrentlyEditing(false);
    };
    const mapDetailReferenceToValue = () => {
        const detailValueState = {};
        for (const detail of props.details) {
            detailValueState[detail.detailReference] = detail.detailValue;
        }
        return detailValueState;
    };
    // TODO: wrap up the below few lines better so don't have to add each state to sectionState 
    // manually
    const [currentlyEditing, setCurrentlyEditing] = useState(props.currentlyEditing);
    const [allDetailValues, setAllDetailValues] = useState(mapDetailReferenceToValue());
    const sectionState = {currentlyEditing: currentlyEditing, allDetailValues: allDetailValues};

    const makeDisplayedInformation = () => {
        const displayedInformation = <DisplayedInformation
            details={props.details}
            sectionState={sectionState}
        />
        return displayedInformation;
    };
    const makeInformationForm = () => {
        const informationForm = <InformationForm
            details={props.details}
            onDisablingEditing={disableEditing}
            sectionState={sectionState}
            onChangingValue={changeValue}
            key={props.sectionName}
        />
        return informationForm;
    };
    const selectShownComponents = () => {
        const shownComponents = (currentlyEditing)
            ?
                makeInformationForm()
            :
                <div>
                    <EditButton
                        onEnablingEditing={enableEditing}
                    />
                    {makeDisplayedInformation()}
                </div>
        return shownComponents;
    };
    const shownComponents = selectShownComponents();
    return (
        <div className='Section'>
            <div>
                {props.sectionName}
            </div>
            {shownComponents}
        </div>
    );
}

export default Section;
