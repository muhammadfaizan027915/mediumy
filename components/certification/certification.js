import React from "react";
import style from "./certification.module.css";

export default function Certification({
  name,
  issuedOn,
  issuedBy,
  certificationLink,
}) {
  return (
    <li className={style.certificationItem}>
      <h3>{name}</h3>
      <div className={`flex flex-column ${style.certificationInfo}`}>
        <p>{issuedBy}</p>
        <span>{`Issued ${issuedOn}`}</span>
        {certificationLink && (
          <a href={certificationLink} className="flex center align-center" target="_blank">
            Show credential
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        )}
      </div>
    </li>
  );
}
