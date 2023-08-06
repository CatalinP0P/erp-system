import React from 'react'
import Logo from '../../others/logo/logo'
import SettingsIcon from '@mui/icons-material/Settings'
import profileBlank from '../../../assets/profileblank.webp'

import { Notifications } from '@mui/icons-material'
import { MenuRounded } from '@mui/icons-material'
import { ClearRounded } from '@mui/icons-material'
import './header.scss'

export default function Header({
  setMobileMenu,
  mobileMenu,
}: {
  setMobileMenu?: any
  mobileMenu?: boolean
}) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="row">
          {mobileMenu ? (
            <ClearRounded
              className="mobile--menu__button"
              onClick={() => setMobileMenu((oldMenu: boolean) => !oldMenu)}
            />
          ) : (
            <MenuRounded
              className="mobile--menu__button"
              onClick={() => setMobileMenu((oldMenu: boolean) => !oldMenu)}
            />
          )}

          <Logo />
        </div>
        <div className="header__button__group">
          <div className="header__button">
            <SettingsIcon />
          </div>
          <div className="header__button">
            <Notifications />
          </div>
          <div className="profile__card">
            <div className="profile__card__container">
              <label className="profile__card__name">Catalin Pop</label>
              <label className="profile__card__email">
                catalinpce@gmail.com
              </label>
            </div>
            <img src={profileBlank} className="profile__card__image" />
          </div>
        </div>
      </div>
    </div>
  )
}
