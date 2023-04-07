import { SignUpPageContent } from "./components/SignUpPageContent/SignUpPageContent";
import { Preloader } from "../../components/Preloader/Preloader";
import { store } from "../../store";
import { RoutePath, UserAuthStatus } from "../../types";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import s from "./SignUpPage.module.css";

export const SignUpPage = observer(() => {
  const userState = store.getUserState();
  // Если юзер уже авторизован, то редиректим его с этой страницы.
  if (userState.status === UserAuthStatus.Authorized) {
    return <Navigate to={RoutePath.CartPage} />;
  }

  // Если юзер НЕавторизован - отображаем контент страницы.
  if (userState.status === UserAuthStatus.Unauthorized) {
    return <SignUpPageContent />;
  }
  return <Preloader />;
});
