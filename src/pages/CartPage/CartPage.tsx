import { store } from "../../store";
import { Navigate } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../types";
import { observer } from "mobx-react-lite";
import { CartPageContent } from "./components/CartPageContent/CartPageContent";
import { PreloaderScreen } from "../../components/PreloaderScreen/PreloaderScreen";

import s from "./CartPage.module.css";

export const CartPage = observer(() => {
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Unauthorized) {
    return <Navigate to={RoutePath.MainPage} />;
  }

  if (userState.status === UserAuthStatus.Authorized) {
    const products = store
      .getProductsState()
      .products.filter(({ id }) => userState.userData.cart.includes(id));

    return (
      <div className={s.root}>
        <CartPageContent products={products} userId={userState.id} />
      </div>
    );
  }

  return <PreloaderScreen width={200} height={200} />;
});
