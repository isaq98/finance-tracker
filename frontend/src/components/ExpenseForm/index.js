import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseTable from 'Components/ExpenseTable';
import FancyButton from 'Components/FancyButton';
import { postNewBill, getAllBills } from 'Services/ExpenseServices';
import { setExpenses } from 'Store/actions/TableActions';
import './_ExpenseForm.scss'

function ExpenseForm(props) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const expenses = useSelector((state) => state.expenses);

    const handleSubmit = event => {
        event.preventDefault();
        postNewBill({category, cost, date, description}).then(() => {
            getAllBills().then((data) => {
                dispatch(setExpenses(data?.Bills));
            })
        });
        setCost('');
        setDate('');
        setDescription('');
    };

    useEffect(() => {
        getAllBills().then((data) => {
            dispatch(setExpenses(data?.Bills))
        });
    }, [dispatch]);

    const {className} = props;
    return (
        <div className="container">
            <div className={`${className ? className : ''}input-form`}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="category">Category: </label>
                    <select id="category" name="category" onChange={event => setCategory(event.target.value)}>
                        <option value="constant">Constants</option>
                        <option value="food">Food</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                    <label htmlFor="cost"></label>
                    <input type="text" id="cost" name="cost" placeholder="Cost" value={cost} onChange={event => setCost(event.target.value)}></input>
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" name="date" onChange={event => setDate(event.target.value)}></input>
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