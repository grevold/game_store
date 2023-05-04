import s from "./OrderBlock.module.css";

export const OrderBlock = () => {
  return (
    <div className={s.root}>
      <h1 className={s.header}>Все игры и приложения</h1>
      <div className={s.cost}>
        <span className={s.cost_title}>Цена</span>
        <span className={s.cost_title}>100 ₽</span>
      </div>
      <div className={s.cost}>
        <span className={s.cost_title}>Скидка</span>
        <span className={s.cost_title}>0 %</span>
      </div>
      <hr></hr>
      <div className={s.cost}>
        <span className={s.cost_title}>Итог</span>
        <span className={s.cost_title}>100 ₽</span>
      </div>
      <button className={s.button_buy}>Оформить заказ</button>
    </div>
  );
};
