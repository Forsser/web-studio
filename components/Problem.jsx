import style from "@/src/style/problem.module.scss";
import Certificate from "@/public/icons/certificate.svg";
import Discount from "@/public/icons/discount.svg";
import Money from "@/public/icons/money.svg";
import Check from "@/public/icons/check.svg";
import Form from "@/components/Forms";

export default function Problem() {
  return (
    <section className={style.problem}>
      <div className="container">
        <div className={style.problem__content}>
          <div className={style.problem__text}>
            <div className="title-black-container">
              <h3 className={style.problem__mainTitle}>
                80% сайтів в інтернеті- гарні пустишки
              </h3>
            </div>
            <div className={style.problem__titleContainer}>
              <h4 className={style.problem__subTitle}>
                На жаль, більшість сайтів в інтернеті - красиві пустушки, що не
                продають. Клієнт не розуміє, чому він повинен залишати заявку на
                такому сайті та йде.
              </h4>
              <h4 className={style.problem__secondTitle}>
                Як ми вирішуємо цю проблему?
              </h4>
            </div>
          </div>

          <ul className={style.problem__items}>
            <li className={style.problem__item}>
              <div className={style.title__container}>
                <Check
                  width="6rem"
                  height="6rem"
                  className={style.problem__svg}
                />
                <p className={style.item__title}>Складаємо стратегію</p>
              </div>
              <p className={style.item__text}>
                Аналізуємо ринок та конкурентів, щоб створити найкращий сайт у
                ніші. Аналізуємо ЦА та їх запити. Використовуємо сильні та
                слабкі сторони конкурентів.
              </p>
            </li>
            {/*   <li className={style.problem__item}>
              <div className={style.title__container}>
                <Certificate
                  width="6rem"
                  height="6rem"
                  className={style.problem__svg}
                />
                <p className={style.item__title}>
                  Пишемо копірайтинг, що продає
                </p>
              </div>

              <p className={style.item__text}>
                Переписуємо всі тексти на сайті так, щоб вони легко читалися,
                несли у собі правильні смисли та підводили вашого клієнта до
                покупки.
              </p>
            </li> */}
            <li className={style.problem__item}>
              <div className={style.title__container}>
                <Discount
                  width="6rem"
                  height="6rem"
                  className={style.problem__svg}
                />
                <p className={style.item__title}>Створюємо продає дизайн</p>
              </div>

              <p className={style.item__text}>
                Грунтуючись на аналізі, вирішуємо болі ваших клієнтів,
                прописуємо правильні смисли і створюємо унікальну пропозицію.
                Правильні кольори, кнопки, розташування елементів сайту.
              </p>
            </li>
            <li className={style.problem__item}>
              <div className={style.title__container}>
                <Money
                  width="6rem"
                  height="6rem"
                  className={style.problem__svg}
                />
                <p className={style.item__title}>Прописуємо логіку та сенси</p>
              </div>
              <p className={style.item__text}>
                Важливо привести клієнта до цільової дії, для цього потрібно
                прописати всі сенси в правильному порядку і з правильним
                посиланням, щоб людина здійснила покупку на вашому сайті.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <h4 className={style.problem__footerTitle}>
        {" "}
        У результаті ви отримуєте глибоко пророблений інструмент для генерації
        клієнтів з високою конверсією
      </h4>
      <h4 className={style.problem__footerFormTitle}>
        {" "}
        Залишіть заявку, щоб дізнатися, як ми вирішимо цю проблему для вас
      </h4>

      <Form />
      {/*  <div className={style.video__container}>
        <video autoPlay loop muted playsInline className={style.problem__video}>
          <source src="/bg-pr.mp4" type="video/mp4" />
        </video>
      </div> */}
    </section>
  );
}
