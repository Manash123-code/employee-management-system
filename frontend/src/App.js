import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="main-card">
      <BrowserRouter>
        <Routes>
          {/* Default redirect to Login */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Dashboard / Employee Routes */}
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;