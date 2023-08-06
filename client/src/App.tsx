import React from 'react'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overview from './pages/overview/overview'

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
