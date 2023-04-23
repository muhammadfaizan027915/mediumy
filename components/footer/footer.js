import React from "react";
import Link from "next/link";
import Logo from "../logo/logo";
import Navlinks from "../navlinks/navlinks";
import Container from "../container/container";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <Container className={style.footercontainer}>
      <div className={`flex align-center spacebetween ${style.footer}`}>
        <div className={`flex align-center spacebetween ${style.footleft}`}>
          <Logo />
          <Navlinks linkClass={style.linksgap} />
        </div>
        <div className={style.copyright}>
          <p>
            Copyright &copy; <Link href="/">mediumy.com</Link>
          </p>
        </div>
      </div>
      <div className={style.devmark}>
        <p>
          Devloped by{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/muhammad-faizan027915/"
              target="_blank"
            >
              Muhammad Faizan
            </a>
          </strong>
        </p>
      </div>
    </Container>
  );
}
