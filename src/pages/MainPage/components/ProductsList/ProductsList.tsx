import { useProductsList } from "./useProductsList";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { Status } from "./useProductsList";
import { ProductsSlider } from "./components/ProductsSlider/ProductsSlider";
import "swiper/css";

import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const { state } = useProductsList();

  if (state.status === Status.Success) {
    return (
      <div className={s.container}>
        <div className={s.buttons_box}>
          <button className={s.button_next}>←</button>
          <button className={s.button_next}>→</button>
        </div>
        <ProductsSlider products={state.products} />
      </div>
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
