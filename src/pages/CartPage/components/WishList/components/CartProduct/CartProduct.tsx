import s from "./CartProduct.module.css";
import { Product } from "../../../../../../types";

interface Props {
  product: Product;
}

export const CartProduct: React.FC<Props> = ({ product }) => {
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
          <div className={s.price_block}>
            <h1 className={s.price}>{product.price} ₽</h1>
          </div>
        </div>
        <div className={s.game_info}>
          <span className={s.refund}>Самовозврат</span>
          <button className={s.button_delete}>Удалить</button>
        </div>
      </div>
    </div>
  );
};
