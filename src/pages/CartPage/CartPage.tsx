import { store } from "../../store";
import { Navigate } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../types";
import { observer } from "mobx-react-lite";
import { CartPageContent } from "./components/CartPageContent/CartPageContent";
import { PreloaderScreen } from "../../components/PreloaderScreen/PreloaderScreen";

export const CartPage = observer(() => {
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Unauthorized) {
    return <Navigate to={RoutePath.MainPage} />;
  }

  if (userState.status === UserAuthStatus.Authorized) {
    return (
      <CartPageContent
        productsIds={userState.userData.cart}
        userId={userState.id}
      />
    );
  }

  return <PreloaderScreen />;
});
