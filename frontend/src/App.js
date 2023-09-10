import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './authPages/LoginPage/LoginPage'
import RegisterPage from './authPages/RegisterPage/RegisterPage'
import AlertNotification from './shared/components/AlertNotification'
import { Dashboard } from './dashboard/DashboardMain'
import { UploadPage } from './StudentInfoColllect/teacherDataUploadPage'

import './App.css'


function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
