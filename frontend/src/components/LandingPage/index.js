import React from 'react';
import FancyButton from 'Components/FancyButton';
import './_LandingPage.scss';

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="center-content">
                <div className="landing-text">
                    <p>Good afternoon, what would you like to do?</p>
                </div>
                <div className="button-div">
                    <FancyButton buttonText='View' propClass='landing'/>
                    <FancyButton buttonText='Create' propClass='landing'/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;