import React, {useState, useEffect} from 'react';

function makeTableRows(data) {
    return data.map((element) => {
       return (
       <tr key={element.description}>
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
        .then((res) => res.json())
        .then((data) => setBillData(data));
    }, []);

    // const makeTableRows = () => {
    //     //const {Bills} = billData;
    //     //const bills = billData.Bills;
    //     console.log('billData: ', billData)
    //     //console.log('bills: ', bills);
    //     // bills.map((element) => {
    //     //     return <tr>
    //     //         <td>{element.category}</td>
    //     //         <td>{element.cost}</td>
    //     //         <td>{element.date}</td>
    //     //         <td>{element.description}</td>
    //     //     </tr>
    //     // })
    // }
    const {Bills} = billData;
    return (
        <table>
            <thead>
                <tr>
                    <td>Category</td>
                    <td>Cost</td>
                    <td>Date</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
             {makeTableRows(Bills)}
            </tbody>
        </table>
    )
}

export default ExpenseTable;