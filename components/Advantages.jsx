import style from "@/src/style/advantages.module.scss";

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <ul className={style.advantages__items}>
          <li className={style.advantages__item}>
            <p className={style.advantages__title}>
              Ваш сайт залучатиме на 114% більше заявок{" "}
            </p>
            <p className={style.advantages__text}>
              Ми створюємо глибоко продумані, унікальні та сильні сайти
            </p>
          </li>
          <li className={style.advantages__item}>
            <p className={style.advantages__title}>
              Сайт буде відразу готовий до СЕО просування та реклами
            </p>
            <p className={style.advantages__text}>
              Оптимізований для сео просування та готовий до реклами
            </p>
          </li>
          <li className={style.advantages__item}>
            <p className={style.advantages__title}>Зручні у використанні</p>
            <p className={style.advantages__text}>
              Прості у використанні сайти, проводимо навчання
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
