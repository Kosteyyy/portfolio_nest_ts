import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TProject } from "../../../types";
import styles from "./index.module.scss";

interface IProps {
  project: TProject;
}

const ProjectCard: React.FC<IProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.face} ${styles.face1}`}
        style={{ backgroundImage: `url(./assets/projects/${project.img})` }}
      >
        {/* <Image src={`/assets/projects/${project.img}`} layout="fill"></Image> */}
        <h1>{project.name}</h1>
        <div className={styles.info}>
          <p>{project.stack}</p>
          <Link href={`/${project.link}`}>Перейти</Link>
        </div>
      </div>
      <div className={`${styles.face} ${styles.face2}`}>
        <h2>{project.name}</h2>
        <p>{project.stack}</p>
        <Link href={`/${project.link}`}>Перейти</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
