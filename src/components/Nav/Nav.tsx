import { store } from "../../store";
import { observer } from "mobx-react-lite";
import { NavDesktop } from "./components/NavDesktop/NavDesktop";
import { NavMobile } from "./components/NavMobile/NavMobile";

import s from "./Nav.module.css";

export const Nav = observer(() => {
  const userState = store.getUserState();

  return (
    <>
      <NavDesktop className={s.navDesktop} />
      <NavMobile className={s.navMobile} />
    </>
  );
});
