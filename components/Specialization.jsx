"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "@/src/style/specialization.module.scss";
import SpecializationItem from "./SpecializationItem";

gsap.registerPlugin(ScrollTrigger);

export default function Specialization({ data }) {
  const [openBlock, setOpenBlock] = useState(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const items = containerRef.current.children;

    gsap.set(titleRef.current, {
      opacity: 0,
      x: -100,
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      x: 0,

      duration: 0.5, // Тривалість анімації
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%", // Точка початку анімації
        toggleActions: "play none none reverse",
        // play - запустити анімацію коли досягнуто точку start
        // none - нічого не робити при досягненні end
        // none - нічого не робити при поверненні до end
        // reverse - реверсувати анімацію при поверненні до start
      },
    });

    gsap.fromTo(
      items,
      { opacity: 0, y: (index) => 50 + index * 20 }, // Початкове зміщення вниз
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Хвильовий ефект
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%", // Анімація запускається при 50% видимості секції
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(sectionRef.current, {
      backgroundColor: "rgb(255, 255, 255)",
      scrollTrigger: {
        trigger: sectionRef.current,

        start: "top 30%",
        onEnter: () =>
          gsap.to(sectionRef.current, {
            backgroundColor: "rgb(255, 255, 255)",
            duration: 0.5,
          }),
        onLeaveBack: () =>
          gsap.to(sectionRef.current, {
            backgroundColor: "rgb(0, 0, 0)",
            duration: 0.5,
          }),
        toggleActions: "play none none reverse",
      },
    });
  }, [data]);

  const handleArrowClick = (id) => {
    setOpenBlock(openBlock === id ? null : id);
  };

  return (
    <section
      id="specialization"
      className={style.specialization}
      ref={sectionRef}
      style={{ backgroundColor: "rgb(0, 0, 0)" }}
    >
      <div className="container">
        <div className="title-container">
          <h3 ref={titleRef} className={style.specialization__title}>
            Що ми можемо?
          </h3>
        </div>

        <div className={style.specialization__container}>
          <ul className={style.specialization__list} ref={containerRef}>
            {data &&
              data.map((item) => (
                <SpecializationItem
                  key={item.id}
                  item={item}
                  isOpen={openBlock === item.id}
                  onToggle={() => handleArrowClick(item.id)}
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
