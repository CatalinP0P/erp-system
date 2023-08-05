import React from 'react'
import logoImage from '../../../assets/logo.png'
import './logo.scss'

export default function Logo() {
  return (
    <div>
      <img className="logo" src={logoImage} />
    </div>
  )
}
