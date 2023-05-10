import { Product } from "../../../../types";

import s from "./OrderBlock.module.css";

interface Props {
  products: Product[];
}

export const OrderBlock: React.FC<Props> = ({ products }) => {
  const sum = products.reduce<number>(
    (accumulator, { price }) => accumulator + price,
    0
  );

  return (
    <div className={s.root}>
      <h1 className={s.header}>Все игры и приложения</h1>
      <div className={s.cost}>
        <span className={s.cost_title}>Цена</span>
        <span className={s.cost_title}>{sum} ₽</span>
      </div>
      <div className={s.cost}>
        <span className={s.cost_title}>Скидка</span>
        <span className={s.cost_title}>0 %</span>
      </div>
      <hr></hr>
      <div className={s.cost}>
        <span className={s.cost_title}>Итог</span>
        <span className={s.cost_title}>{sum} ₽</span>
      </div>
      <button className={s.button_buy}>Оформить заказ</button>
    </div>
  );
};
