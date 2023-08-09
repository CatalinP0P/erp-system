import React from 'react'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './context/authContext'

import Overview from './pages/overview/overview'
import Projects from './pages/projects/projects'
import Project from './pages/project/project'
import Team from './pages/team/team'

import './App.css'
import { DatabaseProvider } from './context/databaseContext'

export default function App() {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </DatabaseProvider>
    </AuthProvider>
  )
}
