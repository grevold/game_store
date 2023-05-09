import s from "./CartPage.module.css";
import { OrderBlock } from "./components/OrderBlock/OrderBlock";
import { WishList } from "./components/WishList/WishList";
import { store } from "../../store";
import { Navigate } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../types";
import { Preloader } from "../../components/Preloader/Preloader";

export const CartPage = () => {
  const userState = store.getUserState();
  if (userState.status === UserAuthStatus.Unauthorized) {
    return <Navigate to={RoutePath.MainPage} />;
  }
  if (userState.status === UserAuthStatus.Authorized) {
    return (
      <div className={s.root}>
        <h2>Корзина</h2>
        <div className={s.container}>
          <WishList productsIds={userState.userData.cart} />
          <OrderBlock />
        </div>
      </div>
    );
  }
  return <Preloader />;
};
