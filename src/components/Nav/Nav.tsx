import { NavDesktop } from "./components/NavDesktop/NavDesktop";
import { NavMobile } from "./components/NavMobile/NavMobile";

import s from "./Nav.module.css";

export const Nav = () => {
  return (
    <>
      <NavDesktop className={s.navDesktop} />
      <NavMobile className={s.navMobile} />
    </>
  );
};
