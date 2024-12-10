import style from "./hero.module.scss";
import ParticleAnimation from "@/components/ParticleAnimation";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero__title}>
          <p className={style.hero__text}>
            Ідеї, які реалізуються в коді{" "}
            <span className={style.hero__teg}>{"</>"}</span>
          </p>
          <p className={style.hero__subtext}>
            Креативний підхід до кожного проекту — ми зробимо твою ідею
            реальністю
          </p>
        </div>

        <ParticleAnimation />
      </div>
    </section>
  );
}
