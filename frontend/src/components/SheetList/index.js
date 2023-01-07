import React, { useState, useEffect } from 'react';
import { getAllSheets } from 'Services/ExpenseServices';

function SheetList(props) {
    const [sheets, setSheets] = useState([]);

    const renderAllSheets = () => {
        if(sheets.length > 0) {
            return sheets.map((element) => {
                return (
                    <div key={element.month}>
                        <h3>{element.month}</h3>
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