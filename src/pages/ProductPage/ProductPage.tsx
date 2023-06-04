import { useSearchParams } from "react-router-dom";
import { ProductPageContent } from "./components/ProductPageContent/ProductPageContent";
import { store } from "../../store";
import { observer } from "mobx-react-lite";
import imageNotFound from "./../../images/Not_found.png";

import s from "./ProductPage.module.css";

export const ProductPage = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const productData = store
    .getProductsState()
    .products.find(({ id }) => id === productId);

  if (productData) {
    return (
      <div className={s.root}>
        <ProductPageContent productData={productData} />
      </div>
    );
  }

  return (
    <div className={s.root_error}>
      <img src={imageNotFound} className={s.not_found_img} />
      <span className={s.not_found_message}>Товар не найден</span>
    </div>
  );
});
