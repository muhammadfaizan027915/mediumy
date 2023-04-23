import React from "react";
import { parseISO, format } from "date-fns";
import style from "./date.module.css";

export default function Date({ postTime }) {
  const { date, readTime } = postTime || {};
  const dateISO = parseISO(date);
  return (
    <p className={style.postdate}>
      <time dateTime={date}>{format(dateISO, "dd LLLL , yyyy")}</time>
      <span>{` . ${readTime} min read`}</span>
    </p>
  );
}
