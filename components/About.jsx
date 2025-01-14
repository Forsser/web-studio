import style from "@/src/style/about.module.scss";
import Svg from "@/public/icons/smile.svg";
import Specialization from "@/components/Specialization";

export default function About() {
  return (
    <section id="about" className={style.about}>
      <div className="container">
        <div className="title-container">
          <div className={`title-bdr-container ${style.bdr__container} `}>
            <h3 className={`gradient-title ${style.about__title} `}>
              4 причини вибрати нас
            </h3>
          </div>
        </div>

        <div className={style.light}></div>
        <ul className={style.about__list}>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg alt="Smile" width="50px" height="50px" /> */}
              <div className="text__container">
                <p className={style.item__title}>
                  Створюємо красивий дизайн, що продає
                </p>
                <p>Унікальний, продає, відрізняється від конкурентів дизайн</p>
              </div>
            </div>
          </li>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg alt="Smile" width="50px" height="50px" /> */}
              <div className="text__container">
                <p className={style.item__title}>
                  Сайт буде відразу готовий до СЕО просування та реклами
                </p>
                <p>Зрозумілі клієнтам сайти, одразу готові до реклами</p>
              </div>
            </div>
          </li>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg alt="Smile" width="50px" height="50px" /> */}
              <div className="text__container">
                <p className={style.item__title}>
                  Зручне та просте керування сайтом
                </p>
                <p>Проводимо навчання по сайту</p>
              </div>
            </div>
          </li>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg
                className={style.svg}
                alt="Smile"
                width="50px"
                height="50px"
              /> */}
              <div className="text__container">
                <p className={style.item__title}>Сучасні технології</p>
                <p>
                  Виконуємо розробку вашого сайту, на новітніх технологіях, що
                  надає перевагу у швидкості, продуктивності, СЕО над
                  конкурентами
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
