import { BurgerIcon } from "../../../../icons/BurgerIcon";
import { BurgerIconClose } from "../../../../icons/BurgerIconClose";
import { NavRoute, UserAuthStatus, UserState } from "../../../../types";
import { Link } from "react-router-dom";
import { firebaseApi } from "../../../../firebase/api";
import { useNavMobile } from "./useNavMobile";

import s from "./NavMobile.module.css";

interface Props {
  userState: UserState;
  routes: NavRoute[];
}

export const NavMobile: React.FC<Props> = ({ userState, routes }) => {
  const { tapBurger, closeMenu, state } = useNavMobile();

  return (
    <div className={state ? s.root_open : s.root_close}>
      <button
        className={
          state ? s.button_mobile_menu_open : s.button_mobile_menu_close
        }
        onClick={() => tapBurger(state)}
      >
        {state ? <BurgerIconClose /> : <BurgerIcon />}
      </button>
      <ul className={state ? s.mobile_menu : s.mobile_menu_close}>
        {routes.map(({ title, path }) => (
          <li>
            <Link
              key={title}
              className={s.title}
              to={path}
              onClick={() => closeMenu(state)}
            >
              {title}
            </Link>
          </li>
        ))}
        {userState.status === UserAuthStatus.Authorized && (
          <li>
            <button
              onClick={() => firebaseApi.signOut()}
              className={s.sign_out}
            >
              Sing Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
