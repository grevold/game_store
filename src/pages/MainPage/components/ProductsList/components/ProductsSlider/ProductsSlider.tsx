import { Product } from "../../../../../../types";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard/ProductCard";
import s from "./ProductSlider.module.css";

interface Props {
  products: Product[];
}

const swiperConfig: SwiperProps = {
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    999: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
};

export const ProductsSlider: React.FC<Props> = ({ products }) => {
  return (
    <Swiper {...swiperConfig} className={s.swiper}>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard productData={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
