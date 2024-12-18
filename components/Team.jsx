import style from "@/src/style/team.module.scss";
import Phtn from "@/src/img/phtn.jpg";

export default function Team() {
  return (
    <section className={style.team}>
      <div className="container">
        <h3 className={style.team__title}>Хто працює над вашим веб-сайтом?</h3>
        <div className={style.team__subtext}>
          <p>
            Нашій команді дуже важливо, щоб кожен клієнт отримав якісний ремонт
            квартири під ключ
          </p>
          <p>
            Бізнес-аналітик, проджект, дизайнер, верстальник, розробник,
            тестувальник
          </p>
        </div>
        <div className={style.items}>
          <div className={style.item}>
            <img src={Phtn.src} alt="" />
            <p className={style.item__name}>Сергій Пихтін</p>
            <p className={style.item__position}>Head 0f CS-2</p>
          </div>
          <div className={style.item}>
            <img src={Phtn.src} alt="" />
            <p className={style.item__name}>Сергій Пихтін</p>
            <p className={style.item__position}>Head 0f DOTA-2</p>
          </div>
          <div className={style.item}>
            <img src={Phtn.src} alt="" />
            <p className={style.item__name}>Сергій Пихтін</p>
            <p className={style.item__position}>Head 0f Onlyfans</p>
          </div>
        </div>
      </div>
    </section>
  );
}
