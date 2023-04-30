import React from "react";
import style from "./bio.module.css";

export default function Bio({ bio, experience }) {
  return (
    <div className={`authorInfoContainer`}>
      <div className={`flex align-center ${style.bioHead}`}>
        <h2 className="authorInfoHeading">Professional Bio</h2>
        <span className="flex center align-center">{`${experience} years experience`}</span>
      </div>
      <div>
        <p className={style.authorBio}>{bio}</p>
      </div>
    </div>
  );
}
