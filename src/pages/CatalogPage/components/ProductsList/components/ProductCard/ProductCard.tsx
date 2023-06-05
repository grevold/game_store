import { Link } from "react-router-dom";
import { Product, RoutePath } from "../../../../../../types";
import s from "./ProductCard.module.css";
import { AddProductToCartButton } from "../../../../../../components/AddProductToCartButton/AddProductToCartButton";

interface Props {
  productData: Product;
  className?: string;
}

export function ProductCard({ productData }: Props) {
  return (
    <div className={s.root}>
      <Link
        to={`${RoutePath.ProductPage}/?productId=${productData.id}`}
        className={s.link}
      >
        <div className={s.container_info}>
          <h2 className={s.price}>{productData.price} ₽</h2>
        </div>
        <div
          className={s.image}
          style={{
            backgroundImage: `url("${productData.images[0].src}")`,
          }}
        ></div>
      </Link>
      <AddProductToCartButton
        productId={productData.id}
        className={s.button}
        classNameSuccess={s.buttonSuccess}
      />
    </div>
  );
}
