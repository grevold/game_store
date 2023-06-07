import { Logo } from "../../../../icons/Logo";
import aboutPageCover from "../../../../images/aboutPageCover.png";

import s from "./Intro.module.css";

export function Intro() {
  return (
    <div
      className={s.root}
      style={{
        backgroundImage: `url("${aboutPageCover}")`,
      }}
    >
      <div className={s.darkLayout} />
      <div className={s.gradient} />
      <div className={s.greetingText}>
        <Logo />
        <span className={s.greetingTextSpan}>
          — это интернет-магазин лицензионных компьютерных игр. Наша главная
          миссия — создать неразрывное активное комьюнити геймеров.
        </span>
      </div>
    </div>
  );
}
