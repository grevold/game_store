import { Link } from "react-router-dom";
import { UserAuthStatus } from "../../../../types";
import { SignOutButton } from "../../../SignOutButton/SignOutButton";
import { CartIcon } from "../../../CartIcon/CartIcon";
import { observer } from "mobx-react-lite";
import { store } from "../../../../store";
import { texts } from "../../../../texts";
import cn from "classnames";

import s from "./NavDesktop.module.css";
import { Logo } from "../../../Logo/Logo";

interface Props {
  className?: string;
}

export const NavDesktop: React.FC<Props> = observer(({ className }) => {
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Authorized) {
    const routes = texts.Navigation.authorized;
    const { cart } = userState.userData;
    console.log(cart);

    return (
      <header className={cn(s.root, className)}>
        <ul className={s.navigation}>
          <Link to={"/"}>
            <Logo className={s.logo} />
          </Link>
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
      </header>
    );
  }

  const routes = texts.Navigation.unauthorized;
  return (
    <header className={cn(s.root, className)}>
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
    </header>
  );
});
