import React from "react";
import Navlinks from "../navlinks/navlinks";
import Logo from "../logo/logo";

export default function Navbar({
  justifyContent,
  alignItems,
  linksClass,
  linkItemClass,
}) {
  return (
    <div className={`flex ${justifyContent} ${alignItems}`}>
      <Logo />
      <Navlinks linkClass={linksClass} linkItemClass={linkItemClass} />
    </div>
  );
}
