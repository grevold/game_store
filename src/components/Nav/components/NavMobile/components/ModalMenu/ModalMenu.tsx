import { observer } from "mobx-react-lite";
import cn from "classnames";
import { store } from "../../../../../../store";
import { mapUserStateToRoutes } from "../../../../Nav";
import { Link } from "react-router-dom";
import { UserAuthStatus } from "../../../../../../types";
import { SignOutButton } from "../../../../../SignOutButton/SignOutButton";
import { BurgerIconClose } from "../../../../../../icons/BurgerIconClose";
import ScrollLock from "react-scrolllock";
import { useClickOutsideListener } from "../../../../../../hooks/useClickOutsideListener";

import s from "./ModalMenu.module.css";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ModalMenu: React.FC<Props> = observer(({ className, onClose }) => {
  const userState = store.getUserState();
  const routes = mapUserStateToRoutes(userState);
  const ref = useClickOutsideListener<HTMLUListElement>(onClose);

  return (
    <ScrollLock>
      <div className={cn(s.root, className)}>
        <BurgerIconClose className={s.burgerIconClose} />
        <ul ref={ref} className={s.menu}>
          {routes.map(({ title, path }) => (
            <li key={title}>
              <Link className={s.link} to={path} onClick={onClose}>
                {title}
              </Link>
            </li>
          ))}
          {userState.status === UserAuthStatus.Authorized && (
            <li className={cn(s.sign_out_button, className)}>
              <SignOutButton className={s.sign_out_button} />
            </li>
          )}
        </ul>
      </div>
    </ScrollLock>
  );
});
