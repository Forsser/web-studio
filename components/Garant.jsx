import style from "@/src/style/garant.module.scss";

const Garant = () => {
  return (
    <section className={style.garant}>
      <div className="container">
        <div className="title-black-container">
          <h3 className={style.garant__title}>
            Гарантія коригування результатів
          </h3>
        </div>

        <p className={style.garant__text}>
          Ми хочемо відповідати за свою роботу. Якщо сайт погано працюватиме -
          ми гарантуємо коригування для покращення результату, переглянемо
          стратегію, доповнимо сенси, підправимо дизайн - зробимо все
          безкоштовно, щоб досягти хорошого результату для вас.
        </p>
      </div>
    </section>
  );
};

export default Garant;
