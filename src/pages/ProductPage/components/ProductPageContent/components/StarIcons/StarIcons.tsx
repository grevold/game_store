import { StarIcon } from "../../../../../../icons/StarIcon";
import { StarIconDefault } from "../../../../../../icons/StarIconDefault";

import s from "./StarIcons.module.css";

interface Props {
  rate: number;
}

export function StarIcons({ rate }: Props) {
  const array = Array.from({ length: 10 });

  return (
    <ul className={s.root}>
      {array.map((_, index) => (
        <li key={index}>{index < rate ? <StarIcon /> : <StarIconDefault />}</li>
      ))}
    </ul>
  );
}
