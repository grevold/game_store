import { ProductsSlider } from "./components/ProductsSlider/ProductsSlider";
import { observer } from "mobx-react-lite";
import { store } from "../../../../store";

import s from "./ProductsList.module.css";

export const ProductsList = observer(() => {
  const products = store.getProductsState().products;

  return (
    <div className={s.container}>
      <ProductsSlider products={products} />
    </div>
  );
});
