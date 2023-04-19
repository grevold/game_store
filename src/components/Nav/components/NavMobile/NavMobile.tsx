import { texts } from "../../../../texts";
import s from "./NavMobile.module.css";
import { BurgerIcon } from "../../../../icons/BurgerIcon";
import { RoutePath, UserAuthStatus } from "../../../../types";

interface Props {
  status: UserAuthStatus;
}

export const NavMobile: React.FC<Props> = ({ status }) => {
  return (
    <div className={s.root}>
      <BurgerIcon />
    </div>
  );
};
