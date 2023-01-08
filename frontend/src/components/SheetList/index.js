import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllSheets, getAllBills } from 'Services/ExpenseServices';
import { setSheetDate, setExpenses } from 'Store/actions/TableActions';

function SheetList(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sheets, setSheets] = useState([]);

    const navigateToTable = (dateStr) => {
        const dateObj = dateStr.toLocaleString('en-US', {
            month: "long",
            year: "numeric",
            timeZone: 'GMT'
        });
        dispatch(setSheetDate(dateObj));
        getAllBills().then((data) => {
           const retArr = data?.Bills.filter((bill) => {
                const billDate = new Date(bill.date);
                const billMonth = billDate.toLocaleString('en-US', {
                    month: "long",
                    year: "numeric",
                    timeZone: "GMT"
                });
                return dateObj === billMonth;
            });
            dispatch(setExpenses(retArr));
        });
        navigate('/expenseform');
    }

    const renderAllSheets = () => {
        if(sheets.length > 0) {
            return sheets.map((element, i) => {
                const objectDate = new Date(element.month);
                const displayDate = objectDate.toLocaleString('en-US', {
                    month: "long",
                    year: "numeric",
                    timeZone: "GMT"
                });
                return (
                    <div key={element.month} className={`sheet-row-${i}`}>
                        <h3>{displayDate}</h3>
                        <p onClick={() => navigateToTable(objectDate)}>See Month</p>
                    </div>
                )
            })
        }
    };

    useEffect(() => {
        getAllSheets().then((data) => {
            setSheets(data?.Sheets);
        });
    }, []);

    return(
        <div>
        {renderAllSheets()}
        </div>
    )
}

export default SheetList;