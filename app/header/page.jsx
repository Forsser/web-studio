import styles from "./page.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.header__container}>
          <div className={`${styles.header__logo} ${styles.logo}`}>
            {/*             <img src="#" alt="Company Logo" className={styles.logo__image} />
             */}{" "}
            Logo
          </div>

          <nav className={`${styles.header__navigation} ${styles.navigation}`}>
            <ul className={styles.navigation__list}>
              <li className={styles.navigation__item}>
                <a href="/" className={styles.navigation__link}>
                  Портфоліо
                </a>
              </li>
              <li className={styles.navigation__item}>
                <a href="/about" className={styles.navigation__link}>
                  Послуги
                </a>
              </li>
              <li className={styles.navigation__item}>
                <a href="/services" className={styles.navigation__link}>
                  Про нас
                </a>
              </li>
              <li className={styles.navigation__item}>
                <a href="/portfolio" className={styles.navigation__link}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <div className={`${styles.header__contacts} ${styles.contacts}`}>
            <div className={styles.contacts__info}>
              <span className={styles.contacts__phone}>
                +38 (000) 000-00-00
              </span>
              {/*  <a
                href="mailto:email@example.com"
                className={styles.contacts__email}
              >
                email@example.com
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
