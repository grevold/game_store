import { texts } from "../../../../texts";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { BannerSlide } from "./components/BannerSlide";

import s from "./Banner.module.css";

const swiperConfig: SwiperProps = {
  modules: [Autoplay, Pagination],
  onAutoplayTimeLeft: function () {},
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
};

export function Banner() {
  return (
    <div className={s.root}>
      <Swiper {...swiperConfig}>
        {texts.Banner.map((product) => (
          <SwiperSlide key={product.id}>
            <BannerSlide product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
