import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const Menu: React.FC<IProps> = ({ visible, onClose }) => {
  let menuClassName = classNames(styles.menu, visible && styles.visibleMenu);
  return (
    <nav className={menuClassName}>
      <ul>
        <li>
          <Link href={"/"}>
            <a onClick={onClose} data-text="Главная">
              Главная
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/#home-about"}>
            <a onClick={onClose} data-text="Обо мне">
              Обо мне
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/#home-skills"}>
            <a onClick={onClose} data-text="Навыки">
              Навыки
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/#home-projects"}>
            <a onClick={onClose} data-text="Проекты">
              Проекты
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/#home-contact"}>
            <a onClick={onClose} data-text="Контакты">
              Контакты
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
