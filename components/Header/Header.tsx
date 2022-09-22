import React, { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import Menu from "./Menu/Menu";
import Link from "next/link";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); //Определяет класс visible в меню

  const toggleMenu = () => {
    setIsMenuVisible((state) => !state);
  };
  let toggleBtnClassName = classNames(
    styles.toggleMenu,
    isMenuVisible && styles.active
  );

  return (
    <div className={styles.headerWrapper}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <h1>
                <a>LOGO</a>
              </h1>
            </Link>
          </div>
          <Menu visible={isMenuVisible} />
          <div className={toggleBtnClassName} onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
