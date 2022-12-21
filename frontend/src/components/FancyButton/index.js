import React from 'react';
import './_FancyButton.scss';

function FancyButton(props) {
    const {buttonText, buttonFunction, propClass, buttonType} = props;
    return (
        <button className={`${propClass} ${buttonText}`} onClick={buttonFunction} type={buttonType}>{buttonText}</button>
    )
}

export default FancyButton;