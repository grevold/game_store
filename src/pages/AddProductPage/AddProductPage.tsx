import s from "./AddProductPage.module.css";

import { store } from "../../store";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../types";
import { Preloader } from "../../components/Preloader/Preloader";
import { AddProductPageContent } from "./components/AddProductPageContent/AddProductPageContent";

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
  return <Preloader width={30} height={30} />;
});
