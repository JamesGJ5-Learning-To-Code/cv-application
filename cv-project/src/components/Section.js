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
                <InformationForm
                    details={this.props.details}
                />
                <DisplayedInformation/>
            </div>
        );
    }
}

export default Section;
