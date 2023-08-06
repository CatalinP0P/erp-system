import React from 'react'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overview from './pages/overview/overview'
import AuthProvider from './context/authContext'

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </AuthProvider>
  )
}
