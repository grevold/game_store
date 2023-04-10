import { SignInPageContent } from "./components/SignInPageContent/SignInPageContent";
import { Preloader } from "../../components/Preloader/Preloader";
import { store } from "../../store";
import { RoutePath, UserAuthStatus } from "../../types";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

export const SignInPage = observer(() => {
  const userState = store.getUserState();
  
  // Если юзер уже авторизован, то редиректим его с этой страницы.
  if (userState.status === UserAuthStatus.Authorized) {
    return <Navigate to={RoutePath.MainPage} />;
  }

  // Если юзер НЕавторизован - отображаем контент страницы.
  if (userState.status === UserAuthStatus.Unauthorized) {
    return <SignInPageContent />;
  }
  
  return <Preloader />;
});
