import React from "react";
import { parseISO, format } from "date-fns";
import style from "./date.module.css";

export default function Date({ postTime }) {
  const { dateString, readTime } = postTime | {};
  const date = parseISO(dateString);
  return (
    <p className={style.postdate}>
      <time dateTime={dateString}>{/* {format(date, "LLLL d, yyyy")} */}</time>
      <span>{` . ${readTime} min read`}</span>
    </p>
  );
}
