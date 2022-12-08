import React from 'react'
import PrimaryTable from 'Components/PrimaryTable/PrimaryTable';

function App() {
  return (
    <div>
      <PrimaryTable className='main-menu-table' headers={['Categories', 'Cost', 'Date', 'Description']}/>
    </div>
  )
}

export default App