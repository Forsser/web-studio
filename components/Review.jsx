"use client";

import review from "@/src/img/review.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import styles from "@/src/style/review.module.scss";

const reviews = [review.src, review.src, review.src, review.src];

export default function Review() {
  useEffect(() => {
    // Затримка для прив'язки кнопок до Swiper
    const nextButton = document.querySelector(`.${styles.slider__button_next}`);
    const prevButton = document.querySelector(`.${styles.slider__button_prev}`);

    if (nextButton && prevButton) {
      nextButton.style.visibility = "visible";
      prevButton.style.visibility = "visible";
    }
  }, []);

  return (
    <section className={styles.slider}>
      <div className="container">
        <div className="title-container">
          <h3 className={styles.slider__title}>Відгуки про нас</h3>
        </div>

        <h4 className={styles.slider__subtitle}>
          Відгуки – найважливіше для нас. Наш головний пріоритет – якість
          роботи!
        </h4>

        {/* Кнопки поза Swiper */}
        <button
          className={styles.slider__button_prev}
          style={{ visibility: "hidden" }} // Приховати до ініціалізації
        >
          ‹
        </button>
        <button
          className={styles.slider__button_next}
          style={{ visibility: "hidden" }} // Приховати до ініціалізації
        >
          ›
        </button>

        {/* Слайдер */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3} // За замовчуванням для великих екранів
          centeredSlides={true} // Центруємо слайд
          loop={true} // Безкінечний слайдер
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: `.${styles.slider__button_next}`,
            prevEl: `.${styles.slider__button_prev}`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // Показуємо трохи більше ніж 1 слайд
              spaceBetween: 10, // Менший відступ
            },
            768: {
              slidesPerView: 2.5, // Показуємо трохи більше ніж 2 слайди
              spaceBetween: 15, // Середній відступ
            },
            1024: {
              slidesPerView: 3, // Показуємо 3 слайди
              spaceBetween: 30, // Стандартний відступ
            },
          }}
          className={styles.swiperContainer}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                src={review}
                alt={`Review ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "10px", // Наприклад, для округлення зображення
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
