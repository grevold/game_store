import { Preloader } from "../Preloader/Preloader";
import {
  Status,
  useRemoveProductFromCartButton,
} from "./useRemoveProductFromCartButton";
import cn from "classnames";
import { TrashDeleteIcon } from "../../icons/TrashDeleteIcon";

import s from "./RemoveProductFromCartButton.module.css";

interface Props {
  userId: string;
  productId: string;
  className?: string;
}

export const RemoveProductFromCartButton: React.FC<Props> = ({
  userId,
  productId,
  className,
}) => {
  const buttonClassName = cn(s.button, className);
  const { state, handleClick } = useRemoveProductFromCartButton(
    userId,
    productId
  );

  if (state.status === Status.Init) {
    return (
      <TrashDeleteIcon className={buttonClassName} onClick={handleClick} />
    );
  }
  if (state.status === Status.Error) {
    return (
      <>
        <TrashDeleteIcon className={buttonClassName} onClick={handleClick} />
        <span>Не удалось удалить товар</span>
      </>
    );
  }
  return <Preloader width={30} height={30} />;
};
