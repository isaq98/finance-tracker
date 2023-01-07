import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postNewSheet } from 'Services/ExpenseServices';
import { setSheetDate } from 'Store/actions/TableActions';
import './_InitialForm.scss';


function InitialForm(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [date, setDate] = useState('');

    const navigateToForm = () => {
        navigate('/expenseform');
    }
    const convertDateToInt = () => {
        postNewSheet(date).then((data) => {
            dispatch(setSheetDate(date));
            navigateToForm();
        }).catch( () => {
            setDate('');
        }
        );
        //write an action to dispatch and store the month/year in state
        //If successful, redirect to expense table with redux storing the month and year in state
        //If unsuccessful, clear field and ask user to reenter a date
    }

    return (
        <div className="table-year-container">
            <h2 className="sheet-creation-header-text">Enter the month and year the sheet is for: </h2>
            <label htmlFor="month"></label>
            <input type="month" name="month" placeholder="MM-YYYY" value={date} onChange={event => setDate(event.target.value)}></input>
            <button onClick={convertDateToInt}>Press me</button>
        </div>
    )
}

export default InitialForm;