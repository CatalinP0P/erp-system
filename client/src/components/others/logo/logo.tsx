import React from 'react'
import './logo.scss'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'

export default function Logo() {
  return (
    <div className="logo">
      <DisplaySettingsIcon className="logo__image" />
      <label className="logo__text">ERP-System</label>
    </div>
  )
}
