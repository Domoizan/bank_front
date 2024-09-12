import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sign from './pages/Sign_in'
import User from './pages/User'
import Transactions from './pages/Transactions'

 

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign_in" element={<Sign />} />
      <Route path="/User" element={<User />} />
      <Route path="/Transactions/:AccId" element={<Transactions />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App;
