import { AboutUsFilm } from "./components/AboutUsFilm/AboutUsFilm";
import { Banner } from "./components/Banner/Banner";
import { ProductsList } from "./components/ProductsList/ProductsList";

import s from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <Banner />
      <ProductsList />
      <AboutUsFilm />
    </div>
  );
};
