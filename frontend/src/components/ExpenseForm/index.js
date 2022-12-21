import React, {useState, useEffect} from 'react';
import ExpenseTable from 'Components/ExpenseTable';
import FancyButton from 'Components/FancyButton';
import './_ExpenseForm.scss'

function ExpenseForm(props) {
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');

    // useEffect(() => {
    //     const handleSubmit = event => {
    //         fetch('/bills', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 category: category,
    //                 cost: cost,
    //                 date: date,
    //                 description: description
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(json => console.log("POST request JSON response: ", json));

    //         setCost('');
    //         setDescription('');
    //     }
    // }, []);

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Button logged');

        // useEffect(() => {
        //     fetch('bills', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(
        //             {
        //                 category: category,
        //                 cost: cost,
        //                 date: date,
        //                 description: description
        //             }
        //         )

        //     })
        //     .then(res => res.json())
        //     .them(json => console.log('Post response JSON: ', json));
        // }, [])

        setCost('');
        setDescription('');
    }
    const {className} = props;
    return (
        <div className="container">
            <div className={`${className ? className : ''}input-form`}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="category">Category: </label>
                    <select id="category" name="category">
                        <option value="constant">Constants</option>
                        <option value="food">Food</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                    <label htmlFor="cost"></label>
                    <input type="text" id="cost" name="cost" placeholder="Cost" value={cost} onChange={event => setCost(event.target.value)}></input>
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" name="date"></input>
                    <label htmlFor="description"></label>
                    <input type="text" id="description" name="description" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)}></input>
                    <FancyButton buttonText='create' propClass='landing' buttonType="submit"/>
                </form>
            </div>
            <ExpenseTable />
        </div>
    )
}

export default ExpenseForm;