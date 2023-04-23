import { useProductsList } from "./useProductsList";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { Status } from "./useProductsList";
import { ProductsSlider } from "./components/ProductsSlider/ProductsSlider";
import "swiper/css";

import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const { state } = useProductsList();

  if (state.status === Status.Success) {
    return <ProductsSlider products={state.products} />;
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
