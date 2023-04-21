import { useState } from "react";
import { firebaseApi } from "../../../../firebase/api";
import { AddProductFormValues } from "../AddProductForm/useAddProductForm";

export enum Status {
  Init = "Init",
  Loading = "Loading",
  Error = "Error",
  Success = "Success",
}

type State =
  | {
      status: Status.Init | Status.Loading | Status.Success;
    }
  | {
      status: Status.Error;
      errorCode: string;
    };

export const useAddProductPageContent = () => {
  const [state, setState] = useState<State>({
    status: Status.Init,
  });

  const handleSubmit = (addProductFormValues: AddProductFormValues) => {
    setState({
      status: Status.Loading,
    });
    firebaseApi.addProduct(addProductFormValues).then(
      () => {
        setState({
          status: Status.Success,
        });
      },
      (error: any) => {
        setState({
          status: Status.Error,
          errorCode: error.code,
        });
      }
    );
  };

  const handleFormClick = () => {
    setState({
      status: Status.Init,
    });
  };

  return { handleFormClick, handleSubmit, state };
};
