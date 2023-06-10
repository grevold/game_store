import { observer } from "mobx-react-lite";
import { store } from "../../../../../../store";
import { UserAuthStatus } from "../../../../../../types";
import { texts } from "../../../../../../texts";
import { Link } from "react-router-dom";
import { Logo } from "../../../../../Logo/Logo";
import { CartIcon } from "../../../../../CartIcon/CartIcon";
import { SignOutButton } from "../../../../../SignOutButton/SignOutButton";

import s from "./NavDesktopList.module.css";

export const NavDesktopList = observer(() => {
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Authorized) {
    const routes = texts.Navigation.authorized;
    const { cart } = userState.userData;
    return (
      <ul className={s.navigation}>
        <Logo className={s.logo} />
        {routes.map(({ title, path }) => (
          <li key={title}>
            <Link className={s.link} to={path}>
              {title === "Корзина" ? <CartIcon count={cart.length} /> : title}
            </Link>
          </li>
        ))}
        <li>
          <SignOutButton className={s.sign_out_button} />
        </li>
      </ul>
    );
  }

  const routes = texts.Navigation.unauthorized;
  return (
    <ul className={s.navigation}>
      <Logo className={s.logo} />
      {routes.map(({ title, path }) => (
        <li key={title}>
          <Link className={s.link} to={path}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
});
