import React, { Component } from 'react';

class EditButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onEnablingEditing();
    }
    render () {
        return (
            <button
                className='EditButton'
                onClick={this.handleClick}
            >
                Edit
            </button>
        );
    }
}

export default EditButton;
