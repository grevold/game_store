import s from "./NavDesktop.module.css";
import { Link } from "react-router-dom";
import { NavRoute, UserAuthStatus, UserState } from "../../../../types";
import { firebaseApi } from "../../../../firebase/api";
import { CartIcon } from "../../../../icons/CartIcon";

interface Props {
  userState: UserState;
  routes: NavRoute[];
}

export const NavDesktop: React.FC<Props> = ({ userState, routes }) => {
  return (
    <div className={s.root}>
      <div className={s.navigation}>
        <ul className={s.navigation}>
          {routes.map(({ title, path }) => (
            <li>
              <Link className={s.title} to={path} key={title}>
                {title === "Корзина" ? <CartIcon /> : title}
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
    </div>
  );
};
