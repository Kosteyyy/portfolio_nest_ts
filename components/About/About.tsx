import React from "react";
import styles from "./index.module.scss";

const About = () => {
  return (
    <section id="home-about" className={`${styles.about} section-wrapper`}>
      <div className="container">
        <div className={styles.content}>
          <h2>Обо мне</h2>
          <h3>Кто я</h3>

          <p>Последние 18 лет я занимался своим бизнесом</p>
          <p>
            Когда я увидел насколько изменились web-технологии за последние
            годы, я быстро погрузился в разработку и хочу создавать интересные
            продукты для людей и других бизнесов.
          </p>
          <p>
            У меня были базовые знания HTML и СSS, поскольку я создавал и долгое
            время поддерживал сайт своей компании. Первые проекты я делал на
            Django, но потом полностью переключился на JavaScript, а потом и
            React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
