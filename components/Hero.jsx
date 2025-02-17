"use client";

import style from "../src/style/hero.module.scss";
import HeroForm from "@/components/HeroForm";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100, // Початкова позиція знизу
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Тривалість анімації в секундах
        ease: "power2.out", // Тип анімації (плавний вихід)
      }
    );

    // Scroll animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current, // Елемент, який тригерить анімацію
          start: "top top", // Коли починається анімація
          end: "center top", // Коли закінчується анімація
          scrub: 0.5, // Плавність анімації (1 = 1 секунда затримки)
          toggleActions: "play reverse play reverse", // Визначає поведінку при скролі вперед/назад
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section ref={sectionRef} className={style.hero}>
      <div className={style.hero__title}>
        <h1 ref={titleRef} className={style.hero__text}>
          Створюємо сайти, які залучають на 114% більше заявок.
        </h1>
      </div>
      <div className={style.video__container}>
        <video autoPlay loop muted playsInline className={style.hero__video}>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      <HeroForm />
    </section>
  );
}
