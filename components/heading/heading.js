import React from "react";
import style from './heading.module.css'

export default function Heading({ heading }) {
  return (
    <h1 className={style.heading}>
      <span>{heading}</span>
    </h1>
  );
}
