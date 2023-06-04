import { observer } from "mobx-react-lite";
import { useFetchProducts } from "./useFetchProducts";
import { PropsWithChildren } from "react";
import { store } from "../../store";
import { FetchProductsStatus } from "../../types";

interface Props {}

export const FetchProducts: React.FC<PropsWithChildren<Props>> = observer(
  ({ children }) => {
    const productsState = store.getProductsState();
    useFetchProducts();

    if (productsState.status === FetchProductsStatus.Success) {
      return <>{children}</>;
    }

    if (productsState.status === FetchProductsStatus.Error) {
      return <h1>Ошибка, попробуйте перезагрузить страницу</h1>;
    }

    return <h1>Загрузка...</h1>;
  }
);
