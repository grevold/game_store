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
      status: Status.Error;
      data: [];
    }
  | {
      status: Status.Success;
      data: Product[];
    }
  | {
      status: Status.Loading;
      data: [];
    };

export function useProductsList() {
  const [state, setState] = useState<State>({
    status: Status.Loading,
    data: [],
  });
  useEffect(() => {
    firebaseApi.fetchAllProducts().then(
      (data) => setState({ status: Status.Success, data: [...data] }),
      () => setState({ status: Status.Error, data: [] })
    );
  }, []);
  return { state };
}
