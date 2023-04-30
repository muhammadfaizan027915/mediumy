import React from "react";
import style from "./splitscreen.module.css";

export default function Splitscreen({
  children,
  leftWeight = 1,
  rightWeight = 1,
  gap,
}) {
  const [left, right] = children;
  return (
    <div className={`flex ${style.splitContainer}`} style={{ gap }}>
      <div className={`${style.leftPane}`} style={{ flexGrow: leftWeight }}>
        {left}
      </div>
      <div className={`${style.rightPane}`} style={{ flexGrow: rightWeight }}>
        {right}
      </div>
    </div>
  );
}
