import { useState } from "react";
import { firebaseApi } from "../../firebase/api";

export enum Status {
  Init = "Init",
  Loading = "Loading",
  Error = "Error",
}

type State =
  | {
      status: Status.Init;
    }
  | { status: Status.Loading }
  | {
      status: Status.Error;
      errorMessage: string;
    };

export function useRemoveProductFromCartButton(
  userId: string,
  productId: string
) {
  const [state, setState] = useState<State>({ status: Status.Init });

  function handleClick() {
    setState({ status: Status.Loading });
    firebaseApi
      .removeFromCart(userId, productId)
      .catch((error) =>
        setState({ status: Status.Error, errorMessage: error })
      );
  }

  return { state, handleClick };
}
