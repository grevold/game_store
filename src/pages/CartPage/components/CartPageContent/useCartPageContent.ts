import { firebaseApi } from "../../../../firebase/api";
import { useEffect, useState } from "react";
import { Product } from "../../../../types";

export enum Status {
  Init = "Init",
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}

type State =
  | {
      status: Status.Loading | Status.Error;
    }
  | {
      status: Status.Success;
      products: Product[];
    };

export function useCartPageContent(productsIds: string[]) {
  const [state, setState] = useState<State>({
    status: Status.Loading,
  });

  useEffect(() => {
    firebaseApi.fetchProductsByIds(productsIds).then(
      (products) => setState({ status: Status.Success, products }),
      () => setState({ status: Status.Error })
    );
  }, [productsIds]);

  return { state };
}
