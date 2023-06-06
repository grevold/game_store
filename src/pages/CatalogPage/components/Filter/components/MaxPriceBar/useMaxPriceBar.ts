import { useState } from "react";
import { priceBarConfig } from "./MaxPriceBar";

export function useMaxPriceBar() {
  const [value, setValue] = useState<number>(priceBarConfig.defaultValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setValue(value);
  }

  return { value, handleChange };
}
