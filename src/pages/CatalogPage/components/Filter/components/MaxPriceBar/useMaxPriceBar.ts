import { useState } from "react";

export function useMaxPriceBar() {
  const [value, setValue] = useState<number>(1000);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setValue(value);
  }

  return { value, handleChange };
}
