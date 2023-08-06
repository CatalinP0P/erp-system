import React, { useState } from 'react'
import { Notifications } from '@mui/icons-material'

export default function NotificationsButton() {
  const [visibility, setVisibility] = useState(false)

  return (
    <div className="header__button__container">
      <div
        className="header__button"
        onClick={() => setVisibility(!visibility)}
      >
        <Notifications />
      </div>
      <div
        className={'header__button__dropdown ' + (visibility ? ' active' : ' ')}
      >
        <label>test</label>
      </div>
      {visibility && (
        <div className="overlay" onClick={() => setVisibility(false)}></div>
      )}
    </div>
  )
}
