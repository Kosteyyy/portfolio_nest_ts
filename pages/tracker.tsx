import Image from "next/image";
import React from "react";
import trackerImg from "../public/assets/projects/tracker-01.jpg";
import styles from "../styles/Project.module.scss";

const Tracker = () => {
  return (
    <div className="project-wrapper">
      <div className={styles.header}>
        <Image
          //   className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={trackerImg}
          alt="/"
        />
      </div>
      <div className="container">
        <main>
          <h2>Трекер задач</h2>
        </main>
      </div>
    </div>
  );
};

export default Tracker;
