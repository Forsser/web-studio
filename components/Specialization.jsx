"use client";
import { useState } from "react";
import style from "@/src/style/specialization.module.scss";
import SpecializationItem from "./SpecializationItem";

export default function Specialization({ data }) {
  const [openBlock, setOpenBlock] = useState(null);

  const handleArrowClick = (id) => {
    setOpenBlock(openBlock === id ? null : id); // Відкриття/закриття блоку
  };

  return (
    <section id="specialization" className={style.specialization}>
      <div className="container">
        <div className="title-container">
          <h3 className={style.specialization__title}>Що ми можемо?</h3>
        </div>

        <div className={style.specialization__container}>
          <ul className={style.specialization__list}>
            {data &&
              data.map((item) => (
                <SpecializationItem
                  key={item.id}
                  item={item}
                  isOpen={openBlock === item.id} // Перевірка, чи блок відкритий
                  onToggle={() => handleArrowClick(item.id)} // Функція відкриття/закриття
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
