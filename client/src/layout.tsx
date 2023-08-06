import React, { useState } from 'react'
import Header from './components/ui/header/header'
import Navigation from './components/ui/navigation/navigation'

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
      <div className="layout__grid">
        <div className="layout__grid__destop__nav">
          <Navigation />
        </div>

        <div
          className={
            'layout__grid__mobile__nav ' + (mobileMenu ? 'active' : '')
          }
        >
          <Navigation />
        </div>
        {mobileMenu && (
          <div className="overlay" onClick={() => setMobileMenu(false)} />
        )}
        <div className="content__grid">{children}</div>
      </div>
    </div>
  )
}
