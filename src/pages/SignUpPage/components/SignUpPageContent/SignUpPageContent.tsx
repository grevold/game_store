import { firebaseApi } from "../../../../firebase/api";
import { SignUpForm } from "../SignUpForm/SignUpForm";

export const SignUpPageContent = () => {
  const handleSubmit = (email: string, password: string) =>
    firebaseApi.signUp(email, password);

  return (
    <div>
      <h2>Регистрация</h2>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};
