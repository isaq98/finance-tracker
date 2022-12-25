import React from 'react';
import FancyButton from 'Components/FancyButton';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getExpenses } from 'Store/actions/TableActions';
import './_LandingPage.scss';

function LandingPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateToForm = () => {
        navigate('/expenseform');
        dispatch(getExpenses());
    }

    const determineGreeting = () => {
        const date = new Date();
        const time = date.getHours();
        switch(true) {
            case time > 12 && time < 16:
                return "Good afternoon";
            case time > 16 && time <= 23:
                return "Good evening";
            default:
                return "Good morning";
        }
    }

    return (
        <div className="landing-page">
            <div className="center-content">
                <div className="landing-text">
                    <p>{determineGreeting()}, what would you like to do?</p>
                </div>
                <div className="button-div">
                    <FancyButton buttonText='view' propClass='landing'/>
                    <FancyButton buttonText='create' propClass='landing' buttonFunction={navigateToForm}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;