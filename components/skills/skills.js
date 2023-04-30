import React from "react";
import Skill from "../skill/skill";
import { skills } from "@/locale/skills";
import Commonlist from "../../common/commonlist/commonlist";
import Infocontainer from "../infocontainer/infocontainer";

export default function Skills() {
  return (
    <Infocontainer heading="Skills">
      <Commonlist>
        {skills.map(({ skill, percentage }, index) => (
          <Skill skill={skill} percentage={percentage} key={index} />
        ))}
      </Commonlist>
    </Infocontainer>
  );
}
