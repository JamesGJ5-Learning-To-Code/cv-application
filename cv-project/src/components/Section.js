import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div>
                {this.props.sectionName}
            </div>
        );
    }
}

export default Section
