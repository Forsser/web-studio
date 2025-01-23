import style from "../src/style/hero.module.scss";
import ParticleAnimation from "@/components/ParticleAnimation";
import FramerComponent from "@/components/FrameComponent";
import HeroForm from "@/components/HeroForm";
import Advantages from "@/components/Advantages";

import { getHeroData } from "@/lib/api/hero";
import up from "@/public/img/up.png";

export default async function Hero() {
  /*   const { data } = await getHeroData(); */

  /*   const heroContent = data[0].hero; */
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.hero__title}>
          <h1 className={style.hero__text}>
            Створюємо сайти, які залучають на 114% більше заявок, за рахунок
            опрацьованої стратегії та правильної упаковки
          </h1>
          <h2 className={style.hero__subtext}>
            <p> Зробимо найсильніший сайт у вашій ніші</p>
            <img src={up.src} alt="arrow" className={style.hero__img} />
          </h2>
        </div>
        <div className={style.hero__footer}>
          <HeroForm />
          <Advantages />
        </div>

        {/* <FramerComponent /> */}
        <ParticleAnimation />
      </div>
    </section>
  );
}
