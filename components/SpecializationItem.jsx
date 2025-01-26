import style from "@/src/style/specialization.module.scss";
import Arrow from "@/public/icons/arrow.svg";

export default function SpecializationItem({ item, isOpen, onToggle }) {
  return (
    <li
      key={item.id}
      className={`${style.specialization__item} ${style[`item${item.id}`]}`}
    >
      <div className={style.item__container}>
        <div className={style.item__text}>
          <h4 className={style.item__title}>{item.title}</h4>
          <Arrow
            onClick={onToggle}
            className={`${style.item__button} ${isOpen ? style.open : ""}`}
          />
        </div>
        <div className={style.item__img}>
          <img
            className={style.specialization__img}
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className={`${style.additionalText} ${isOpen ? style.open : ""}`}>
          <p className={style.item__description}>{item.description}</p>
        </div>
      </div>
    </li>
  );
}
