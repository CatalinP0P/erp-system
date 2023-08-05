import React from 'react'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<label>Homepage</label>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
