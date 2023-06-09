import { NavDesktopList } from "./components/NavDesktopList/NavDesktopList";
import { useNavDesktop } from "./useNavDesktop";
import cn from "classnames";

import s from "./NavDesktop.module.css";

interface Props {
  className?: string;
}

export const NavDesktop: React.FC<Props> = ({ className }) => {
  const { ref } = useNavDesktop();

  return (
    <header ref={ref} className={cn(s.root, className)}>
      <NavDesktopList />
    </header>
  );
};
