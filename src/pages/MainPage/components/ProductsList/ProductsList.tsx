import { useProductsList } from "./useProductsList";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { Status } from "./useProductsList";
import { ProductCard } from "./components/ProductCard/ProductCard";

import s from "./ProductsList.module.css";

export const ProductsList = () => {
  const { state } = useProductsList();

  if (state.status === Status.Success) {
    return (
      <div className={s.container}>
        <div className={s.buttons}>
          <button className={s.button}>←</button>
          <button className={s.button}>→</button>
        </div>
        <ul className={s.row_products}>
          {state.data.map((product) => (
            <li key={product.id} className={s.product}>
              <ProductCard productData={product} />
            </li>
          ))}
        </ul>
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
