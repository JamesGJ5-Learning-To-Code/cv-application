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
        this.disableEditing = this.disableEditing.bind(this);
    }
    disableEditing() {
        this.setState({
            currentlyEditing: false
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
                    <EditButton/>
                    {this.makeDisplayedInformation()}
                </div>
        return shownComponents;
    }
    makeInformationForm() {
        const informationForm = <InformationForm
            details={this.props.details}
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
