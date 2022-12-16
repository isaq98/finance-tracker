import React from 'react'
import ExpenseForm from 'Components/ExpenseForm';
import LandingPage from 'Components/LandingPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/expenseform" element={<ExpenseForm />}/>
    </Routes>
    </div>
  )
}

export default App