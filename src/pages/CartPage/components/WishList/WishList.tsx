import { CartProduct } from "./components/CartProduct/CartProduct";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { useWishList } from "./useWishList";
import { Status } from "./useWishList";

import s from "./WishList.module.css";

export const WishList = () => {
  const { state } = useWishList();

  if (state.status === Status.Success) {
    return (
      <div className={s.root}>
        {state.products.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))}
      </div>
    );
  }

  if (state.status === Status.Error) {
    return (
      <div className={s.container}>
        <span>Не удалось загрузить товары</span>
      </div>
    );
  }

  return <Preloader />;
};
