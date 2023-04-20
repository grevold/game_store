import { texts } from "../../../../texts";
import { useAddProductForm } from "./useAddProductForm";

import s from "./AddProductForm.module.css";

interface Props {
  onSubmit: (
    name: string,
    genre: string,
    developer: string,
    label: string,
    description: string,
    price: number
  ) => void;
}

export const AddProductForm: React.FC<Props> = ({ onSubmit }) => {
  const { genres } = texts.AddProduct;
  const { submit, register, formState } = useAddProductForm(onSubmit);

  return (
    <form className={s.root} onSubmit={submit}>
      <h1 className={s.header}>Добавление товара</h1>
      <div className={s.container}>
        <h2>Название</h2>
        <input className={s.input} {...register("name")}></input>
        <div className={s.developers}>
          <div className={s.developers_block}>
            <h2>Разработчик</h2>
            <input className={s.input} {...register("developer")}></input>
          </div>
          <div className={s.developers_block}>
            <h2>Издатель</h2>
            <input className={s.input} {...register("label")}></input>
          </div>
        </div>
        <h2>Жанр</h2>
        <select className={s.input} {...register("genre")}>
          {genres.map((genre) => (
            <option>{genre}</option>
          ))}
        </select>
        <h2>Описание</h2>
        <textarea
          className={s.description}
          {...register("description")}
        ></textarea>
        <div className={s.price}>
          <div>
            <h2>Цена, ₽</h2>
            <input {...register("price")} className={s.input}></input>
          </div>
          {/* <div>
            <h2>Скидка, %</h2>
            <input {...register("discount")} className={s.input}></input>
          </div>
          <div>
            <h2>Итог, ₽</h2>
            <input
              className={s.input_discount}

            ></input>
          </div> */}
        </div>
        <button className={s.button_add}>Добавить</button>
      </div>
    </form>
  );
};
