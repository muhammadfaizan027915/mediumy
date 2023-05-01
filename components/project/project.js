import React from "react";
import style from "./project.module.css";
import Linkbutton from "../linkbutton/linkbutton";

export default function Project({ name, projectUrl, description }) {
  return (
    <li className={style.project}>
      <div className={`flex align-center spacebetween`}>
        <h3>{name}</h3>
        <Linkbutton title="show project" url={projectUrl} />
      </div>
      <div>{description && <p>{description}</p>}</div>
    </li>
  );
}
