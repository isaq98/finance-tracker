import React, {useState, useEffect} from 'react';
import './_ExpenseTable.scss';
import { useSelector } from 'react-redux';
import { getAllBills } from '../../Services/ExpenseServices';

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
    const [billData, setBillData] = useState([]);
    const bills = useSelector((state) => state.expenses);
    console.log('bills in expensetable: ', bills);
   // const dispatch = useDispatch();
    useEffect(() => {
        // fetch('/bills')
        //     .then(res => res.json())
        //     .then(data => setBillData(data));
        //setBillData(getAllBills());
    }, []);

    const {Bills} = billData;
    return (
        <table className="expense-table">
            <thead className="expense-table-headers">
                <tr>
                </tr>
            </thead>
            <tbody className="expense-table-body">
            </tbody>
        </table>
    )
}

export default ExpenseTable;