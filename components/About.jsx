"use client";
import style from "@/src/style/about.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About({ data }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    // Початкове приховування елементів
    gsap.set(titleRef.current, {
      opacity: 0,
      x: -100,
    });

    gsap.set(listItemsRef.current, {
      opacity: 0,
      x: -100,
    });

    // Анімація заголовка
    gsap.to(titleRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.7, // Тривалість анімації
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%", // Точка початку анімації
        toggleActions: "play none none reverse",
        // play - запустити анімацію коли досягнуто точку start
        // none - нічого не робити при досягненні end
        // none - нічого не робити при поверненні до end
        // reverse - реверсувати анімацію при поверненні до start
      },
    });

    // Анімація перших двох елементів списку
    listItemsRef.current.slice(0, 2).forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.2, // Затримка для послідовної появи
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Анімація останніх двох елементів списку
    listItemsRef.current.slice(2).forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className={style.about} ref={sectionRef}>
      <div className="container">
        <div className="title-container">
          <h3 className={style.about__title} ref={titleRef}>
            {" "}
            4 причини вибрати нас
          </h3>
        </div>

        <div className={style.light}></div>
        <ul className={style.about__list}>
          {data.map((item, index) => (
            <li
              key={index}
              className={style.about__item}
              ref={(el) => (listItemsRef.current[index] = el)}
            >
              <div className={style.item__container}>
                <div className={style.text__container}>
                  <p className={style.item__title}>
                    <span className={style.item__number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
