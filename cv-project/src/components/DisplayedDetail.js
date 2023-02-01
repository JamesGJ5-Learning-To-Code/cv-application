import React, { Component } from 'react';

class DisplayedDetail extends Component {
    render() {
        return (
            <div className='DisplayedDetail'>
                <span>
                    {this.props.detailHeadingText}
                </span>
                {/* The below span will hold the value of the corresponding form
                control when it is put into state */}
                <span>
                    {this.props.detailValue}
                </span>
            </div>
        )
    }
}

export default DisplayedDetail;
