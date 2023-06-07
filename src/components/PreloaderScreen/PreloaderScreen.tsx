import { Preloader } from "../Preloader/Preloader";
import s from "./PreloaderScreen.module.css";

interface Props {
  width?: number;
  height?: number;
}

export function PreloaderScreen({ width, height }: Props) {
  return (
    <div className={s.root}>
      <Preloader width={width} height={height} />
    </div>
  );
}
