import React from 'react';
import './_FancyButton.scss';

function FancyButton(props) {
    const {buttonText, buttonFunction, propClass} = props;
    return (
        <button className={propClass}>{buttonText}</button>
    )
}

export default FancyButton;