import { CartProduct } from "./components/CartProduct/CartProduct";
import { Product } from "../../../../types";

import s from "./WishList.module.css";

interface Props {
  products: Product[];
  userId: string;
}

export const WishList: React.FC<Props> = ({ products, userId }) => {
  console.log(products);
  if (products.length === 0) {
    return <div className={s.root_null}>Корзина пуста</div>;
  }
  return (
    <ul className={s.root}>
      {products.map((product) => (
        <li key={product.id}>
          <CartProduct product={product} userId={userId} />
        </li>
      ))}
    </ul>
  );
};
