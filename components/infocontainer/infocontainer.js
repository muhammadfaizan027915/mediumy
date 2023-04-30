import React, { Children } from 'react'
import style from './infocontainer.module.css'

export default function Infocontainer({children, heading}) {
  return (
    <div className={`authorInfoContainer ${style.infoContainer}`}>
      <h2 className='authorInfoHeading'>{heading}</h2>
      {children}
    </div>
  );
}
