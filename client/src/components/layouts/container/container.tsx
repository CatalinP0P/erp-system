import React, { HTMLAttributes } from 'react'
import './container.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={'container ' + className} {...props}>
      {children}
    </div>
  )
}
