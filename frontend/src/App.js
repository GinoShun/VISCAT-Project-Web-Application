import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './authPages/LoginPage/LoginPage'
import AlertNotification from './shared/components/AlertNotification'
import { Dashboard } from './dashboard/DashboardMain'
import { InfroCollectMain } from './StudentInfoColllect/InfroCollectMain'

import './App.css'


function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/upload" element={<InfroCollectMain />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
