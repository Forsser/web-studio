import style from "@/src/style/specialization.module.scss";
import landing from "@/src/img/landing.jpg";
import portfolio from "@/src/img/portfolio.jpg";
import campaign from "@/src/img/campaign.jpg";
import shop from "@/src/img/shop.jpg";
import postman from "@/src/img/postman.jpg";

export default function Specialization() {
  return (
    <section id="specialization" className={style.specialization}>
      <div className="container">
        <div className="title-container">
          <div
            className={`title-bdr-container ${style.specialization__br__container} `}
          >
            <h3 className={`gradient-title ${style.specialization__title} `}>
              Ми спеціалізуємось
            </h3>{" "}
          </div>
        </div>

        <div className={style.specialization__container}>
          <ul className={style.specialization__list}>
            <li className={`${style.specialization__item} ${style.item1}`}>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  <h4>Сайт візитка</h4>
                  <button>ДЕТАЛЬНІШЕ</button>
                </div>
                <div className={style.item__img}>
                  <img className="" src={landing.src} />
                </div>
              </div>
            </li>
            <li className={`${style.specialization__item} ${style.item2}`}>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  <h4>Сайт портфоліо</h4>
                  <button>ДЕТАЛЬНІШЕ</button>
                </div>
                <div className={style.item__img}>
                  <img className="" src={portfolio.src} />
                </div>
              </div>
            </li>
            <li className={`${style.specialization__item} ${style.item3}`}>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  <h4>Корпоративний сайт</h4>
                  <button>ДЕТАЛЬНІШЕ</button>
                </div>
                <div className={style.item__img}>
                  <img className={style.campaign__img} src={campaign.src} />
                </div>
              </div>
            </li>
            <li className={`${style.specialization__item} ${style.item4}`}>
              <div className={style.item__container}>
                <div className={style.item__text}>
                  <h4>Інтернет магазин</h4>
                  <button>ДЕТАЛЬНІШЕ</button>
                </div>
                <div className={style.item__img}>
                  <img className="" src={shop.src} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
