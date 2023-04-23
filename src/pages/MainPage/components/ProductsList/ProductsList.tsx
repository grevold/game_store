import { useProductsList } from "./useProductsList";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { Status } from "./useProductsList";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const { state } = useProductsList();

  if (state.status === Status.Success) {
    return (
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          999: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {state.data.map((product) => (
          <SwiperSlide>
            <ProductCard productData={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  if (state.status === Status.Error) {
    return (
      <div className={s.container}>
        <span>Не удалось загрузить товары</span>
      </div>
    );
  }

  return <Preloader />;
};
