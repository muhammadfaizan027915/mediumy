import React from "react";
import Skill from "../skill/skill";
import { skills } from "@/locale/skills";
import style from './skills.module.css'

export default function Skills() {
  return (
    <div className={`authorInfoContainer ${style.skillsContainer}`}>
      <h2 className="authorInfoHeading">Skills</h2>
      <ul>
        {skills.map(({ skill, percentage }, index) => (
          <Skill skill={skill} percentage={percentage} key={index}/>
        ))}
      </ul>
    </div>
  );
}
