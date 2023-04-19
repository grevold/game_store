import { texts } from "../../texts";

import { store } from "../../store";
import { RoutePath, UserAuthStatus } from "../../types";
import { CartIcon } from "../../icons/CartIcon";

import s from "./Nav.module.css";
import { observer } from "mobx-react-lite";
import { firebaseApi } from "../../firebase/api";
import { NavDesktop } from "./components/NavDesktop/NavDesktop";
import { NavMobile } from "./components/NavMobile/NavMobile";

export const Nav = observer(() => {
  const userState = store.getUserState();
  return (
    <>
      <NavDesktop status={userState.status} />
      <NavMobile status={userState.status} />
    </>
  );
});
