import { StarIcon } from "../../../../../../icons/StarIcon";
import { StarIconDefault } from "../../../../../../icons/StarIconDefault";

interface Props {
  rate: number;
}

export function StarIcons({ rate }: Props) {
  const rateStars = Array.from({ length: rate });
  const defaultStarts = Array.from({ length: 10 - rate });

  return (
    <div>
      {rateStars.map((star) => (
        <StarIcon />
      ))}
      {defaultStarts.map((star) => (
        <StarIconDefault />
      ))}
    </div>
  );
}
