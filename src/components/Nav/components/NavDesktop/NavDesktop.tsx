import { Link } from "react-router-dom";
import { UserAuthStatus } from "../../../../types";
import { SignOutButton } from "../../../SignOutButton/SignOutButton";
import { CartIcon } from "../../../CartIcon/CartIcon";
import { observer } from "mobx-react-lite";
import { store } from "../../../../store";
import { texts } from "../../../../texts";
import cn from "classnames";

import s from "./NavDesktop.module.css";

interface Props {
  className?: string;
}

export const NavDesktop: React.FC<Props> = observer(({ className }) => {
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Authorized) {
    const routes = texts.Navigation.authorized;
    const { cart } = userState.userData;

    return (
      <header className={cn(s.root, className)}>
        <ul className={s.navigation}>
          {routes.map(({ title, path }) => (
            <li key={title}>
              <Link className={s.link} to={path}>
                {title === "Корзина" ? <CartIcon count={cart.length} /> : title}
              </Link>
            </li>
          ))}
          <li>
            <SignOutButton />
          </li>
        </ul>
      </header>
    );
  }

  const routes = texts.Navigation.unauthorized;
  return (
    <header className={cn(s.root, className)}>
      <ul className={s.navigation}>
        {routes.map(({ title, path }) => (
          <li key={title}>
            <Link className={s.link} to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
});
