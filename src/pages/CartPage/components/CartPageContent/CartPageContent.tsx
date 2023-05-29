import { WishList } from "../WishList/WishList";
import { useCartPageContent } from "./useCartPageContent";
import { Status } from "./useCartPageContent";
import { OrderBlock } from "../OrderBlock/OrderBlock";
import imageNotFound from "./../../../../images/Not_found.png";

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
      <div className={s.root_null}>
        <img src={imageNotFound} className={s.not_found_img} />
        <span className={s.not_found_message}>Товары не найдены</span>
      </div>
    );
  }

  return <PreloaderScreen />;
};
