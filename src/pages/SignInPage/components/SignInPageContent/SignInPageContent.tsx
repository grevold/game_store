import { firebaseApi } from "../../../../firebase/api";
import { SignInForm } from "../SignInForm/SignInForm";

import s from "./SignInPageContent.module.css";

export const SignInPageContent = () => {
  const handleSubmit = (email: string, password: string) =>
    firebaseApi.signIn(email, password);

  return (
    <div className={s.root}>
      <SignInForm onSubmit={handleSubmit} />
    </div>
  );
};
