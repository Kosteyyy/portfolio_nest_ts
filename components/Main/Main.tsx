import React from "react";
import styles from "./index.module.scss";

const Main = () => {
  return (
    <section className={`${styles.hero} section-wrapper section--accent`}>
      <div className="container">
        <div className={styles.content}>
          <h1>Сделаем вместе!</h1>
          <p className={styles.hello}>
            Привет, я <span className={styles.accent}>Константин</span>
            <br />
            Frontend разработчик
          </p>
          <p>
            Я - фронтенд разработчик, специализирующийся на создании
            web-приложений и сайтов. В основном - фронтенд, но и немного своего
            бэкэнда
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
