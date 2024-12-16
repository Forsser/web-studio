"use client";
import styles from "@/src/style/review.module.scss";
import review from "@/src/img/review.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [review.src, review.src, review.src, review.src];

export default function Review() {
  return (
    <section className={styles.slider}>
      <div className="container">
        <h3 className={styles.slider__title}>Відгуки про нас</h3>

        <h4 className={styles.slider__subtitle}>
          Відгуки – найважливіше для нас. Наш головний пріоритет – якість
          роботи!
        </h4>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3} // Показує 3 слайди одночасно
          navigation // Кнопки "вперед" і "назад"
          loop={true} // Безкінечний слайдер
          centeredSlides={true} // Центрує активний слайд
          pagination={{ clickable: true }} // Додає пагінацію
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
