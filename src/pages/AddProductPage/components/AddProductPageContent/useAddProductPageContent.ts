import { useState } from "react";
import { firebaseApi } from "../../../../firebase/api";
import { AddProductFormValues } from "../AddProductForm/useAddProductForm";

export enum Status {
  Init = "Init",
  Loading = "Loading",
  Error = "Error",
}

type State =
  | {
      status: Status.Init | Status.Loading;
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
    console.log(addProductFormValues);
  };

  const handleFormClick = () => {
    setState({
      status: Status.Init,
    });
  };

  return { handleFormClick, handleSubmit, state };
};
