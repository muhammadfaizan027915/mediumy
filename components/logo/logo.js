import React from "react";
import Link from "next/link";
import style from "./logo.module.css";

export default function Logo() {
  return (
    <h1 className={style.logo}>
      <Link href="/">m</Link>
    </h1>
  );
}
