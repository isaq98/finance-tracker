import React from 'react'
import PrimaryTable from './components/PrimaryTable';

function App() {
  return (
    <div>
      <PrimaryTable className='main-menu-table' headers={['Categories', 'Cost', 'Date', 'Description']}/>
    </div>
  )
}

export default App