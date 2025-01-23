import style from "@/src/style/example.module.scss";
import Feedback from "@/components/Feedback";
import Raiduga from "@/src/img/raiduga.webp";
import RaidugaMobile from "@/src/img/raiduga-mobile.webp";
import babylon from "@/src/img/babylon.webp";
import babylonMobile from "@/src/img/babylon-mobile.webp";
import redAndDog from "@/src/img/red-and-dog.webp";
import redAndDogMobile from "@/src/img/red-and-dog-mobile.webp";
import hotches from "@/src/img/hotshoes.webp";
import hotchesMobile from "@/src/img/hotshoes-mobile.webp";
import mops from "@/src/img/mops.webp";
import mopsMobile from "@/src/img/mops-mobile.webp";
import bazhane from "@/src/img/bazhane.webp";
import bazhaneMobile from "@/src/img/bazhane-mobile.webp";
import Mockup from "@/components/MockUp";

export default function Example() {
  return (
    <section id="example" className={style.example}>
      <div className="container">
        <div className="title-container">
          <h3 className={style.example__title}>Приклади робіт</h3>
        </div>
        <ul className={style.example__container}>
          <Mockup
            pcImage={redAndDog.src}
            mobileImage={redAndDogMobile.src}
            url={"https://redndog.com/ua/"}
          />
          <Mockup
            pcImage={hotches.src}
            mobileImage={hotchesMobile.src}
            url={"https://hotshoes.com.ua/"}
          />
          <Mockup
            pcImage={mops.src}
            mobileImage={mopsMobile.src}
            url={"https://mops.ua/"}
          />
          <Mockup
            pcImage={bazhane.src}
            mobileImage={bazhaneMobile.src}
            url={"https://bazhane.com.ua/"}
          />
          <Mockup
            pcImage={Raiduga.src}
            mobileImage={RaidugaMobile.src}
            url={"http://raiduga.com.ua/"}
          />
          <Mockup
            pcImage={babylon.src}
            mobileImage={babylonMobile.src}
            url={"https://babylon.net.ua/"}
          />
        </ul>

        {/* pcImage={redAndDog.src} mobileImage={redAndDog.src}  */}
      </div>
      <Feedback />
    </section>
  );
}
