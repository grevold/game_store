import { Link } from "react-router-dom";
import { UserAuthStatus } from "../../../../types";
import { SignOutButton } from "../../../SignOutButton/SignOutButton";
import { CartIcon } from "../../../../icons/CartIcon";
import { observer } from "mobx-react-lite";
import { store } from "../../../../store";
import { mapUserStateToRoutes } from "../../Nav";
import cn from "classnames";

import s from "./NavDesktop.module.css";

interface Props {
  className?: string;
}

export const NavDesktop: React.FC<Props> = observer(({ className }) => {
  const userState = store.getUserState();
  const routes = mapUserStateToRoutes(userState);

  return (
    <header className={cn(s.root, className)}>
      <ul className={s.navigation}>
        {routes.map(({ title, path }) => (
          <li>
            <Link className={s.link} to={path} key={title}>
              {title === "Корзина" ? <CartIcon /> : title}
            </Link>
          </li>
        ))}
        {store.getUserState().status === UserAuthStatus.Authorized && (
          <li>
            <SignOutButton />
          </li>
        )}
      </ul>
    </header>
  );
});
