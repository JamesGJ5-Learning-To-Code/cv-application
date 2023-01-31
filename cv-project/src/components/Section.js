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
    }
    _initialiseDetailValueStates() {
        // NOTE: only accessing state explicitly below because I have not yet 
        // learnt much about life cycle methods like componentDidMount
        this.state.detailValues = {}
        this.props.details.forEach(({detailReference, detailValue}) => {
            this.state.detailValues[detailReference] = detailValue;
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
