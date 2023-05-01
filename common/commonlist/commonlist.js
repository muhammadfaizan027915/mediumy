import React from "react";

export default function Commonlist({ children, className }) {
  return <ul className={className}>{children}</ul>;
}
