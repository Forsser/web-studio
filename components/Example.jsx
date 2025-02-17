"use client";

import { useState, useEffect } from "react";
import style from "@/src/style/example.module.scss";
import Feedback from "@/components/Feedback";
import Raiduga from "@/src/img/raiduga.webp";
import RaidugaMobile from "@/src/img/raiduga-mobile.webp";
import babylon from "@/src/img/babylon.webp";
import babylonMobile from "@/src/img/babylon-mobile.webp";
import redAndDog from "@/src/img/red-and-dog.webp";
import redAndDogMobile from "@/src/img/red-and-dog-mobile.webp";
import hotches from "@/src/img/hotshoes.webp";
import hotchesMobile from "@/src/img/hotshoes-mobile.webp";
import mops from "@/src/img/mops.webp";
import mopsMobile from "@/src/img/mops-mobile.webp";
import bazhane from "@/src/img/bazhane.webp";
import bazhaneMobile from "@/src/img/bazhane-mobile.webp";
import Mockup from "@/components/MockUp";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Example() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mockups = [
    {
      pcImage: redAndDog.src,
      mobileImage: redAndDogMobile.src,
      url: "https://redndog.com/ua/",
    },
    {
      pcImage: hotches.src,
      mobileImage: hotchesMobile.src,
      url: "https://hotshoes.com.ua/",
    },
    {
      pcImage: mops.src,
      mobileImage: mopsMobile.src,
      url: "https://mops.ua/",
    },
    {
      pcImage: bazhane.src,
      mobileImage: bazhaneMobile.src,
      url: "https://bazhane.com.ua/",
    },
    {
      pcImage: Raiduga.src,
      mobileImage: RaidugaMobile.src,
      url: "http://raiduga.com.ua/",
    },
    {
      pcImage: babylon.src,
      mobileImage: babylonMobile.src,
      url: "https://babylon.net.ua/",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section id="example" className={style.example}>
      <div className="container">
        <div className="title-container">
          <h3 className={style.example__title}>Приклади робіт</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={2}
          speed={600} // Швидкість анімації в мілісекундах
          effect="slide" // Тип ефекту переходу
          autoplay={{
            delay: 3000, // Затримка між автоматичними переходами
            disableOnInteraction: false,
          }}
          // Налаштування плавності
          touchRatio={1.5}
          touchAngle={45}
          grabCursor={true}
          className={style.example__container}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {mockups.map((mockup, index) => (
            <SwiperSlide key={index}>
              <Mockup
                pcImage={mockup.pcImage}
                mobileImage={mockup.mobileImage}
                url={mockup.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Feedback />
    </section>
  );
}
