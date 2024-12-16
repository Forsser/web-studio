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
        <div className={style.problem__titleContainer}>
          <h3 className={style.problem__mainTitle}>
            <span className={style.mainTitle__accent}>
              80% сайтів в інтернеті
            </span>{" "}
            - гарні пустушки
          </h3>
          <h4 className={style.problem__subTitle}>
            На жаль, більшість сайтів в інтернеті - красиві пустушки, що не
            продають. Клієнт не розуміє, чому він повинен залишати заявку на
            такому сайті та йде.
          </h4>
          <h4 className={style.problem__secondTitle}>
            Як ми вирішуємо цю проблему?
          </h4>
        </div>

        <ul className={style.problem__items}>
          <li className={style.problem__item}>
            <Check width="6rem" height="6rem" className={style.problem__svg} />
            <p className={style.item__title}>Складаємо стратегію</p>
            <p className={style.item__text}>
              Аналізуємо ринок та конкурентів, щоб створити найкращий сайт у
              ніші. Аналізуємо ЦА та їх запити. Використовуємо сильні та слабкі
              сторони конкурентів. Виявляємо та показуємо ваші сильні сторони.
            </p>
          </li>
          <li className={style.problem__item}>
            <Certificate
              width="6rem"
              height="6rem"
              className={style.problem__svg}
            />
            <p className={style.item__title}>Складаємо стратегію</p>
            <p className={style.item__text}>
              Аналізуємо ринок та конкурентів, щоб створити найкращий сайт у
              Аналізуємо ринок та конкурентів, щоб створити найкращий сайт у
              ніші.
            </p>
          </li>
          <li className={style.problem__item}>
            <Discount
              width="6rem"
              height="6rem"
              className={style.problem__svg}
            />
            <p className={style.item__title}>Складаємо стратегію</p>
            <p className={style.item__text}>
              Аналізуємо ринок та конкурентів, щоб створити найкращий сайт у
              ніші. Аналізуємо ЦА та їх запити. Використовуємо сильні та слабкі
              сторони конкурентів. Виявляємо та показуємо ваші сильні сторони.
            </p>
          </li>
          <li className={style.problem__item}>
            <Money width="6rem" height="6rem" className={style.problem__svg} />
            <p className={style.item__title}>Складаємо стратегію</p>
            <p className={style.item__text}>
              Аналізуємо ринок та конкурентів, щоб створити найкращий сайт у
              ніші. Аналізуємо ЦА та їх запити. Використовуємо сильні та слабкі
              сторони конкурентів. Виявляємо та показуємо ваші сильні сторони.
            </p>
          </li>
        </ul>
      </div>
      <h4 className={style.problem__footerTitle}>
        {" "}
        Залишіть заявку, щоб дізнатися, як ми вирішимо цю проблему для вас
      </h4>

      <Form />
    </section>
  );
}
