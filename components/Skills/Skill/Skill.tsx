import Image from "next/image";
import React from "react";
import { TSkill } from "../../../types";
import styles from "./index.module.scss";

interface IProps {
  skill: TSkill;
}

const Skill: React.FC<IProps> = ({ skill }) => {
  return (
    <div className={styles.skill}>
      <Image
        src={`/assets/skills/${skill.img}`}
        alt={skill.name}
        width="64px"
        height="64px"
      />
      <h2>{skill.name}</h2>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis
        aliquam impedit aliquid, beatae amet itaque error sed eos rerum, iure
        maxime labore, quod repellat vitae inventore tempore sunt sit?
      </p> */}
    </div>
  );
};

export default Skill;
