import React, { Component } from 'react';
import DisplayedDetail from './DisplayedDetail';
import uniqid from 'uniqid'

class DisplayedInformation extends Component {
    render() {
        const displayedDetailList = this.makeDisplayedDetailList();
        return (
            <div className='DisplayedInformation'>
                {displayedDetailList}
            </div>
        );
    }
    // TODO: consider refactoring the below with similar code found in
    // ./InformationForm.js (particularly in makeFormControlList)
    makeDisplayedDetailList() {
        const displayedDetailList = [];
        const details = this.props.details;
        for (let i = 0; i < details.length; i += 1) {
            const detail = details[i];
            displayedDetailList.push(
                this.makeDisplayedDetail(
                    detail.detailHeadingText,
                    detail.detailReference
                )
            )
        }
        return displayedDetailList;
    }
    makeDisplayedDetail(detailHeadingText, detailReference) {
        const detailValue = this.getDetailValue(detailReference);
        const displayedDetail = <DisplayedDetail
            detailHeadingText={detailHeadingText}
            detailValue={detailValue}
            key={uniqid()}
        />
        return displayedDetail;
    }
    // TODO: consider refactoring with similar code in ./InformationForm.js
    getDetailValue(detailReference) {
        return this.props.sectionState.allDetailValues[detailReference];
    }
}

export default DisplayedInformation;
