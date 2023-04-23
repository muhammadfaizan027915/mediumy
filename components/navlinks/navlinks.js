import React from "react";
import Link from "next/link";
import { navLinks } from "@/locale/navLinks";
import style from "./navlinks.module.css";

export default function Navlinks({ linkClass, linkItemClass }) {
  return (
    <ul className={`flex ${linkClass}`}>
      {navLinks.map(({ id, title, path }) => (
        <li key={id} className={`${style.navlinks} ${linkItemClass}`}>
          <Link href={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
