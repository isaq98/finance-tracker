import React, {useState, useEffect} from 'react';
import './_ExpenseTable.scss';

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
            <td>{element.cost}</td>
            <td>{element.date}</td>
            <td>{element.description}</td>
        </tr>
       )
    })
}

function ExpenseTable(props) {
    const [billData, setBillData] = useState([]);
    useEffect(() => {
        fetch('/bills')
            .then(res => res.json())
            .then(data => setBillData(data));
    }, []);

    const {Bills} = billData;
    console.log('value of data after the fetch request: ', Bills);
    return (
        <table className="expense-table">
            <thead className="expense-table-headers">
                <tr>
                    {makeTableHeaders(Bills)}
                </tr>
            </thead>
            <tbody>
                {makeTableRows(Bills)}
            </tbody>
        </table>
    )
}

export default ExpenseTable;