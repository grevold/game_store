import { useMaxPriceBar } from "./useMaxPriceBar";

import s from "./MaxPriceBar.module.css";

export const priceBarConfig = {
  min: 59,
  max: 2500,
  defaultValue: 1000,
  step: 100,
};

export function MaxPriceBar() {
  const { value, handleChange } = useMaxPriceBar();

  return (
    <div className={s.root}>
      <input
        className={s.input}
        type="number"
        onChange={handleChange}
        {...priceBarConfig}
        value={value}
      />
      <input
        id="catalogMaxPriceBar"
        className={s.bar}
        type="range"
        onChange={handleChange}
        {...priceBarConfig}
        value={value}
      />
    </div>
  );
}
