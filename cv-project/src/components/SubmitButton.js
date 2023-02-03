import React from 'react';

const SubmitButton = (props) => {
    // TODO: prevent default behaviour
    const handleClick = () => {
        props.onDisablingEditing();
    };
    return (
        <button
            className='SubmitButton'
            onClick={handleClick}
        >
            Submit
        </button>
    );
}

export default SubmitButton;