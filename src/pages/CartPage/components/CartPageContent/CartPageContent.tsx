import { WishList } from "../WishList/WishList";
import { OrderBlock } from "../OrderBlock/OrderBlock";
import { Product } from "../../../../types";

import s from "./CartPageContent.module.css";

interface Props {
  products: Product[];
  userId: string;
}

export const CartPageContent: React.FC<Props> = ({ products, userId }) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <WishList products={products} userId={userId} />
        <OrderBlock products={products} />
      </div>
    </div>
  );
};
