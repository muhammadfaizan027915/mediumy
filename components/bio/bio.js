import React from "react";
import Infocontainer from "@/common/infocontainer/infocontainer";
import style from "./bio.module.css";

export default function Bio({ bio, experience }) {
  return (
    <Infocontainer
      heading="Professional Bio"
      headingFellow={
        <span
          className={`flex center align-center ${style.experience}`}
        >{`${experience} years experience`}</span>
      }
    >
      <p className={style.authorBio}>{bio}</p>
    </Infocontainer>
  );
}
