import React from "react";
import Certification from "../certification/certification";
import style from "./certifications.module.css";

export default function Certifications({certifications}) {
  return (
    <div className={`authorInfoContainer`}>
      <h2 className={`authorInfoHeading ${style.certificationHeading}`}>Certifications</h2>
      <ul>
        {certifications.map((certificate) => (
          <Certification {...certificate} />
        ))}
      </ul>
    </div>
  );
}
