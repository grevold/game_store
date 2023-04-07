import { firebaseApi } from "../../../../firebase/api";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { Nav } from "../../../../components/Nav/Nav";

import s from "./SignUpPageContent.module.css";

export const SignUpPageContent = () => {
  const handleSubmit = (email: string, password: string) =>
    firebaseApi.signUp(email, password);

  return (
    <div className={s.root}>
      <Nav />
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};
