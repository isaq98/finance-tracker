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
    const createSheet = () => {
        postNewSheet(date).then((data) => {
            const dateObj = new Date(date);
            const monthYear = dateObj.toLocaleString('en-US', {
                month: "long",
                year: "numeric",
                timeZone: "GMT"
            });
            dispatch(setSheetDate(monthYear));
            navigateToForm();
        }).catch( () => {
            setDate('');
        }
        );
    }

    return (
        <div className="table-year-container">
            <h2 className="sheet-creation-header-text">Enter the month and year the sheet is for: </h2>
            <label htmlFor="month"></label>
            <input type="month" name="month" placeholder="MM-YYYY" value={date} onChange={event => setDate(event.target.value)}></input>
            <button onClick={() => createSheet()}>Press me</button>
        </div>
    )
}

export default InitialForm;