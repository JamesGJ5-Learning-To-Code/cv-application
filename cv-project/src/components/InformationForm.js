import React, { Component } from 'react';
import SubmitButton from './SubmitButton';

class InformationForm extends Component {
    render() {
        return (
            <form className='InformationForm'>
                <SubmitButton/>
            </form>
        )
    }
}

export default InformationForm;
