import { Link } from "react-router-dom";
import { AddProductToCartButton } from "../../../../../../components/AddProductToCartButton/AddProductToCartButton";
import { Product, RoutePath } from "../../../../../../types";

import s from "./ProductCard.module.css";

interface Props {
  productData: Product;
  className?: string;
}

export const ProductCard = ({ productData }: Props) => {
  return (
    <Link
      to={`${RoutePath.ProductPage}/?productId=${productData.id}`}
      className={s.root}
    >
      <div
        className={s.image}
        style={{
          backgroundImage: `url("${productData.images[0].src}")`,
        }}
      ></div>
      <div className={s.game_info}>
        <span className={s.genre}>{productData.genre}</span>
        <h1 className={s.name}>{productData.name}</h1>
        <h1 className={s.price}>{productData.price} ₽</h1>
      </div>
      <AddProductToCartButton productId={productData.id} text={"Купить"} />
    </Link>
  );
};
