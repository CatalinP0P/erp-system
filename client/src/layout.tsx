import React, { useState } from 'react'
import Header from './components/ui/header/header'
import Navigation from './components/ui/navigation/navigation'
import AuthProvider from './context/authContext'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <div className="layout--grid">
        <div className="layout--grid__destop__nav">
          <Navigation />
        </div>

        <div
          className={
            'layout--grid__mobile__nav ' + (mobileMenu ? 'active' : '')
          }
        >
          <Navigation />
        </div>
        {mobileMenu && (
          <div
            className="overlay--mobile"
            onClick={() => setMobileMenu(false)}
          />
        )}
        <div className="content--grid">{children}</div>
      </div>
    </div>
  )
}
