import Image from "next/image";
import React from "react";
import pizzaImg from "../public/assets/projects/pizza-01.jpg";
import styles from "../styles/Project.module.scss";
const TECH = [
  "ReactJS",
  "TypeScript",
  "RTK-Query",
  "AWS Lambda",
  "DynamoDB",
  "Vite",
];

const Pizza = () => {
  return (
    <div className="project-wrapper">
      <div className={styles.header}>
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={pizzaImg}
          alt="/"
        />
      </div>
      <div className="container">
        <main>
          <h1>API пиццерии</h1>
          <div className={styles.links}>
            {/* <Link href="#">
            <a>Исходный код</a>
          </Link> */}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kosteyyy/pizza-api-react"
            >
              Исходный код
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pizza-api-react.vercel.app/"
            >
              Перейти
            </a>
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
              Бессерверное Fullstack приложение имитирующее работу пиццерии во
              взаимодействии с клиентской частью - магазином, обработкой заказа
              и службы доставки. Разработано для практики работы с бессерверными
              функциями на базе AWS Lambda.
            </p>
            <p>
              Данные о заказах хранятся в базе данных DynamoDB. Отдельно база
              для хранения заказов пиццерии и отдельно для службы доставки.
              Обращение к сервисам из фронтэнда происходит через запросы
              RTR-Query без обработки данных в сторе клиентской части. Сборка
              клиентской части - Vite, который собирается быстрее и компактнее
              чем Create React App.
            </p>
            <h2>Работа приложения</h2>
            <p>
              Лямбда функции хранятся на сервисе AWS Lambda, при этом они не
              активны постоянно, в отличие от сервера, а отвечают только на
              конкретные запросы. Клиентская часть имеет три страницы,
              имитирующие магазин, пиццерию и службу доставки для отображения
              процессов обработки заказа.
            </p>
            <p>
              При оформлении заказа браузер со страницы клиента отправляет заказ
              на API сервиса пиццерии. Сервис пиццерии переправляет заказ в
              службу доствки, имитируя вызов курьера. Служба доставки оформляет
              у себя заказ, записывает его в свою базу данных и отправляет
              подтверждение на вебхук, предоставленный пиццерией. (Потенциально
              разные клиенты службы доствки могут оставлять свои вебхуки для
              взаимодействия).
            </p>
            <p>
              Пиццерия видит подтверждение от службы доставки и готовит пиццу, в
              свою очередь храня свой заказ в своей базе данных DynamoDB. После
              забора пиццы курьером он изменяет статус заказа, что отображается
              в статусе заказа в пиццерии и у клиента. После доставки пиццы
              курьер отмечает у себя заказ как завершенный, что также через
              вебхук изменяет статус заказа в пиццерии и соответственно у
              клиента.
            </p>
            <p>
              При отмене заказа клиентом отмена проходит через пиццерию
              автоматически в службу доставки.
            </p>
            <p>
              Таким образом имитируется взаимодействие клиента, пицеерии и
              службы доставки чезез их API, а на соответствующих страницах
              приложения отображаются изменения статуса заказов.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Pizza;
