import { useState } from "react";
import { firebaseApi } from "../../../../firebase/api";

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

  const handleSubmit = (
    name: string,
    genre: string,
    developer: string,
    label: string,
    description: string,
    price: number
  ) => {
    console.log(name, genre, developer, label, description, price);
  };

  const handleFormClick = () => {
    setState({
      status: Status.Init,
    });
  };

  return { handleFormClick, handleSubmit, state };
};
