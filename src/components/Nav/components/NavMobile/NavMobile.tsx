import s from "./NavMobile.module.css";
import { BurgerIcon } from "../../../../icons/BurgerIcon";
import { BurgerIconClose } from "../../../../icons/BurgerIconClose";
import { RoutePath, UserAuthStatus } from "../../../../types";
import { texts } from "../../../../texts";
import { store } from "../../../../store";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firebaseApi } from "../../../../firebase/api";

interface Props {
  status: UserAuthStatus;
}

export const NavMobile: React.FC<Props> = ({ status }) => {
  const [state, setState] = useState(false);

  function tapBurger(prevState: boolean) {
    setState((prevState) => !prevState);
  }
  function closeMenu(prevState: boolean) {
    setState((prevState) => !prevState);
  }

  const { authorized, unauthorized } = texts.Navigation;
  const userState = store.getUserState();

  console.log(userState.status);
  console.log(state);

  if (userState.status === UserAuthStatus.Authorized) {
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
          {authorized.map((navTitle) => (
            <li>
              <Link
                className={s.title}
                to={navTitle.path}
                onClick={() => closeMenu(state)}
              >
                {navTitle.title}
              </Link>
            </li>
          ))}
          <button onClick={() => firebaseApi.signOut()} className={s.sign_out}>
            Sing Out
          </button>
        </ul>
      </div>
    );
  }
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
        {unauthorized.map((navTitle) => (
          <li>
            <Link
              className={s.title}
              to={navTitle.path}
              onClick={() => closeMenu(state)}
            >
              {navTitle.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
