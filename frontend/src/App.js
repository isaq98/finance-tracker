import React from 'react'
import PrimaryTable from 'Components/PrimaryTable/PrimaryTable';
import ExpenseForm from 'Components/ExpenseForm/ExpenseForm';

function App() {
  return (
    <div>
      <ExpenseForm/>
      <PrimaryTable className='main-menu-table' headers={['Categories', 'Cost', 'Date', 'Description']}/>
    </div>
  )
}

export default App