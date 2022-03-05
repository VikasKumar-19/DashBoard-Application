import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashboardPage';
import LoginModule from './components/LoginPage';
import SignupModule from './components/SignupPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/login' element={<LoginModule />} />
        <Route path='/signup' element={<SignupModule />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;