import style from "@/src/style/about.module.scss";

import Specialization from "@/components/Specialization";

export default function About() {
  return (
    <section id="about" className={style.about}>
      <div className="container">
        <div className="title-container">
          {/* <div className={`title-bdr-container ${style.bdr__container} `}>
            <h3 className={`gradient-title ${style.about__title} `}>
              4 причини вибрати нас
            </h3>
          </div> */}
          <h3 className={style.about__title}> 4 причини вибрати нас</h3>
        </div>

        <div className={style.light}></div>
        <ul className={style.about__list}>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg alt="Smile" width="50px" height="50px" /> */}
              <div className="text__container">
                <p className={style.item__title}>Створюємо найсильніші сайти</p>
                <p>
                  Ваш сайт буде залучати найбільше заявкою за рахунок стратегії,
                  правильної структури, проданих тез і продуманих смислів
                </p>
              </div>
            </div>
          </li>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg alt="Smile" width="50px" height="50px" /> */}
              <div className="text__container">
                <p className={style.item__title}>Розробляємо стратегію</p>
                <p>
                  Аналізуємо ринок, прописуємо болі та їх рішення, створюємо
                  унікальну пропозицію для клієнта, що підштовхує її залишити
                  заявку
                </p>
              </div>
            </div>
          </li>
          <li className={style.about__item}>
            <div className={style.item__container}>
              {/* <Svg alt="Smile" width="50px" height="50px" /> */}
              <div className="text__container">
                <p className={style.item__title}>Поетапна оплата за 30%</p>
                <p>
                  Для вашої зручності починаємо працювати при оплаті 30%, далі
                  оплата розбивається на 40% та 30%
                </p>
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
                <p className={style.item__title}>Працюємо у термін </p>
                <p>
                  Ми не беремо більше проектів, ніж можемо встигнути, щоб вся
                  робота виконувалася у строк
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
