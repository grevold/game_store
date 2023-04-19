import { texts } from "../../../../texts";
import s from "./NavDesktop.module.css";
import { Link } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../../../types";
import { firebaseApi } from "../../../../firebase/api";
import { CartIcon } from "../../../../icons/CartIcon";

interface Props {
  status: UserAuthStatus;
}

export const NavDesktop: React.FC<Props> = ({ status }) => {
  const { authorized, unauthorized } = texts.Navigation;

  if (status === UserAuthStatus.Authorized) {
    return (
      <div className={s.root}>
        <div className={s.navigation}>
          <ul className={s.navigation}>
            {authorized.map((navTitle) => (
              <li>
                <Link className={s.title} to={navTitle.path}>
                  {navTitle.title === "Корзина" ? <CartIcon /> : navTitle.title}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => firebaseApi.signOut()}
                className={s.sign_out}
              >
                Sing Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className={s.root}>
      <div className={s.navigation}>
        <ul className={s.navigation}>
          {unauthorized.map((navTitle) => (
            <li>
              <Link className={s.title} to={navTitle.path}>
                {navTitle.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
