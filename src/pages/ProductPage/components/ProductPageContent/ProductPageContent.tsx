import { AddProductToCartButton } from "../../../../components/AddProductToCartButton/AddProductToCartButton";
import { Product } from "../../../../types";
import { StarIcons } from "./components/StarIcons";

import s from "./ProductPageContent.module.css";

interface Props {
  productData: Product;
  className?: string;
}

export function ProductPageContent({ productData }: Props) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div
          className={s.image}
          style={{
            backgroundImage: `url("${productData.images[0].src}")`,
          }}
        ></div>
        <div className={s.game_info}>
          <h1 className={s.title}>{productData.name}</h1>
          <h2 className={s.genre}>Жанр:{productData.genre}</h2>
          {productData.rate && (
            <h2 className={s.rate}>
              Рейтинг:
              <StarIcons rate={productData.rate} />
            </h2>
          )}
          <div className={s.description}>{productData.description}</div>
          <div className={s.price_block}>
            <AddProductToCartButton
              productId={productData.id}
              text={"Добавить в корзину"}
            />
            <h2 className={s.price}>{productData.price} ₽</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
