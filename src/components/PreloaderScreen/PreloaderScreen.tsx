import { Preloader } from "../Preloader/Preloader";
import s from "./PreloaderScreen.module.css";

export function PreloaderScreen() {
  return (
    <div className={s.root}>
      <Preloader width={100} height={100} />
    </div>
  );
}
