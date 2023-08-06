import React, { useState } from 'react'
import {
  OverridableComponent,
  OverridableTypeMap,
} from '@mui/material/OverridableComponent'

interface buttonProps {
  children: React.ReactNode
  Icon: OverridableComponent<OverridableTypeMap>
}

export default function HeaderButton({ children, Icon }: buttonProps) {
  const [visibility, setVisibility] = useState(false)

  return (
    <div className="header__button__container">
      <div
        className="header__button"
        onClick={() => setVisibility(!visibility)}
      >
        <Icon />
      </div>
      <div
        className={'header__button__dropdown ' + (visibility ? ' active' : ' ')}
      >
        {children}
      </div>
      {visibility && (
        <div className="overlay" onClick={() => setVisibility(false)}></div>
      )}
    </div>
  )
}
