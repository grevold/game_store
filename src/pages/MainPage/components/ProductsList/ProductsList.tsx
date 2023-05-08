import { useProductsList } from "./useProductsList";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { Status } from "./useProductsList";
import { ProductsSlider } from "./components/ProductsSlider/ProductsSlider";

import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const { state } = useProductsList();

  if (state.status === Status.Success) {
    return (
      <div className={s.container}>
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
