import { CartIconSvg } from "../../icons/CartIconSvg";

import s from "./CartIcon.module.css";

interface Props {
  count: number;
}

export function CartIcon({ count }: Props) {
  return (
    <div className={s.root}>
      <div className={s.circle}>{count}</div>
      <CartIconSvg />
    </div>
  );
}
