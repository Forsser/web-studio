import style from "../src/style/hero.module.scss";
import ParticleAnimation from "@/components/ParticleAnimation";
import Smile from "@/public/icons/smile.svg";
import { getHeroData } from "@/lib/api/hero";
import up from "@/public/img/up.png";

export default async function Hero() {
  /*   const { data } = await getHeroData(); */

  /*   const heroContent = data[0].hero; */
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.hero__title}>
          <h1 className={style.hero__text}>Ідеї, які реалізуються в коді</h1>
          <h2 className={style.hero__subtext}>
            <p> Технології, для росту твоєї компанії</p>
            <img src={up.src} alt="arrow" className={style.hero__img} />
          </h2>
        </div>

        <ParticleAnimation />
      </div>
    </section>
  );
}
