import { Intro } from "./components/Intro/Intro";
import { History } from "./components/History/History";
import { Advantages } from "./components/Advantages/Advantages";
import { Values } from "./components/Values/Values";

import s from "./AboutUsPage.module.css";
import { Film } from "./components/Film/Film";
import { Music } from "./components/Music/Music";

export function AboutUsPage() {
  return (
    <div className={s.root}>
      <Music />
      <Intro />
      <History />
      <Advantages />
      <Values />
      <Film />
    </div>
  );
}