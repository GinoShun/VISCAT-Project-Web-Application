import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AlertNotification from './shared/components/AlertNotification'
import { Dashboard } from './dashboard/dashboard'
import { InfroCollectMain } from './StudentInfoColllect/InfroCollectMain'
import LoginPage from './authPages/LoginPage/LoginPage'
import ChangeP from './dashboard/Content/ChangeP/ChangeP'

import './App.css'
import RemakePassword from './dashboard/Content/FindMore/RemakePassword'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/changeP" element={<ChangeP />} />
          <Route path="/reset-password/:token" element={<RemakePassword />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/upload" element={<InfroCollectMain />} />

        </Routes>
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
