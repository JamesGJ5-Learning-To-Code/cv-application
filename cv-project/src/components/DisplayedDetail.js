import React from 'react';

const DisplayedDetail = (props) => {
    return (
        <div className='DisplayedDetail'>
            <span>
                {props.detailHeadingText}
            </span>
            {/* The below span will hold the value of the corresponding form
            control when it is put into state */}
            <span>
                {props.detailValue}
            </span>
        </div>
    )
}

export default DisplayedDetail;
