import { Intro } from "./components/Intro/Intro";
import { History } from "./components/History/History";

import s from "./AboutUsPage.module.css";

export function AboutUsPage() {
  return (
    <div className={s.root}>
      <Intro />
      <History />
    </div>
  );
}
