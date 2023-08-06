import React, { useState } from 'react'
import Logo from '../../others/logo/logo'
import SettingsIcon from '@mui/icons-material/Settings'
import profileBlank from '../../../assets/profileblank.webp'

import { MenuRounded, Notifications } from '@mui/icons-material'
import { ClearRounded } from '@mui/icons-material'
import { useAuth } from '../../../context/authContext'

import HeaderButton from './components/headerButton'

import './header.scss'

export default function Header({
  setMobileMenu,
  mobileMenu,
}: {
  setMobileMenu?: any
  mobileMenu?: boolean
}) {
  const { user, loading, signOut } = useAuth()

  const [accountDropdown, setAccountDropdown] = useState<boolean>(false)

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
          <HeaderButton Icon={SettingsIcon}>
            <label>Settings</label>
          </HeaderButton>

          <HeaderButton Icon={Notifications}>
            <label>Notifications</label>
          </HeaderButton>

          {accountDropdown && (
            <div
              className="overlay"
              onClick={() => {
                setAccountDropdown(false)
              }}
            />
          )}
          <div className="profile--card">
            <div
              className="profile--card__container"
              onClick={() => setAccountDropdown(!accountDropdown)}
            >
              <label className="profile--card__name">{user?.displayName}</label>
              <label className="profile--card__email">{user?.email}</label>
            </div>
            <img
              onClick={() => setAccountDropdown(!accountDropdown)}
              src={user?.photoURL ? user.photoURL : profileBlank}
              className="profile--card__image"
            />
            <div
              className={
                'profile--card__dropdown ' + (accountDropdown ? ' active' : '')
              }
            >
              <label className="profile--card__dropdown__item">
                Hi, <strong>{user?.email}</strong>
              </label>
              <label
                onClick={() => signOut()}
                className="profile--card__dropdown__item"
              >
                Sign out
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
