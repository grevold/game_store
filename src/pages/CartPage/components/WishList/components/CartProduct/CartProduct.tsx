import s from "./CartProduct.module.css";
import { Product } from "../../../../../../types";
import { RemoveProductFromCartButton } from "../../../../../../components/RemoveProductFromCartButton/RemoveProductFromCartButton";

interface Props {
  product: Product;
  userId: string;
}

export const CartProduct: React.FC<Props> = ({ product, userId }) => {
  return (
    <div className={s.root}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url("${product.images[0].src}")`,
        }}
      ></div>
      <div className={s.description}>
        <div className={s.game_info}>
          <div className={s.name}>
            <h1 className={s.name}>{product.name}</h1>
            <span className={s.genre}>{product.genre}</span>
          </div>
          <button className={s.remove_product_button}>
            <RemoveProductFromCartButton
              productId={product.id}
              userId={userId}
              className={s.button_delete}
            />
          </button>
        </div>
        <div className={s.game_info}>
          <span className={s.refund}>Подробнее</span>
          <h1 className={s.price}>{product.price} ₽</h1>
        </div>
      </div>
    </div>
  );
};
