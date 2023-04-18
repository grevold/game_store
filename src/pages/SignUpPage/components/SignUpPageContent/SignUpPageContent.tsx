import { firebaseApi } from "../../../../firebase/api";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { Status, useSignUpPageContent } from "./useSignUpPageContent";
import { texts } from "../../../../texts";
import { Preloader } from "../../../../components/Preloader/Preloader";

import s from "./SignUpPageContent.module.css";

export const SignUpPageContent = () => {
  const { handleFormClick, handleSubmit, state } = useSignUpPageContent();
  const firebaseErrors: any = texts.Errors.SignUp.firebaseErrors;

  if (state.status === Status.Loading) {
    return <Preloader />;
  }

  return (
    <div className={s.root}>
      <SignUpForm onSubmit={handleSubmit} />
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
