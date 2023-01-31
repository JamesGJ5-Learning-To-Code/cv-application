import React, { Component } from 'react';
import EditButton from './EditButton';
import InformationForm from './InformationForm';
import DisplayedInformation from './DisplayedInformation';

class Section extends Component {
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
