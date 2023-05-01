import React from "react";
import Infocontainer from "@/common/infocontainer/infocontainer";
import Commonlist from "@/common/commonlist/commonlist";
import { projects } from "@/locale/projects";
import Project from "../project/project";
import style from "./projects.module.css";

export default function Projects() {
  return (
    <Infocontainer heading="Projects">
      <Commonlist>
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </Commonlist>
    </Infocontainer>
  );
}
