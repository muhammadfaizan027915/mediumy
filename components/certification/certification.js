import React from "react";
import style from "./certification.module.css";
import Linkbutton from "../linkbutton/linkbutton";

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
          <Linkbutton title="show credential" url={certificationLink}/>
        )}
      </div>
    </li>
  );
}
