import React from 'react'
import ExpenseForm from 'Components/ExpenseForm';
import InitialForm from 'Components/InitialForm';
import LandingPage from 'Components/LandingPage';
import SheetList from 'Components/SheetList';
import Sidebar from 'Components/Sidebar';
import Headbar from 'Components/Headbar';
import {Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const sectionTitle = useSelector((state) => state.section_title);
  return (
    <div className="app">
    <Sidebar />
    {/* <Headbar sectionTitle={sectionTitle} /> */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/initialform" element={<InitialForm />}/>
      <Route path="/expenseform" element={<ExpenseForm />}/>
      <Route path="/sheetlist" element={<SheetList />}/>
    </Routes>
    </div>
  )
}

export default App