import { useEffect, useState } from "react";
import { firebaseApi } from "../../firebase/api";
import { Product } from "../../types";

export enum Status {
  Loading = "Loading",
  NotFound = "NotFound",
  Success = "Success",
  Error = "Error",
}

type State =
  | {
      status: Status.Loading | Status.Error | Status.NotFound;
    }
  | {
      status: Status.Success;
      product: Product;
    };

export function useProductPage(productId: string | null) {
  const [state, setState] = useState<State>({
    status: Status.Loading,
  });
  useEffect(() => {
    if (!productId) {
      setState({ status: Status.NotFound });
      return;
    }
    firebaseApi.fetchProductById(productId).then(
      (product) => {
        if (product) {
          setState({ status: Status.Success, product: product });
        } else {
          setState({ status: Status.NotFound });
        }
      },
      (error) => {
        setState({ status: Status.Error });
      }
    );
  }, []);
  return { state };
}
