import React from 'react'
import style from './container.module.css'


export default function Container({children, className}) {
  return (
    <div className={`${style.container} ${className}`}>{children}</div>
  )
}
