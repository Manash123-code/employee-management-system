import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  return (
    <div className="main-card">
      {/* Centered Modern Header */}
      <div className="app-header">
        <div className="app-logo">
          <svg viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <h1>Employee Management App</h1>
        <p>Manage your employees and records easily.</p>
      </div>

      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;