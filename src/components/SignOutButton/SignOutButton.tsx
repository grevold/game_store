import { firebaseApi } from "../../firebase/api";
import cn from "classnames";

import s from "./SignOutButton.module.css";

interface Props {
  className?: string;
}

export const SignOutButton: React.FC<Props> = ({ className }) => {
  return (
    <button
      onClick={() => firebaseApi.signOut()}
      className={cn(s.root, className)}
    >
      Sing Out
    </button>
  );
};
