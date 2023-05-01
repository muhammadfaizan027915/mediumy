import React from "react";
import Certification from "../certification/certification";
import Commonlist from "../../common/commonlist/commonlist";
import Infocontainer from "../../common/infocontainer/infocontainer";

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
