import React, {useState, useEffect} from 'react';

function ExpenseForm(props) {
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Button logged');

        setCost('');
        setDescription('');
    }
    const {className} = props;
    return (
        <div className={`${className ? className : ''}input-form`}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category: </label>
                <select id="category" name="category">
                    <option value="constant">Constants</option>
                    <option value="food">Food</option>
                    <option value="miscellaneous">Miscellaneous</option>
                </select>
                <label htmlFor="cost">Cost: </label>
                <input type="text" id="cost" name="cost" value={cost} onChange={event => setCost(event.target.value)}></input>
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" name="date"></input>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" name="description" value={description} onChange={event => setDescription(event.target.value)}></input>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default ExpenseForm;