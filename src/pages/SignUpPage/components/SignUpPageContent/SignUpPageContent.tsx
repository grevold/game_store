import { firebaseApi } from "../../../../firebase/api";
import { SignUpForm } from "../SignUpForm/SignUpForm";

import s from "./SignUpPageContent.module.css";

export const SignUpPageContent = () => {
  const handleSubmit = (email: string, password: string) =>
    firebaseApi.signUp(email, password);

  return (
    <div className={s.root}>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};
