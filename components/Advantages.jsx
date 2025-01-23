import style from "@/src/style/advantages.module.scss";
import Ok from "@/public/icons/ok.svg";

const Advantages = () => {
  return (
    <div className={style.advantages}>
      <ul className={style.advantages__items}>
        <li className={style.advantages__item}>
          <div className={style.advantages__title__container}>
            <div className={style.advantages__icon__container}>
              <Ok className={style.advantages__icon} />
            </div>
            <div className={style.advantages__text__container}>
              <p className={style.advantages__title}>
                {" "}
                Ваш сайт залучатиме на 114% більше заявок{" "}
              </p>
              <p className={style.advantages__text}>
                Ми створюємо глибоко продумані, унікальні та сильні сайти
              </p>
            </div>
          </div>
        </li>
        <li className={style.advantages__item}>
          <div className={style.advantages__title__container}>
            <div className={style.advantages__icon__container}>
              <Ok className={style.advantages__icon} />
            </div>
            <div className={style.advantages__text__container}>
              <p className={style.advantages__title}>
                {" "}
                Ваш сайт залучатиме на 114% більше заявок{" "}
              </p>
              <p className={style.advantages__text}>
                Ми створюємо глибоко продумані, унікальні та сильні сайти
              </p>
            </div>
          </div>
        </li>
        <li className={style.advantages__item}>
          <div className={style.advantages__title__container}>
            <div className={style.advantages__icon__container}>
              <Ok className={style.advantages__icon} />
            </div>
            <div className={style.advantages__text__container}>
              <p className={style.advantages__title}>
                {" "}
                Ваш сайт залучатиме на 114% більше заявок{" "}
              </p>
              <p className={style.advantages__text}>
                Ми створюємо глибоко продумані, унікальні та сильні сайти
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
