import { Triangle } from "../../../../icons/Triangle";

import s from "./Advantages.module.css";

export function Advantages() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Что мы смогли создать для вас</h1>
        <ul className={s.listAdvantages}>
          <li className={s.item}>
            <Triangle />
            <h2 className={s.subTitle}>Доступные цены круглый год</h2>
            <span className={s.description}>
              скидки меняются, но не заканчиваются
            </span>
          </li>
          <li className={s.item}>
            <Triangle />
            <h2 className={s.subTitle}>Множество способов оплаты</h2>
            <span className={s.description}>
              банковские карты: Visa, Mastercard, Maestro, Мир, American
              Express, JCB, Apple Pay и Google Pay, ЮMoney, WebMoney, QIWI
              Кошелёк, оплата в терминалах и кассах, а также интернет-банки.
            </span>
          </li>
          <li className={s.item}>
            <Triangle />
            <h2 className={s.subTitle}>Широкий выбор</h2>
            <span className={s.description}>Более 2500 игр</span>
          </li>
          <li className={s.item}>
            <Triangle />
            <h2 className={s.subTitle}>Быстрая доставка</h2>
            <span className={s.description}>
              вы получаете ключ мгновенно после оплаты
            </span>
          </li>
          <li className={s.item}>
            <Triangle />
            <h2 className={s.subTitle}>Техническая поддержка</h2>
            <span className={s.description}>
              Своевременная помощь на сайте и в мессенджере
            </span>
          </li>
          <li className={s.item}>
            <Triangle />
            <h2 className={s.subTitle}>Активное комьюнити геймеров</h2>
            <span className={s.description}>
              мы уже делаем контент и набираем подписчиков в ВКонтакте, ТикТок,
              Инстаграм и Twitch
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
