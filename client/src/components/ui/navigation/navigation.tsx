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

import './navigation.scss'
import { Paper } from '@mui/material'

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
                    <a
                      href={link.link}
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
                    </a>
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
