import style from "../src/style/hero.module.scss";
import ParticleAnimation from "@/components/ParticleAnimation";
import FramerComponent from "@/components/FrameComponent";
import HeroForm from "@/components/HeroForm";
import Advantages from "@/components/Advantages";
import AnimatedHero from "@/components/AnimatedHero";
import up from "@/public/img/up.png";
import { getHeroData } from "@/lib/api/hero";

export default async function Hero() {
  /*   const { data } = await getHeroData(); */

  /*   const heroContent = data[0].hero; */

  return (
    <section className={style.hero}>
      <div className={style.hero__title}>
        <h1 className={style.hero__text}>
          Створюємо сайти, які залучають на 114% більше заявок.
        </h1>
      </div>
      <div className={style.video__container}>
        <video autoPlay loop muted playsInline className={style.hero__video}>
          <source src="/vid.mp4" type="video/mp4" />
        </video>
      </div>
      {/*  <div className={style.hero__footer}>
            <HeroForm />
           <Advantages />
        </div> */}
      <HeroForm />
    </section>
  );
}
