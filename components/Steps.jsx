import style from "@/src/style/stages.module.scss";

const steps = [
  {
    id: 1,
    title: "Залишаєте заявку",
    text: "Ви залишаєте заявку, і ми обговорюємо проєкт, його цілі, структуру та зовнішній вигляд.",
  },
  {
    id: 2,
    title: "Договір",
    text: "Укладаємо договір із прописаним технічним завданням. Вноситься передоплата у розмірі 30% від вартості.",
  },
  {
    id: 3,
    title: "Розробка",
    text: "Розробляємо сайт, наповнюємо контентом, тестуємо, оптимізуємо для SEO та реклами.",
  },
  {
    id: 4,
    title: "Завершення",
    text: "Повний розрахунок. Передача доступу до особистого кабінету, навчання роботи з сайтом.",
  },
];

const Steps = () => {
  return (
    <div className={style.steps}>
      <div className="container">
        <div className="title-container">
          <h3 className={style.steps__title}>Працюємо у 4 етапи</h3>{" "}
        </div>
        <div className={style.stepsContainer}>
          <div className={style.line}>
            <div className={style.pulse}></div>
          </div>
          {steps.map((step, index) => (
            <>
              <div
                key={step.id}
                className={style.step}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className={style.content}>
                  <p className={style.content__title}>{step.title}</p>
                  <p className={style.content__text}>{step.text}</p>
                  <span className={style.number}>{step.id}</span>
                </div>
                {/* Лінія між етапами */}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
