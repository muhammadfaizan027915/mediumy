import React from "react";
import Container from "../container/container";
import Profileimage from "../profileimage/profileimage";
import Profileinfo from "../profileinfo/profileinfo";
import style from "./profilecontainer.module.css";

export default function Profilecontainer({authorProfile}) {
  return (
    <Container className={`flex align-center ${style.profileSection}`}>
      <Profileimage imgContainerClass={`flex center ${style.imageContiner}`} />
      <Profileinfo infoContainerClass={`${style.infoContainer}`} />
    </Container>
  );
}
