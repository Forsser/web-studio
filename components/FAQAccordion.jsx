"use client";
import React, { useState } from "react";
import styles from "@/src/style/fqa-accordion.module.scss";
import Plus from "@/public/icons/plus.svg";

const faqData = [
  {
    question:
      "Чим ваші сайти відрізняються від тих, що роблять ваші конкуренти?",
    answer:
      "Ми фокусуємося на якості, індивідуальному підході та ефективності. Кожен проект розробляється з урахуванням специфіки бізнесу та цільової аудиторії.",
  },
  {
    question: "Чому мені просто не замовити дешевий сайт за 15000 грн?",
    answer:
      "Дешеві рішення часто не враховують важливі аспекти, такі як SEO, безпека та масштабованість. Якісний сайт - це інвестиція в розвиток вашого бізнесу.",
  },
  {
    question: "Як я можу знати, що ваші сайти дійсно добре працюють?",
    answer:
      "Ми надаємо портфоліо реалізованих проектів, відгуки клієнтів та детальну аналітику продуктивності наших сайтів.",
  },
  {
    question: "Що якщо я замовлю у вас сайт, а він буде залучати мало заявок?",
    answer:
      "Ми працюємо на результат і надаємо підтримку після запуску. За необхідності проводимо аналіз та оптимізацію для покращення конверсії.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.fqa}>
      <div className="container">
        <h1 className={styles.title}>Відповіді на часті питання</h1>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.questionContainer}
                onClick={() => toggleAccordion(index)}
              >
                <h2 className={styles.question}>{item.question}</h2>
                <button
                  className={styles.toggleButton}
                  aria-label={openIndex === index ? "Згорнути" : "Розгорнути"}
                >
                  <Plus
                    className={`${styles.faq__svg} ${
                      openIndex === index ? styles.faq__svg__active : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={styles.answerContainer}
                style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                }}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
