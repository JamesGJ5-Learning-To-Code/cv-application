import React, { Component } from 'react';
import EditButton from './EditButton';

class Section extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.sectionName}
                </div>
                <EditButton/>
            </div>
        );
    }
}

export default Section