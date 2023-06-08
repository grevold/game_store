import { useState } from "react";
import { ArrowDown } from "../../../../icons/ArrowDown";
import { ArrowUp } from "../../../../icons/ArrowUp";
import { texts } from "../../../../texts";

import s from "./AboutUsFilm.module.css";

export function AboutUsFilm() {
  const [state, setState] = useState(false);
  const { fullText } = texts.AboutUsMainPage;

  return (
    <div className={s.root}>
      <h1 className={s.header}>Посмотрите наш промо-ролик</h1>
      <iframe
        className={s.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xej0Uzz0140"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <button
        className={s.button_show_full}
        onClick={() => setState((prevState) => !prevState)}
      >
        Узнать больше {state === false ? <ArrowDown /> : <ArrowUp />}
      </button>
      <span className={s.text}>{state === false ? null : fullText}</span>
    </div>
  );
}
