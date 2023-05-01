import Commonlist from "@/common/commonlist/commonlist";
import Infocontainer from "@/common/infocontainer/infocontainer";
import { workexperience } from "@/locale/workexperience";
import React from "react";
import Experience from "../experience/experience";

export default function Workexperience() {
  return (
    <Infocontainer heading="Work Experience">
      <Commonlist>
        {workexperience.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </Commonlist>
    </Infocontainer>
  );
}
