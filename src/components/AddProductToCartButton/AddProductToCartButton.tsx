import { observer } from "mobx-react-lite";
import { Status, useAddProductToCartButton } from "./useAddProductToCartButton";
import { store } from "../../store";
import s from "./AddProductToCartButton.module.css";
import { Preloader } from "../Preloader/Preloader";
import { Link } from "react-router-dom";
import { RoutePath } from "../../types";

interface Props {
  productId: string;
  className?: string;
  text: string;
}

export const AddProductToCartButton: React.FC<Props> = observer(
  ({ productId, className, text }) => {
    const userState = store.getUserState();
    const { state, addProductToCart } = useAddProductToCartButton(
      userState,
      productId
    );

    if (state.status === Status.NeedToSignIn) {
      return (
        <Link to={RoutePath.SignInPage}>
          <button className={s.button}>{text}</button>
        </Link>
      );
    }

    if (state.status === Status.Init) {
      return (
        <button onClick={addProductToCart} className={s.button}>
          {text}
        </button>
      );
    }

    if (state.status === Status.Error) {
      return (
        <>
          <button onClick={addProductToCart} className={s.button}>
            {text}
          </button>
          <span className={s.message_error}>
            Произошла ошибка при добавлении товара в корзину. Пожалуйста,
            повторите попытку позже.
          </span>
        </>
      );
    }

    if (state.status === Status.Success) {
      return (
        <span className={s.message_success}>
          Товар успешно добавлен в корзину
        </span>
      );
    }
    return <Preloader className={s.preloader} />;
  }
);
