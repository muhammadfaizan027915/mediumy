import React from "react";
import style from "./linknbutton.module.css";

export default function Linkbutton({ title, url }) {
  return (
    <a href={url} className={`flex align-center center ${style.linkButton}`} target="_blank">
      {title}
      <span className="material-symbols-outlined">open_in_new</span>
    </a>
  );
}
