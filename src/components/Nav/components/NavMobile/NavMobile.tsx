import { BurgerIcon } from "../../../../icons/BurgerIcon";
import { useNavMobile } from "./useNavMobile";
import { ModalMenu } from "./components/ModalMenu/ModalMenu";
import cn from "classnames";

import s from "./NavMobile.module.css";

interface Props {
  className?: string;
}

export const NavMobile: React.FC<Props> = ({ className }) => {
  const { state, handleClick } = useNavMobile();

  return (
    <>
      <div className={s.container} />
      <header className={cn(s.root, className)}>
        <BurgerIcon className={s.burgerIcon} onClick={handleClick} />
      </header>
      {state && <ModalMenu onClose={handleClick} />}
    </>
  );
};
