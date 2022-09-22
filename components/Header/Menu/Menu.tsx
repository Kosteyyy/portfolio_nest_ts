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
          <Link href={"/"}>Главная</Link>
        </li>
        <li>
          <Link href={"/"}>Обо мне</Link>
        </li>
        <li>
          <Link href={"/"}>Навыки</Link>
        </li>
        <li>
          <Link href={"/"}>Проекты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
