import React from 'react';
import DisplayedDetail from './DisplayedDetail';
import uniqid from 'uniqid'

const DisplayedInformation = (props) => {
    // TODO: consider refactoring with similar code in ./InformationForm.js, 
    // maybe using a custom hook but not sure yet
    const getDetailValue = (detailReference) => {
        return props.sectionState.allDetailValues[detailReference];
    }
    const makeDisplayedDetail = (detailHeadingText, detailReference) => {
        const detailValue = getDetailValue(detailReference);
        const displayedDetail = <DisplayedDetail
            detailHeadingText={detailHeadingText}
            detailValue={detailValue}
            key={uniqid()}
        />
        return displayedDetail;
    }
    // TODO: consider refactoring the below with similar code found in
    // ./InformationForm.js (particularly in makeFormControlList), maybe using 
    // a custom hook but not sure yet
    const makeDisplayedDetailList = () => {
        const displayedDetailList = [];
        const details = props.details;
        for (let i = 0; i < details.length; i += 1) {
            const detail = details[i];
            displayedDetailList.push(
                makeDisplayedDetail(
                    detail.detailHeadingText,
                    detail.detailReference
                )
            )
        }
        return displayedDetailList;
    }
    const displayedDetailList = makeDisplayedDetailList();
    return (
        <div className='DisplayedInformation'>
            {displayedDetailList}
        </div>
    );
}

export default DisplayedInformation;
