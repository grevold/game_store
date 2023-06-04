import s from "./Filter.module.css";
import { PriceBar } from "./components/PriceBar/PriceBar";
import { Search } from "./components/Search/Search";
import { Genre } from "./components/Genre/Genre";

export function Filter() {
  return (
    <div className={s.root}>
      <h2 className={s.title}>Поиск</h2>
      <Search />
      <h2 className={s.title}>Цена</h2>
      <PriceBar />
      <h2 className={s.title}>Жанр</h2>
      <Genre />
      <button className={s.button}>Отфильтровать</button>
    </div>
  );
}
