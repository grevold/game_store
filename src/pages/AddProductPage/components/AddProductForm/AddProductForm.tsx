import { ImagesUploader } from "../../../../components/ImagesUploader/ImagesUploader";
import { AddProductFormValues, useAddProductForm } from "./useAddProductForm";
import { texts } from "../../../../texts";
import { Controller } from "react-hook-form";

import s from "./AddProductForm.module.css";

interface Props {
  onSubmit: (addProductFormValues: AddProductFormValues) => void;
  onClick: () => void;
}

export const AddProductForm: React.FC<Props> = ({ onSubmit, onClick }) => {
  const { genres } = texts.AddProduct;
  const { submit, register, formState, control } = useAddProductForm(onSubmit);

  return (
    <form className={s.root} onSubmit={submit} onClick={onClick}>
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
            <option className={s.input_option} key={genre}>
              {genre}
            </option>
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
          <div>
            <h2>Рейтинг</h2>
            <select {...register("rate")} className={s.rate}>
              <option className={s.rate_option}>1</option>
              <option className={s.rate_option}>2</option>
              <option className={s.rate_option}>3</option>
              <option className={s.rate_option}>4</option>
              <option className={s.rate_option}>5</option>
              <option className={s.rate_option}>6</option>
              <option className={s.rate_option}>7</option>
              <option className={s.rate_option}>8</option>
              <option className={s.rate_option}>9</option>
              <option className={s.rate_option}>10</option>
            </select>
          </div>
        </div>
        <Controller
          name="images"
          control={control}
          render={({ field: { onChange } }) => (
            <ImagesUploader onSelect={onChange} className={s.imagesUploader} />
          )}
        />
        <h1 className={s.title}>Минимальные системные требования</h1>
        <h2>OC</h2>
        <input className={s.input} {...register("oc")}></input>
        <h2>Видеокарта</h2>
        <input className={s.input} {...register("videoCard")}></input>
        <h2>Процессор</h2>
        <input className={s.input} {...register("processor")}></input>
        <div className={s.systemReqNumbers}>
          <div>
            <h2>Место на диске, Гб</h2>
            <input className={s.input} {...register("diskSpace")}></input>
          </div>
          <div>
            <h2>Оперативная память, Гб</h2>
            <input className={s.input} {...register("ram")}></input>
          </div>
        </div>
        <button className={s.button_add} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};
