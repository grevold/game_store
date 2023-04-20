import { useState } from "react";

export const useNavMobile = () => {
  const [state, setState] = useState(false);
  const handleClick = () => setState((prevState) => !prevState);

  return { state, handleClick };
};
