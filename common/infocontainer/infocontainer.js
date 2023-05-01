import React, { Children } from "react";
import style from "./infocontainer.module.css";

export default function Infocontainer({ children, heading, headingFellow }) {
  return (
    <div className={`authorInfoContainer ${style.infoContainer}`}>
      <div className={`flex align-center spacebetween ${style.infoHead}`}>
        <h2 className="authorInfoHeading">{heading}</h2>
        {headingFellow}
      </div>
      <div>{children}</div>
    </div>
  );
}
