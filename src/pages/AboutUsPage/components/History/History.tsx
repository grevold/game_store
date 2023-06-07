import s from "./History.module.css";
import rocketIcon from "./../../../../images/AboutUsIcons/rocketIcon.png";

export function History() {
  return (
    <div className={s.root}>
      <img src={rocketIcon} className={s.icon} />
      <div className={s.text}>
        <h1 className={s.title}>Сегодня мы лучше, чем вчера</h1>
        <span className={s.description}>
          Идея создания сайта зародилась в 2020 году. Два друга, увлекающиеся
          компьютерными играми, решили объединить начинающих игроков и уже
          заядлых геймеров в одном месте, чтобы помочь им покупать игры дешевле.
          Проект начал разрабатываться незамедлительно.
        </span>
      </div>
    </div>
  );
}
