import { observer } from "mobx-react-lite";
import { Status, useAddProductToCartButton } from "./useAddProductToCartButton";
import { store } from "../../store";

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
        <span>
          Пожалуйста, авторизауйтесь, чтобы иметь возможность добавлять товары в
          корзину.
        </span>
      );
    }

    if (state.status === Status.Init) {
      return <button onClick={addProductToCart}>Добавить в корзину</button>;
    }

    if (state.status === Status.Error) {
      return (
        <>
          <button onClick={addProductToCart}>Добавить в корзину</button>
          <span>
            Произошла ошибка при добавлении товара в корзину. Пожалуйста,
            повторите попытку позже.
          </span>
        </>
      );
    }

    if (state.status === Status.Success) {
      return <span>Товар успешно добавлен в корзину</span>;
    }

    return <span>Загрузка...</span>;
  }
);
