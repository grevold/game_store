import { Preloader } from "../../components/Preloader/Preloader";
import { ProductsList } from "./components/ProductsList/ProductsList";

import s from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <ProductsList />
    </div>
  );
};
