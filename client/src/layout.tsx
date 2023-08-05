import React from 'react'
import Header from './components/ui/header/header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
