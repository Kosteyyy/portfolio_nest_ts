import React from "react";
import { TSkill } from "../../types";
import { SKILLS } from "./const";
import styles from "./index.module.scss";
import Skill from "./Skill/Skill";

const Skills = () => {
  return (
    <section
      id="home-skills"
      className={`${styles.wrapper} section-wrapper section--accent`}
    >
      <div className="container">
        <h2>Навыки</h2>
        <h3>Что я умею</h3>
        <div className={styles.skills}>
          {SKILLS.map((skill: TSkill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
