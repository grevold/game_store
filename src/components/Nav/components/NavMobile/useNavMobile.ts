import { useState } from "react";

export const useNavMobile = () => {
  const [state, setState] = useState(false);

  function tapBurger(prevState: boolean) {
    setState((prevState) => !prevState);
  }
  function closeMenu(prevState: boolean) {
    setState((prevState) => !prevState);
  }

  return { tapBurger, closeMenu, state };
};
