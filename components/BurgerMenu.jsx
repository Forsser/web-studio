"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/src/style/burger-menu.module.scss";

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Забороняємо скрол при відкритому меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.burger__wrapper}>
      <button
        className={`${styles.burger} ${
          isMenuOpen ? styles.burger__active : ""
        }`}
        onClick={toggleMenu}
        aria-label="Меню"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </button>

      <div
        className={`
        ${styles.menu}
        ${isMenuOpen ? styles.menu__active : ""}
      `}
      >
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link
                href="#example"
                className={styles.navigation__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Портфоліо
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link
                href="#specialization"
                className={styles.navigation__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Послуги
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link
                href="#about"
                className={styles.navigation__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Про нас
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link
                href="/"
                className={styles.navigation__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.contacts}>
          <div className={styles.contacts__info}>
            <span className={styles.contacts__phone}>+38 (000) 000-00-00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
