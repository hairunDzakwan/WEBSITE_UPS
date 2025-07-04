"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import poster1 from "@/app/public/Group 83.png";

const posters = [
  { id: 1, src: poster1, alt: "Poster 1" },
  { id: 2, src: poster1, alt: "Poster 2" },
];

export default function PosterSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      className="rounded-xl overflow-hidden"
    >
      {posters.map((poster) => (
        <SwiperSlide key={poster.id}>
          <img
            src={poster.src}
            alt={poster.alt}
            className="w-full h-64 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
