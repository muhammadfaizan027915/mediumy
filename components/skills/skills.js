import React from "react";
import Skill from "../skill/skill";
import { skills } from "@/locale/skills";
import style from './skills.module.css'

export default function Skills() {
  return (
    <div className={style.skillsContainer}>
      <h2>Skills</h2>
      <ul>
        {skills.map(({ skill, percentage }) => (
          <Skill skill={skill} percentage={percentage} />
        ))}
      </ul>
    </div>
  );
}
