import { store } from "../../store";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../types";
import { AddProductPageContent } from "./components/AddProductPageContent/AddProductPageContent";

import s from "./AddProductPage.module.css";
import { Preloader } from "../../components/Preloader/Preloader";
import { PreloaderScreen } from "../../components/PreloaderScreen/PreloaderScreen";

export const AddProductPage = observer(() => {
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Unauthorized) {
    return <Navigate to={RoutePath.MainPage} />;
  }
  if (userState.status === UserAuthStatus.Authorized) {
    return (
      <div className={s.root}>
        <AddProductPageContent />
      </div>
    );
  }
  return <PreloaderScreen width={200} height={200} />;
});
