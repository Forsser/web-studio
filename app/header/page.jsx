import Link from "next/link";
import styles from "./page.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <div className={`${styles.header__logo} ${styles.logo}`}>Logo</div>

          <nav className={`${styles.header__navigation} ${styles.navigation}`}>
            <ul className={styles.navigation__list}>
              <li className={styles.navigation__item}>
                <Link href="/" className={styles.navigation__link}>
                  Портфоліо
                </Link>
              </li>
              <li className={styles.navigation__item}>
                <Link href="/about" className={styles.navigation__link}>
                  Послуги
                </Link>
              </li>
              <li className={styles.navigation__item}>
                <Link href="/services" className={styles.navigation__link}>
                  Про нас
                </Link>
              </li>
              <li className={styles.navigation__item}>
                <Link href="/portfolio" className={styles.navigation__link}>
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>

          <div className={`${styles.header__contacts} ${styles.contacts}`}>
            <div className={styles.contacts__info}>
              <span className={styles.contacts__phone}>
                +38 (000) 000-00-00
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
