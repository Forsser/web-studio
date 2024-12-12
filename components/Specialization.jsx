import style from "@/src/style/specialization.module.scss";
import landing from "@/src/landing.jpg";
import portfolio from "@/src/portfolio.jpg";
import campaign from "@/src/campaign.jpg";
import shop from "@/src/shop.jpg";

export default function Specialization() {
  return (
    <div className={style.specialization}>
      <div className="container">
        <h3 className={style.specialization__title}>Ми спеціалізуємось</h3>

        <div className={style.specialization__container}>
          <ul className={style.specialization__list}>
            <li className={`${style.specialization__item} ${style.item1}`}>
              <h4>Сайт візитка</h4>
              <div className={style.item__container}>
                <p className={style.item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque natus commodi recusandae rem aperiam corporis incidunt,
                  obcaecati rerum, nobis quibusdam minima, voluptatibus
                  accusamus aspernatur iste fuga velit facilis enim aut?
                </p>
                <div className={style.item__img}>
                  <img className="" src={landing.src} />
                </div>
              </div>
            </li>
            <li className={`${style.specialization__item} ${style.item2}`}>
              <h4>Сайт портфоліо</h4>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque natus commodi recusandae rem aperiam corporis incidunt,
                  obcaecati rerum, nobis quibusdam minima, voluptatibus
                  accusamus aspernatur iste fuga velit facilis enim aut?
                </div>
                <div className={style.item__img}>
                  <img className="" src={portfolio.src} />
                </div>
              </div>
            </li>
            <li className={`${style.specialization__item} ${style.item3}`}>
              <h4>Корпоративний сайт</h4>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque natus commodi recusandae rem aperiam corporis incidunt,
                  obcaecati rerum, nobis quibusdam minima, voluptatibus
                  accusamus aspernatur iste fuga velit facilis enim aut?
                </div>
                <div className={style.item__img}>
                  <img className="" src={campaign.src} />
                </div>
              </div>
            </li>
            <li className={`${style.specialization__item} ${style.item4}`}>
              <h4>Інтернет магазин</h4>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque natus commodi recusandae rem aperiam corporis incidunt,
                  obcaecati rerum, nobis quibusdam minima, voluptatibus
                  accusamus aspernatur iste fuga velit facilis enim aut?
                </div>
                <div className={style.item__img}>
                  <img className="" src={shop.src} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
