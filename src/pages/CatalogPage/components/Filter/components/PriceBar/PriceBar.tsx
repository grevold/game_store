import s from "./PriceBar.module.css";

export function PriceBar() {
  return <input className={s.root} type="range" />;
}
