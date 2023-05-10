import { WishList } from "../WishList/WishList";
import { useCartPageContent } from "./useCartPageContent";
import { Status } from "./useCartPageContent";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { OrderBlock } from "../OrderBlock/OrderBlock";

import s from "./CartPageContent.module.css";

interface Props {
  productsIds: string[];
  userId: string;
}

export const CartPageContent: React.FC<Props> = ({ productsIds, userId }) => {
  const { state } = useCartPageContent(productsIds);

  if (state.status === Status.Success) {
    return (
      <div className={s.root}>
        <h2>Корзина</h2>
        <div className={s.container}>
          <OrderBlock products={state.products} />
          <WishList products={state.products} userId={userId} />
        </div>
      </div>
    );
  }

  if (state.status === Status.Error) {
    return (
      <div className={s.root}>
        <span>Не удалось загрузить товары</span>
      </div>
    );
  }

  return <Preloader />;
};
