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
}

export const AddProductToCartButton: React.FC<Props> = observer(
  ({ productId, className }) => {
    const userState = store.getUserState();
    const { state, addProductToCart } = useAddProductToCartButton(
      userState,
      productId
    );

    if (state.status === Status.NeedToSignIn) {
      return (
        <Link to={RoutePath.SignInPage}>
          <button className={className}>В корзину</button>
        </Link>
      );
    }

    if (state.status === Status.Init) {
      return (
        <button onClick={addProductToCart} className={className}>
          В корзину
        </button>
      );
    }

    if (state.status === Status.Error) {
      return (
        <>
          <button onClick={addProductToCart} className={className}>
            В корзину
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
        <Link to={RoutePath.CartPage} className={s.link}>
          <button onClick={addProductToCart} className={s.button_go_to_cart}>
            Перейти в корзину
          </button>
        </Link>
      );
    }
    return (
      <button onClick={addProductToCart} className={s.button_go_to_cart}>
        <Preloader className={s.preloader} />
      </button>
    );
  }
);
