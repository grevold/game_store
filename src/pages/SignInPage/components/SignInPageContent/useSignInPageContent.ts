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

export const useSignInPageContent = () => {
  const [state, setState] = useState<State>({
    status: Status.Init,
  });

  const handleSubmit = (email: string, password: string) => {
    setState({
      status: Status.Loading,
    });
    firebaseApi.signIn(email, password).catch((error) => {
      setState({
        status: Status.Error,
        errorCode: error.code,
      });
    });
  };

  const handleFormClick = () => {
    setState({
      status: Status.Init,
    });
  };

  return { handleFormClick, handleSubmit, state };
};
