import React from "react";
import Certification from "../certification/certification";
import Commonlist from "../../common/commonlist/commonlist";
import style from "./certifications.module.css";
import Infocontainer from "../infocontainer/infocontainer";

export default function Certifications({ certifications }) {
  return (
    <Infocontainer heading="Certifications">
      <Commonlist>
        {certifications.map((certificate, index) => (
          <Certification {...certificate} key={index} />
        ))}
      </Commonlist>
    </Infocontainer>
  );
}
