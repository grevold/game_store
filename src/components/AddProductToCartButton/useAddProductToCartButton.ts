import { useEffect, useState } from "react";
import { UserAuthStatus, UserState } from "../../types";
import { firebaseApi } from "../../firebase/api";

export enum Status {
  NeedToSignIn = "NeedToSignIn",
  Init = "Init",
  Loading = "Loading",
  Error = "Error",
  Success = "Success",
}

type State =
  | {
      status: Status.NeedToSignIn;
    }
  | {
      status: Status.Init;
    }
  | { status: Status.Loading }
  | {
      status: Status.Error;
      errorMessage: string;
    }
  | {
      status: Status.Success;
    };

export function useAddProductToCartButton(
  userState: UserState,
  productId: string
) {
  const [state, setState] = useState<State>({ status: Status.Loading });

  useEffect(() => {
    if (userState.status === UserAuthStatus.Authorized) {
      setState({
        status: Status.Init,
      });
    }
    if (
      userState.status === UserAuthStatus.Authorized &&
      userState.userData.cart.includes(productId)
    ) {
      setState({
        status: Status.Success,
      });
    }
    if (userState.status === UserAuthStatus.Unauthorized) {
      setState({
        status: Status.NeedToSignIn,
      });
    }
  }, [userState]);

  function addProductToCart() {
    if (
      state.status !== Status.Init ||
      userState.status !== UserAuthStatus.Authorized
    )
      return;
    setState({
      status: Status.Loading,
    });
    firebaseApi.addProductToCart(userState.id, productId).then(
      () => {
        setState({
          status: Status.Success,
        });
      },
      (error) => {
        setState({
          status: Status.Error,
          errorMessage: error.message,
        });
      }
    );
  }

  return { state, addProductToCart };
}
