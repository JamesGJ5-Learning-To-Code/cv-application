import React, { Component } from 'react';
import EditButton from './EditButton';
import InformationForm from './InformationForm';
import DisplayedInformation from './DisplayedInformation';

class Section extends Component {
    constructor(props) {
        super(props);
        // TODO: consider simply initialising state of currentlyEditing as false
        // below, rather than getting it from props
        this.state = {
            currentlyEditing: this.props.currentlyEditing
        }
        this._initialiseDetailValueStates();
        this.disableEditing = this.disableEditing.bind(this);
        this.enableEditing = this.enableEditing.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    _initialiseDetailValueStates() {
        this.props.details.forEach(({detailReference, detailValue}) => {
            this.state[detailReference] = detailValue;
        });
    }
    disableEditing() {
        this.setState({
            currentlyEditing: false
        })
    }
    enableEditing() {
        this.setState({
            currentlyEditing: true
        })
    }
    changeValue(detailReference, newValue) {
        this.setState({
            // NOTE: below may not work if merging doesn't happen as expected
            // detailValues: {
                [detailReference] : newValue
            // }
        });
    }
    render() {
        const shownComponents = this.selectShownComponents();
        return (
            <div className='Section'>
                <div>
                    {this.props.sectionName}
                </div>
                {shownComponents}
            </div>
        );
    }
    selectShownComponents() {
        const shownComponents = (this.state.currentlyEditing)
            ?
                this.makeInformationForm()
            :
                <div>
                    <EditButton
                        onEnablingEditing={this.enableEditing}
                    />
                    {this.makeDisplayedInformation()}
                </div>
        return shownComponents;
    }
    makeInformationForm() {
        const informationForm = <InformationForm
            details={this.props.details}
            onDisablingEditing={this.disableEditing}
            sectionState={this.state}
            onChangingValue={this.changeValue}
            key={this.props.sectionName}
        />
        return informationForm;
    }
    makeDisplayedInformation() {
        const displayedInformation = <DisplayedInformation
            details={this.props.details}
        />
        return displayedInformation;
    }
}

export default Section;
