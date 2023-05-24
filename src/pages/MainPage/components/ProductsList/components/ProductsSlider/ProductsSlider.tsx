import { Product } from "../../../../../../types";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard/ProductCard";
import { Navigation } from "swiper";
import { useProductSlider } from "./useProductSlider";

interface Props {
  products: Product[];
}

const swiperConfig: SwiperProps = {
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    999: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: true,
  modules: [Navigation],
};

export const ProductsSlider: React.FC<Props> = ({ products }) => {
  useProductSlider();

  return (
    <Swiper {...swiperConfig}>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard productData={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
