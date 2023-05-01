import React from "react";
import style from "./experience.module.css";

export default function Experience({
  position,
  startDate,
  endDate,
  company,
  type,
  description,
}) {
  return (
    <li className={style.experience}>
      <div className={`flex spacebetween align-center ${style.experienceHead}`}>
        <h3>{position}</h3>
        <span>{`${startDate} - ${endDate}`}</span>
      </div>
      <div className={`${style.experienceBody}`}>
        <span>{company}</span>{" . "}
        <span>{type}</span>
        {description && <p>{description}</p>}
      </div>
    </li>
  );
}
