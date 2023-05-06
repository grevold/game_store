import { useEffect } from "react";
import { firebaseApi } from "../../../../firebase/api";
import { useState } from "react";
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

export function useProductsList() {
  const [state, setState] = useState<State>({
    status: Status.Loading,
  });
  useEffect(() => {
    firebaseApi.fetchAllProducts().then(
      (products) => setState({ status: Status.Success, products }),
      (error) => {
        setState({ status: Status.Error });
      }
    );
  }, []);
  return { state };
}
