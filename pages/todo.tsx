import Image from "next/image";
import React from "react";
import todoImg from "../public/assets/projects/todo-01.jpg";
import styles from "../styles/Project.module.scss";
const TECH = [
  "ReactJS",
  "React-native-web",
  "Redux",
  "Styled-components",
  "GraphQL",
  "Node.js",
  "Express",
  "MongoDB",
  "Webpack",
];

const Todo = () => {
  return (
    <div className="project-wrapper">
      <div className={styles.header}>
        <Image
          //   className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={todoImg}
          alt="/"
        />
      </div>
      <div className="container">
        <main>
          <h1>Список задач</h1>
          <div className={styles.links}>
            {/* <Link href="#">
            <a>Исходный код</a>
          </Link> */}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kosteyyy/todo-fullstack-grahpql-mongodb"
            >
              Исходный код
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://todo-fullstack.onrender.com/"
            >
              Перейти
            </a>
            <div className={styles.message}>
              Приложение развернуто на бесплатном ресурсе render.com. Первый
              старт занимает около 30 секунд
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
              Fullstack приложение список задач ToDo. Тестовое задание при
              приеме на работу. Изначально было выполнено десктопное приложение,
              но позже по требованию заказчика было переписано с использованием
              React-native-web.
            </p>
            <p>
              Приложение работает на собственном сервере Express. Для хранения
              данных используется база данных MongoDB. Обращение к базе данных
              на GraphQL, а состояние приложения управляется Redux. Сборка
              проекта - webpack.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Todo;
