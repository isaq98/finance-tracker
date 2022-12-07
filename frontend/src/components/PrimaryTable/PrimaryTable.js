import React, {useState, useEffect} from 'react'
import './_PrimaryTable.scss'

function createRows(billData) {
    return billData.map((bill) => {
      return (
        <tr key={bill.description}>
          <td key={bill.category}>{bill.category}</td>
          <td key={bill.cost}>{bill.cost}</td>
          <td key={bill.date}>{bill.date}</td>
          <td key={bill.description}>{bill.description}</td>
        </tr>
      )
    })
  }

function createTableHeader(headers) {
    return(
        headers.map((header) => {
            return <th key={header}>{header}</th>
        })
    );
}

function PrimaryTable(props) {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/bills').then(  
        res => res.json()
    ).then(
      data => {
        setData(data);
      }
    )

  }, []);

  const {Bills} = data;
  const {className, headers } = props;
  return (
    <div>
      {(typeof Bills === 'undefined') ?
      (<p>Loading...</p>) :
      (
        <table className={className}>
            <tr className={`${className ? `${className}-` : ''}header`}>
                {createTableHeader(headers)}
            </tr>
            {createRows(Bills)}
        </table>
      )}
    </div>
  )
}

export default PrimaryTable