import style from "../src/style/hero.module.scss";
import ParticleAnimation from "@/components/ParticleAnimation";
import Smile from "@/public/icons/smile.svg";
import { toast } from "sonner";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.hero__title}>
          <h1 className={style.hero__text}>
            Ідеї, які <br /> реалізуються в коді{" "}
          </h1>
          <h2 className={style.hero__subtext}>
            Технології для росту твоєї компанії
            <Smile alt="Smile" width={40} height={40} />
          </h2>
        </div>

        <ParticleAnimation />
      </div>
    </section>
  );
}
