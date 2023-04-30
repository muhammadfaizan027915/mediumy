import React from 'react'
import style from './skill.module.css'

export default function Skill({skill, percentage}) {
  return (
    <li className={style.skill}>
      <label>
        <span>{skill}</span>
        <span>{`${percentage}%`}</span>
      </label>
      <progress value={percentage} max={100} />
    </li>
  );
}
