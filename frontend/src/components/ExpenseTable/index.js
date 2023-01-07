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
    const bills = useSelector((state) => state.expenses);
    const sheetDate = useSelector((state) => state.sheet_date);
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