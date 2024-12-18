"use client";
import styles from "@/src/style/review.module.scss";
import review from "@/src/img/review.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <h3 className={styles.slider__title}>Відгуки про нас</h3>

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
          slidesPerView={3}
          navigation={{
            nextEl: `.${styles.slider__button_next}`,
            prevEl: `.${styles.slider__button_prev}`,
          }}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className={styles.swiperContainer}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img src={review} alt={`Review ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
