import { texts } from "./../../../../../../texts";

import s from "./Genre.module.css";

export function Genre() {
  return (
    <select id="catalogGenreSelect" className={s.root}>
      {texts.AddProduct.genres.map((genre) => (
        <option key={genre} className={s.option}>
          {genre}
        </option>
      ))}
    </select>
  );
}
