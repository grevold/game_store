import { MaxPriceBar } from "./components/MaxPriceBar/MaxPriceBar";
import { Search } from "./components/Search/Search";
import { Genre } from "./components/Genre/Genre";
import { useRef } from "react";

import s from "./Filter.module.css";

interface Props {
  handleFilterApply: (
    queryString: string,
    maxPrice: number,
    genre: string
  ) => void;
}

export function Filter({ handleFilterApply }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    const root = ref.current;
    if (!root) return;
    const queryStringInput = root.querySelector(
      "#catalogQuerySearch"
    ) as HTMLInputElement;
    const genreInput = root.querySelector(
      "#catalogGenreSelect"
    ) as HTMLSelectElement;
    const maxPrice = root.querySelector(
      "#catalogMaxPriceBar"
    ) as HTMLSelectElement;
    if (!queryStringInput || !genreInput) {
      return;
    }

    const queryString = queryStringInput.value;
    const genre = genreInput.value;
    const maxPriceBarValue = maxPrice.value;
    console.log(maxPriceBarValue);

    handleFilterApply(queryString, 0, genre);
  };

  return (
    <div ref={ref} className={s.root}>
      <h2 className={s.title}>Поиск</h2>
      <Search />
      <h2 className={s.title}>Цена</h2>
      <MaxPriceBar />
      <h2 className={s.title}>Жанр</h2>
      <Genre />
      <button onClick={handleButtonClick} className={s.button}>
        Отфильтровать
      </button>
    </div>
  );
}
