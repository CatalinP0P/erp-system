import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import {
  Dashboard,
  Email,
  Groups,
  Receipt,
  Report,
  SvgIconComponent,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import './navigation.scss'

interface navLinkProps {
  link: string
  text: string
  icon: SvgIconComponent
}

interface navLinkGroup {
  title: string
  links: navLinkProps[]
}

const groups: navLinkGroup[] = [
  {
    title: 'Management',
    links: [
      {
        link: '/',
        text: 'Dashboard',
        icon: Dashboard,
      },
      {
        link: '/projects',
        text: 'Projects',
        icon: FormatListBulletedIcon,
      },
      {
        link: '/team',
        text: 'Team',
        icon: Groups,
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        link: '/email',
        text: 'Email',
        icon: Email,
      },
      {
        link: '/invoice',
        text: 'Invoice',
        icon: Receipt,
      },
      {
        link: '/reports',
        text: 'Reports',
        icon: Report,
      },
    ],
  },
]

export default function Navigation() {
  const navigate = useNavigate()

  return (
    <div className="nav__list">
      {groups.map((group) => {
        {
          return (
            <div className="nav__list__group">
              <label className="nav__list__group__title">{group.title}</label>
              <div className="nav__list__group__items">
                {group.links.map((link) => {
                  return (
                    <label
                      onClick={() => navigate(link.link)}
                      className={
                        'nav__item ' +
                        (window.location.href
                          .replace(window.location.origin, '')
                          .toLowerCase() === link.link
                          ? 'active'
                          : '')
                      }
                      key={link.link}
                    >
                      <link.icon className="nav__item__icon" />
                      {link.text}
                    </label>
                  )
                })}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
