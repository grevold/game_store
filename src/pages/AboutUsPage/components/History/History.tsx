import s from "./History.module.css";
import rocketIcon from "./../../../../images/AboutUsIcons/rocketIcon.png";
import friendsIcon from "./../../../../images/AboutUsIcons/friendsIcon.png";
import puzzleIcon from "./../../../../images/AboutUsIcons/puzzleIcon.png";
import instrumentsIcon from "./../../../../images/AboutUsIcons/instrumentsIcon.png";
import tentsIcon from "./../../../../images/AboutUsIcons/tentsIcon.png";

export function History() {
  return (
    <div className={s.root}>
      <ul className={s.container}>
        <li className={s.block}>
          <img src={rocketIcon} className={s.icon} />
          <div className={s.text}>
            <h1 className={s.title}>Идея создания</h1>
            <span className={s.description}>
              Идея создания сайта зародилась в 2020 году. Два друга,
              увлекающиеся компьютерными играми, решили объединить начинающих
              игроков и уже заядлых геймеров в одном месте, чтобы помочь им
              покупать игры дешевле. Проект начал разрабатываться
              незамедлительно.
            </span>
          </div>
        </li>
        <li className={s.block}>
          <img src={friendsIcon} className={s.icon} />
          <div className={s.text}>
            <h1 className={s.title}>История компании</h1>
            <span className={s.description}>
              Идея создания сайта зародилась в 2020 году. Два друга,
              увлекающиеся компьютерными играми, решили объединить начинающих
              игроков и уже заядлых геймеров в одном месте, чтобы помочь им
              покупать игры дешевле. Проект начал разрабатываться
              незамедлительно.
            </span>
          </div>
        </li>
        <li className={s.block}>
          <img src={puzzleIcon} className={s.icon} />
          <div className={s.text}>
            <h1 className={s.title}>Первые трудности</h1>
            <span className={s.description}>
              Уже тогда начались первые трудности. Технические недоработки,
              неверная структура сайта, нехватка людей в команде… И как
              следствие — обманутые ожидания. Как видите, мы не сдались. Мы
              просто верили в то, что комьюнити будет существовать.
            </span>
          </div>
        </li>
        <li className={s.block}>
          <img src={instrumentsIcon} className={s.icon} />
          <div className={s.text}>
            <h1 className={s.title}>Расширение штата</h1>
            <span className={s.description}>
              Над проектом тогда старались более 5 человек, но чувствовалась
              серьёзная нехватка кадров. Первым делом мы собрали команду людей,
              которые горели идеей также, как и те два парня в самом начале
              пути. Вместе мы смогли выявить главные ошибки и даже временно
              остановили сайт, чтобы создать верную структуру и подачу продукта,
              улучшить дизайн и устранить недоработки.
            </span>
          </div>
        </li>
        <li className={s.block}>
          <img src={tentsIcon} className={s.icon} />
          <div className={s.text}>
            <h1 className={s.title}>Расширение комьюнити</h1>
            <span className={s.description}>
              Мы совершенствовали не только сайт, но и все социальные сети,
              чтобы комьюнити было максимально крепким и неразрушимым. В итоге
              мы собрали команду более чем из 10 человек, которая постоянно
              работает над продуктом, сайтом, сервисом и узнаваемостью.
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
