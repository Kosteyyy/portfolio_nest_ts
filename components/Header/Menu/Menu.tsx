import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  visible: boolean;
}

const Menu: React.FC<IProps> = ({ visible }) => {
  let menuClassName = classNames(styles.menu, visible && styles.visibleMenu);
  return (
    <nav className={menuClassName}>
      <ul>
        <li>
          <Link href={"/"}>
            <a data-text="Главная">Главная</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a data-text="Обо мне">Обо мне</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a data-text="Навыки">Навыки</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a data-text="Проекты">Проекты</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a data-text="Контакты">Контакты</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
