import { Bullet } from "../../../../../../icons/Bullet";

import s from "./Activation.module.css";

export function Activation() {
  return (
    <div className={s.activation}>
      <h1>Активация</h1>
      <ul className={s.container_activation}>
        <li className={s.activation_row}>
          <div className={s.bullet}>
            <Bullet />
          </div>
          Скачайте и установите клиент Steam
        </li>
        <li className={s.activation_row}>
          <div className={s.bullet}>
            <Bullet />
          </div>
          Войдите в свой аккаунт Steam или создайте новый
        </li>
        <li className={s.activation_row}>
          <div className={s.bullet}>
            <Bullet />
          </div>
          Перейдите в раздел «Игры» и выберите «Активировать через Steam...».
        </li>
        <li className={s.activation_row}>
          <div className={s.bullet}>
            <Bullet />
          </div>
          Введите ключ активации, указанный в письме E-mail
        </li>
        <li className={s.activation_row}>
          <div className={s.bullet}>
            <Bullet />
          </div>
          После этого игра будет в Вашей библиотеке Steam, и Вы сможете её
          скачать.
        </li>
      </ul>
    </div>
  );
}
