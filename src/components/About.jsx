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
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/iht5iucpauq4binptfn1",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/ljiyhenxkorfy9e6qgdl",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/uqwxcsj3f0mqw4ywfd0u",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama2_eqqvyn",
];

const About = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center py-5">
      <div className="text-primary text-center px-7">
        <p className="text-sm xl:text-lg">
          {`Le Salama was born from a dream: to create a place where Moroccan tradition meets contemporary culture, where every dish tells a story, and where every meal becomes an unforgettable moment of sharing.`}
          <br />
          {"***"}
          <br />
          {`Nestled in the heart of the mythical Djema el Fna square, Le Salama is a true refuge after an immersion in the colorful and effervescent souks.`}
        </p>
      </div>
      <div className="w-full px-7 py-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1400}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="swiper max-w-3xl mx-auto mb-5"
          id="slider1"
        >
          <div className="swiper-wrapper">
            {items.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={`${item}`}
                    className="w-full max-h-full object-cover"
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
      <div className="text-primary text-center px-7">
        <p className="text-sm xl:text-lg">
          {`Our dishes are crafted with a deep respect for Moroccan tradition, enhanced by global culinary creativity.
            Signature Cocktails to Delight Your Senses. As the sun sets, Le Salama transforms into a lively evening spot.`}
          <br />
          {"***"}
          <br />
          {`Enjoy our curated cocktails and a more festive atmosphere. Whether you’re unwinding after a long day or celebrating with friends, our evening ambiance offers the perfect setting.`}
        </p>
      </div>
    </div>
  );
};

export default About;
