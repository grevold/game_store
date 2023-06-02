import { observer } from "mobx-react-lite";
import cn from "classnames";
import { store } from "../../../../../../store";
import { Link } from "react-router-dom";
import { UserAuthStatus } from "../../../../../../types";
import { SignOutButton } from "../../../../../SignOutButton/SignOutButton";
import { BurgerIconClose } from "../../../../../../icons/BurgerIconClose";
import ScrollLock from "react-scrolllock";
import { useClickOutsideListener } from "../../../../../../hooks/useClickOutsideListener";
import { texts } from "../../../../../../texts";

import s from "./ModalMenu.module.css";

interface Props {
  className?: string;
  onClose: () => void;
}

export const ModalMenu: React.FC<Props> = observer(({ className, onClose }) => {
  const userState = store.getUserState();
  const ref = useClickOutsideListener<HTMLUListElement>(onClose);

  if (userState.status === UserAuthStatus.Authorized) {
    const routes = texts.Navigation.authorized;

    return (
      <ScrollLock>
        <div className={cn(s.root, className)}>
          <BurgerIconClose className={s.burgerIconClose} onClick={onClose} />
          <ul ref={ref} className={s.menu}>
            {routes.map(({ title, path }) => (
              <li key={title}>
                <Link className={s.link} to={path} onClick={onClose}>
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <SignOutButton className={s.sign_out_button} />
            </li>
          </ul>
        </div>
      </ScrollLock>
    );
  }

  const routes = texts.Navigation.unauthorized;

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
        </ul>
      </div>
    </ScrollLock>
  );
});
