import Image from "next/image";
import React from "react";
import styles from "../styles/Project.module.scss";
import eshopImg from "../public/assets/projects/ecommerce-01.jpg";
const TECH = [
  "ReactJS",
  "Redux",
  "Redux Thunk",
  "Node.js",
  "Express",
  "MongoDB",
  "Styled Components",
];

const Eshop = () => {
  return (
    <div className="project-wrapper">
      <div className={styles.header}>
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={eshopImg}
          alt="/"
        />
      </div>
      <div className="container">
        <main>
          <h1>Интернет-магазин</h1>
          <div className={styles.links}>
            {/* <Link href="#">
            <a>Исходный код</a>
          </Link> */}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kosteyyy/eCommerce_LAD"
            >
              Исходный код
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ecommerce-lad.herokuapp.com/"
            >
              Перейти
            </a>{" "}
            <div className={styles.message}>
              Приложение развернуто на бесплатном ресурсе heroku. Первый старт
              занимает около 30 секунд.
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
              Fullstack приложение на MERN стеке. Выполнено при отборе на
              стажировку в компанию Лад.
            </p>
            <p>
              Серверная часть написана на Node.js и использует Express сервер.
              Данные заказов и пользователей хранятся в базе данных MongoDB.
              Обращение к базе данных по REST протоколу.
            </p>

            <p>
              В приложении реализована авторизация пользователей с правами
              пользователя и администратора.
            </p>
            <div className={styles.imgContainer}>
              <Image
                layout="fill"
                objectFit="contain"
                // width="100%"
                // height="100%"
                // objectPosition="top"
                src={"/assets/projects/ecommerce-02.jpg"}
                alt="/"
              />
            </div>

            <p>
              Администратор имеет доступ к дэшборду товаров. Пользователь - к
              каталогу товаров и личному кабинету. Действия с корзиной товаров а
              также история заказов сохраняются в базе данных. Реализован отбор
              товаров в каталоге по категориям и производителю и фильтрация и
              поиск в панели администратора. товарам.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Eshop;
