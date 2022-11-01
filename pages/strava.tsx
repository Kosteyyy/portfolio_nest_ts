import Image from "next/image";
import React from "react";
import styles from "../styles/Project.module.scss";
import stravaImg from "../public/assets/projects/strava-04.jpg";
const TECH = [
  "ReactJS",
  "Node.js",
  "Express",
  "Webpack",
  "Strava API",
  "MapBox API",
];

const Strava = () => {
  return (
    <div className="project-wrapper">
      <div className={styles.header}>
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={stravaImg}
          alt="/"
        />
      </div>
      <div className="container">
        <main>
          <h1>Анализ тренировочной активности Strava</h1>
          <div className={styles.links}>
            {/* <Link href="#">
            <a>Исходный код</a>
          </Link> */}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kosteyyy/stravavisual"
            >
              Исходный код
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stravavisual.herokuapp.com"
            >
              Перейти
            </a>{" "}
            <div className={styles.message}>
              В связи с прекращением работы сервиса Strava на территории РФ
              работа приложения возможна только через VPN. Приложение развернуто
              на бесплатном ресурсе heroku. Первый старт занимает около 30
              секунд
            </div>
          </div>

          <div className={styles.tech}>
            <h3>Технологии:</h3>
            <ul>
              {TECH.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <section>
            <h2>О проекте</h2>
            <p>
              Fullstack приложение для анализа тренировочной активности,
              использующее API одного из самых популярных трекеров активности
              Strava.
            </p>
            <p>
              Серверная часть написана на Node.js и использует Express сервер.
              При авторизации нашего приложения в Strava сервер получает токен
              авторизации и refresh токен. При истечении срока действия токена
              авторизации он обновляется с использованием refresh токена.
            </p>
            <div className={styles.imgContainer}>
              <Image
                layout="fill"
                objectFit="contain"
                // width="100%"
                // height="100%"
                // objectPosition="top"
                src={"/assets/projects/strava-02.jpg"}
                alt="/"
              />
            </div>
            <p>
              Клиентская часть написана на React и отвечает за визуализацию
              данных, полученных от трекера. Графическое представление данных
              выполнено с помощью SVG диаграммы без использования сторонних
              библиотек. Диаграмма генерируется непосредственно в приложении и
              обновляется при изменении данных или представления.
            </p>
            <div className={styles.imgContainer}>
              <Image
                layout="fill"
                objectFit="contain"
                // width="100%"
                // height="100%"
                // objectPosition="top"
                src={"/assets/projects/strava-01.jpg"}
                alt="/"
              />
            </div>

            <p>
              По координатам тренировки через API Dadata и MapBox определяется
              местоположение. Таким образом возможно проанализировать статистику
              тренировочной активности в разных локациях.
            </p>
            <p>
              Также возможно отображение статистики тренировок в зависимости от
              вида спорта и анализ по количеству тренировок, времени активности
              или пройденной дистанции.
            </p>
            <p>
              К сожалению, Strava отключила возможность использования сервиса на
              территории РФ. Работа приложения возможна только через VPN. В
              связи с этим дальнейшая разработка и улучшение данного приложения
              мной прекращена.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Strava;
