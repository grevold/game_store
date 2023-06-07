import { SignInPageContent } from "./components/SignInPageContent/SignInPageContent";
import { store } from "../../store";
import { RoutePath, UserAuthStatus } from "../../types";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { PreloaderScreen } from "../../components/PreloaderScreen/PreloaderScreen";

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

  return <PreloaderScreen width={200} height={200} />;
});
