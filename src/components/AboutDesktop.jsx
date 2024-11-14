"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const items = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-25_wtt0k2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-16_gnmc6h",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/icfrcmy3sxst4bobsp5r",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/vqnebomqlz2s34thqys2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-4_wgjmar",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/platmobile_muezyg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/s9ddjvzdlmsosy5zywop",
];

const AboutDesktop = () => {
  return (
    <div className="w-full h-screen hidden lg:block">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        speed={1400}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-ex1",
          prevEl: ".swiper-button-prev-ex1",
        }}
        className="swiper w-full h-full"
        id="slider1"
      >
        <div className="swiper-wrapper">
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  src={`${item}`}
                  className="w-full h-full object-cover"
                  alt="itemImage"
                />
              </SwiperSlide>
            );
          })}
        </div>
        <button className="swiper-button-prev-ex1 grid place-content-center left-2 p-1 transition text-primary_2 hover:text-white absolute z-[999] top-1/2 -translate-y-1/2">
          <FiArrowLeftCircle size={25} />
        </button>
        <button className="swiper-button-next-ex1 grid place-content-center right-2 p-1 transition text-primary_2 hover:text-white absolute z-[999] top-1/2 -translate-y-1/2">
          <FiArrowRightCircle size={25} />
        </button>
      </Swiper>
    </div>
  );
};

export default AboutDesktop;
