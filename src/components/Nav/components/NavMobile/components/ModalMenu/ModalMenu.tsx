import { observer } from "mobx-react-lite";
import cn from "classnames";
import { store } from "../../../../../../store";
import { mapUserStateToRoutes } from "../../../../Nav";
import { Link } from "react-router-dom";
import { UserAuthStatus } from "../../../../../../types";
import { SignOutButton } from "../../../../../SignOutButton/SignOutButton";
import { BurgerIconClose } from "../../../../../../icons/BurgerIconClose";
import ScrollLock from "react-scrolllock";

import s from "./ModalMenu.module.css";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ModalMenu: React.FC<Props> = observer(({ className, onClose }) => {
  const userState = store.getUserState();
  const routes = mapUserStateToRoutes(userState);

  return (
    <ScrollLock>
      <div className={cn(s.root, className)}>
        <BurgerIconClose className={s.burgerIconClose} onClick={onClose} />
        <ul className={s.menu}>
          {routes.map(({ title, path }) => (
            <li>
              <Link key={title} className={s.link} to={path} onClick={onClose}>
                {title}
              </Link>
            </li>
          ))}
          {userState.status === UserAuthStatus.Authorized && (
            <li>
              <SignOutButton />
            </li>
          )}
        </ul>
      </div>
    </ScrollLock>
  );
});
