import React, { ButtonHTMLAttributes } from 'react'
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost'
}

export default function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} ${className ? className : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
