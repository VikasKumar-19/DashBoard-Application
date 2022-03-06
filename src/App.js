import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashboardPage';
import LoginModule from './components/LoginPage';
import SignupModule from './components/SignupPage';
import AuthWrapper from './context/AuthWrapper';

const App = () => {

  return (
    <BrowserRouter>
      <AuthWrapper>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/login' element={<LoginModule />} />
          <Route path='/signup' element={<SignupModule />} />
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  )
}

export default App;