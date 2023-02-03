import React from 'react';

const EditButton = (props) => {
    const handleClick = () => {
        props.onEnablingEditing();
    };
    return (
        <button
            className='EditButton'
            onClick={handleClick}
        >
            Edit
        </button>
    );
};

export default EditButton;
