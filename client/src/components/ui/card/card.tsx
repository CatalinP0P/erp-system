import React, { HTMLAttributes } from 'react'
import './card.scss'

interface cardProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  size?: number
}

export default function Card({
  children,
  className = '',
  size = 1,
}: cardProps) {
  return <div className={`card  card-${size}` + className}>{children}</div>
}
