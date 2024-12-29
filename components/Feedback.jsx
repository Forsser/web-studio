import Form from "@/components/Forms";
import style from "@/src/style/feedback.module.scss";

export default function Feedback() {
  return (
    <section className={style.feedback}>
      <div className="container">
        <h3 className={style.feedback__title}>
          <p> Сподобався якийсь сайт? </p>Залишіть заявку та ми проконсультуємо
          вас
        </h3>
        <Form />
      </div>
    </section>
  );
}
