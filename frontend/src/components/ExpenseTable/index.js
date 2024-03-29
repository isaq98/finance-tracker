import React from 'react';
import './_ExpenseTable.scss';
import { useSelector } from 'react-redux';

function makeTableHeaders(data) {
    const responseObj = data[0];
    const tableHeaders = Object.keys(responseObj);
    return tableHeaders.map((element) => {
        return <td key={element}>{element}</td>
    });
}

const formatDate = (date) => {
    const currDate = new Date(date);
    return currDate.toLocaleString().split(',')[0];
}

function makeTableRows(data) {
    return data.map((element) => {
       return (
       <tr key={element.description} className={`expense-table-row ${element.category}`}>
            <td className="table-cell-category"><div className="expense-category-container"><p>{element.category}</p></div></td>
            <td><p>${element.cost}</p></td>
            <td><p>{formatDate(element.date)}</p></td>
            <td><p>{element.description}</p></td>
        </tr>
       )
    })
}

function ExpenseTable(props) {
    const bills = useSelector((state) => state.expenses);
    //Need to add some type of loading window here while we wait for the API call to update the redux state
    return (
        <table className="expense-table">
            <thead className="expense-table-headers">
                <tr>
                {bills.length > 0 && makeTableHeaders(bills)}
                </tr>
            </thead>
            <tbody className="expense-table-body">
            {bills.length > 0 && makeTableRows(bills)}
            </tbody>
        </table>
    )
}

export default ExpenseTable;