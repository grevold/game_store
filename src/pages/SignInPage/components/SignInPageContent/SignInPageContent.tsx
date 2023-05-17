import { SignInForm } from "../SignInForm/SignInForm";
import { Status, useSignInPageContent } from "./useSignInPageContent";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { texts } from "../../../../texts";

import s from "./SignInPageContent.module.css";

export const SignInPageContent = () => {
  const { handleFormClick, handleSubmit, state } = useSignInPageContent();
  const firebaseErrors: any = texts.Errors.SignIn.firebaseErrors;

  if (state.status === Status.Loading) {
    return <Preloader width={30} height={30} />;
  }

  return (
    <div className={s.root}>
      <SignInForm onSubmit={handleSubmit} onClick={handleFormClick} />
      {state.status === Status.Error && (
        <span className={s.error}>
          {firebaseErrors[state.errorCode]
            ? firebaseErrors[state.errorCode]
            : firebaseErrors.default}
        </span>
      )}
    </div>
  );
};
