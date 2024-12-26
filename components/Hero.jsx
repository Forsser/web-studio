import style from "../src/style/hero.module.scss";
import ParticleAnimation from "@/components/ParticleAnimation";
import Smile from "@/public/icons/smile.svg";
import { getHeroData } from "@/lib/api/hero";

export default async function Hero() {
  const { data } = await getHeroData();

  const heroContent = data[0].hero;
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.hero__title}>
          <h1 className={style.hero__text}>{heroContent.title}</h1>
          <h2 className={style.hero__subtext}>
            {heroContent.subtitle}
            <Smile alt="Smile" width={40} height={40} />
          </h2>
        </div>

        <ParticleAnimation />
      </div>
    </section>
  );
}
