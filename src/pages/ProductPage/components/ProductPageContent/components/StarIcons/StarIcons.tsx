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
      {rateStars.map((star, index) => (
        <StarIcon key={`${star}_${index}`} />
      ))}
      {defaultStarts.map((star, index) => (
        <StarIconDefault key={`${star}_${index}`} />
      ))}
    </div>
  );
}