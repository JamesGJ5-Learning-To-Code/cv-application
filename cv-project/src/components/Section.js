import React, { Component } from 'react';
import EditButton from './EditButton';
import InformationForm from './InformationForm';

class Section extends Component {
    render() {
        return (
            <div className='Section'>
                <div>
                    {this.props.sectionName}
                </div>
                <EditButton/>
                <InformationForm/>
            </div>
        );
    }
}

export default Section
