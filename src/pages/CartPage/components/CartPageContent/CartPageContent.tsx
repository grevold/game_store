import { WishList } from "../WishList/WishList";
import { useCartPageContent } from "./useCartPageContent";
import { Status } from "./useCartPageContent";
import { OrderBlock } from "../OrderBlock/OrderBlock";

import s from "./CartPageContent.module.css";
import { PreloaderScreen } from "../../../../components/PreloaderScreen/PreloaderScreen";

interface Props {
  productsIds: string[];
  userId: string;
}

export const CartPageContent: React.FC<Props> = ({ productsIds, userId }) => {
  const { state } = useCartPageContent(productsIds);

  if (state.status === Status.Success) {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <WishList products={state.products} userId={userId} />
          <OrderBlock products={state.products} />
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

  return <PreloaderScreen />;
};
