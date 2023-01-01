import React from 'react'
import ExpenseForm from 'Components/ExpenseForm';
import InitialForm from 'Components/InitialForm';
import LandingPage from 'Components/LandingPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/initialform" element={<InitialForm />}/>
      <Route path="/expenseform" element={<ExpenseForm />}/>
    </Routes>
    </div>
  )
}

export default App