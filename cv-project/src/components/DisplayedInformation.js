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
                    detail.detailHeadingText
                )
            )
        }
        return displayedDetailList;
    }
    makeDisplayedDetail(detailHeadingText) {
        const displayedDetail = <DisplayedDetail
            detailHeadingText={detailHeadingText}
            key={uniqid()}
        />
        return displayedDetail;
    }
}

export default DisplayedInformation;
