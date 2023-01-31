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
    }
    render() {
        return (
            <div className='Section'>
                <div>
                    {this.props.sectionName}
                </div>
                <EditButton/>
                {/* TODO: consider passing only the relevant aspects within
                this.props.details to each of InformationForm and
                DisplayedInformation */}
                <InformationForm
                    details={this.props.details}
                />
                <DisplayedInformation
                    details={this.props.details}
                />
            </div>
        );
    }
}

export default Section;
