import style from "@/src/style/example.module.scss";
import Raiduga from "@/public/icons/raiduga.svg";
import babylon from "@/src/img/babylon-screen.png.jpg";
import redAndDog from "@/src/img/red-and-dog.jpg";
import bazhane from "@/src/img/bazhane.webp";
import Hotshoes from "@/public/icons/hotshoes.svg";
import Mops from "@/public/icons/mops.svg";
import Arrow from "@/public/icons/arrow.svg";

export default function Example() {
  return (
    <section id="example" className={style.example}>
      <div className="container">
        <div className="title-container">
          <h3 className={style.example__title}>Приклади робіт</h3>
        </div>
        <ul className={style.example__container}>
          <li className={style.example__card}>
            <div className={style.card__img__wrapper}>
              <Raiduga />
            </div>

            <div className={style.card__info}>
              <div className={style.card__link}>
                <a href="https://raiduga.com.ua/" target="blank">
                  <Arrow fill="currentColor" className={style.svgIcon}></Arrow>
                </a>
              </div>
            </div>
          </li>
          <li className={style.example__card}>
            <div className={style.card__img__wrapper}>
              <img
                className={style.card__img}
                src={babylon.src}
                alt="інтернет магазин"
              />
            </div>

            <div className={style.card__info}>
              <div className={style.card__link}>
                <a href="https://babylon.net.ua/" target="blank">
                  <Arrow fill="currentColor" className={style.svgIcon}></Arrow>
                </a>
              </div>
            </div>
          </li>

          <li className={style.example__card}>
            <div className={style.card__img__wrapper}>
              <img
                className={style.card__img}
                src={redAndDog.src}
                alt="інтернет магазин"
              />
            </div>

            <div className={style.card__info}>
              <div className={style.card__link}>
                <a href="https://redndog.com/ua/" target="blank">
                  <Arrow fill="currentColor" className={style.svgIcon}></Arrow>
                </a>
              </div>
            </div>
          </li>

          <li className={style.example__card}>
            <div className={style.card__img__wrapper}>
              <img
                className={style.card__img}
                src={bazhane.src}
                alt="інтернет магазин"
              />
            </div>

            <div className={style.card__info}>
              <div className={style.card__link}>
                <a href="https://bazhane.com.ua/" target="blank">
                  <Arrow fill="currentColor" className={style.svgIcon}></Arrow>
                </a>
              </div>
            </div>
          </li>

          <li className={style.example__card}>
            <div className={style.card__img__wrapper}>
              <Hotshoes />
            </div>

            <div className={style.card__info}>
              <div className={style.card__link}>
                <a href="https://hotshoes.com.ua/" target="blank">
                  <Arrow fill="currentColor" className={style.svgIcon}></Arrow>
                </a>
              </div>
            </div>
          </li>

          <li className={style.example__card}>
            <div className={style.card__img__wrapper}>
              <Mops fill="blue" />
            </div>

            <div className={style.card__info}>
              <div className={style.card__link}>
                <a href="https://mops.ua/" target="blank">
                  <Arrow fill="currentColor" className={style.svgIcon}></Arrow>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
