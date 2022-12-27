import React, {useState, useEffect} from 'react';
import './_ExpenseTable.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBills } from '../../Services/ExpenseServices';
import { getExpenses } from 'Store/actions/TableActions';

function makeTableHeaders(data) {
    if(data) {
        const responseObj = data[0];
        const tableHeaders = Object.keys(responseObj);
        return tableHeaders.map((element) => {
            return <td key={element}>{element}</td>
        });
    } 
}

function makeTableRows(data) {
    return data.map((element, index) => {
       return (
       <tr key={element.description} className={`expense-table-row-${index}`}>
            <td>{element.category}</td>
            <td>${element.cost}</td>
            <td>{element.date}</td>
            <td>{element.description}</td>
        </tr>
       )
    })
}

function ExpenseTable(props) {
    const dispatch = useDispatch();
    //const [billData, setBillData] = useState([]);
    const bills = useSelector((state) => state.expenses);
    useEffect(() => {
        getAllBills().then((data) => dispatch(getExpenses(data?.Bills)));
    }, []);

    //Need to add some type of loading window here while we wait for the API call to update the redux state
    return (
        <table className="expense-table">
            <thead className="expense-table-headers">
                <tr>
                    {makeTableHeaders(bills)}
                </tr>
            </thead>
            <tbody className="expense-table-body">
                {makeTableRows(bills)}
            </tbody>
        </table>
    )
}

export default ExpenseTable;