import React from 'react'
import Logo from '../../others/logo/logo'
import SettingsIcon from '@mui/icons-material/Settings'
import { Notifications } from '@mui/icons-material'
import './header.scss'
import Container from '../../layouts/container/container'

export default function Header() {
  return (
    <div className="header">
      <Container className=" header__container">
        <Logo />
        <div className="header__button__group">
          <div className="header__button">
            <SettingsIcon />
          </div>
          <div className="header__button">
            <Notifications />
          </div>
        </div>
      </Container>
    </div>
  )
}
