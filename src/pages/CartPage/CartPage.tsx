import s from "./CartPage.module.css";
import { OrderBlock } from "./components/OrderBlock/OrderBlock";
import { WishList } from "./components/WishList/WishList";

export const CartPage = () => {
  return (
    <div className={s.root}>
      <h2>Корзина</h2>
      <div className={s.container}>
        <WishList />
        <OrderBlock />
      </div>
    </div>
  );
};
