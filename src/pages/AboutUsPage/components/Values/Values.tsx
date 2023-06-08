import { Separator } from "../../../../icons/Separator";

import s from "./Values.module.css";

export function Values() {
  return (
    <div className={s.root}>
      <h1 className={s.header}>Ценности компании</h1>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.value}>
            <Separator />
            <span>Только твёрдая, полная, сравнительная информация</span>
          </li>
          <li className={s.value}>
            <Separator />
            <span>
              Качество — главное в нашем деле: никакого посредственного
              отношения к работе.
            </span>
          </li>
          <li className={s.value}>
            <Separator />
            <span>Важен поиск и использование любых возможностей.</span>
          </li>
          <li className={s.value}>
            <Separator />
            <span>Работа в команде даёт наилучший результат.</span>
          </li>
          <li className={s.value}>
            <Separator />
            <span>Клиент превыше всего</span>
          </li>
          <li className={s.value}>
            <Separator />
            <span>Маниакальная страсть к мелочам</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
