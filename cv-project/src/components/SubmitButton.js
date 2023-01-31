import React, { Component } from 'react';

class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onDisablingEditing();
    }
    render() {
        return (
            <button
                className='SubmitButton'
                onClick={this.handleClick}
            >
                Submit
            </button>
        );
    }
}

export default SubmitButton;