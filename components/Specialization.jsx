import style from "@/src/style/specialization.module.scss";

export default function Specialization() {
  return (
    <div className={style.specialization}>
      <div className={style.container}>
        <h3 className={style.specialization__title}>Ми спеціалізуємось</h3>

        <div className={style.specialization__container}></div>
      </div>
    </div>
  );
}
