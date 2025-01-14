import style from "@/src/style/example.module.scss";
import Raiduga from "@/src/img/raiduga.png";
import RaidugaMobile from "@/src/img/raiduga-mobile.png";
import babylon from "@/src/img/babylon.png";
import babylonMobile from "@/src/img/babylon-mobile.png";
import redAndDog from "@/src/img/red-and-dog.png";
import redAndDogMobile from "@/src/img/red-and-dog-mobile.png";
import hotches from "@/src/img/hotshoes.png";
import hotchesMobile from "@/src/img/hotshoes-mobile.png";
import mops from "@/src/img/mops.png";
import mopsMobile from "@/src/img/mops-mobile.png";
import bazhane from "@/src/img/bazhane.png";
import bazhaneMobile from "@/src/img/bazhane-mobile.png";
import Arrow from "@/public/icons/arrow-circle.svg";
import MockUp from "@/components/MockUp";

export default function Example() {
  return (
    <section id="example" className={style.example}>
      <div className="container">
        <div className="title-container">
          <div
            className={`title-bdr-container ${style.example__bdr__container} `}
          >
            <h3 className={`gradient-title ${style.example__title} `}>
              Приклади робіт
            </h3>
          </div>
        </div>
        <ul className={style.example__container}>
          {/*<li className={style.example__card}>
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
          </li>*/}
          <MockUp
            pcImage={redAndDog.src}
            mobileImage={redAndDogMobile.src}
            border={"leftTop"}
          />
          <MockUp
            pcImage={hotches.src}
            mobileImage={hotchesMobile.src}
            border={"RightTop"}
          />
          <MockUp
            pcImage={redAndDog.src}
            mobileImage={redAndDogMobile.src}
            border={"leftBottom"}
          />
          <MockUp
            pcImage={redAndDog.src}
            mobileImage={redAndDogMobile.src}
            border={"RightBottom"}
          />
        </ul>

        {/* pcImage={redAndDog.src} mobileImage={redAndDog.src}  */}
      </div>
    </section>
  );
}
