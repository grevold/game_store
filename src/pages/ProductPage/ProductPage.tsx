import { useSearchParams } from "react-router-dom";
import { Status, useProductPage } from "./useProductPage";
import { PreloaderScreen } from "../../components/PreloaderScreen/PreloaderScreen";

import imageNotFound from "./../../images/Not_found.png";

import s from "./ProductPage.module.css";
import { ProductPageContent } from "./components/ProductPageContent/ProductPageContent";

export function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { state } = useProductPage(productId);

  if (state.status === Status.Success) {
    return (
      <div className={s.root}>
        <ProductPageContent productData={state.product} />
      </div>
    );
  }
  if (state.status === Status.NotFound) {
    return (
      <div className={s.root_error}>
        <img src={imageNotFound} className={s.not_found_img} />
        <span className={s.not_found_message}>Товар не найден</span>
      </div>
    );
  }
  if (state.status === Status.Error) {
    return (
      <div className={s.root_error}>
        <img src={imageNotFound} className={s.not_found_img} />
        <span className={s.not_found_message}>Товар не найден</span>
      </div>
    );
  }
  return <PreloaderScreen />;
}
