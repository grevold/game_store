import { useSignInForm } from "./useSignInForm";
import s from "./SignInForm.module.css";
import { Link } from "react-router-dom";

import { Logo } from "../../../../icons/Logo";
import { RoutePath } from "../../../../types";

interface Props {
  onSubmit: (email: string, password: string) => void;
  onClick: () => void;
}

export const SignInForm: React.FC<Props> = ({ onSubmit, onClick }) => {
  const { submit, register, formState } = useSignInForm(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={submit} onClick={onClick} className={s.root}>
      <div className={s.logo}>
        <Logo />
      </div>
      <h1 className={s.registration_header}>Вход в аккаунт</h1>
      <div className={s.data_row}>
        <label className={s.label}>Логин</label>
        <input {...register("email")} type="email" className={s.input} />
      </div>
      {errors.email?.message && (
        <div className={s.error_message}>{errors.email?.message}</div>
      )}
      <div className={s.data_row}>
        <label className={s.label}>Пароль</label>
        <input {...register("password")} type="password" className={s.input} />
      </div>
      {errors.password?.message && (
        <div className={s.error_message}>{errors.password?.message}</div>
      )}

      <button
        disabled={!formState.isValid}
        type="submit"
        className={s.button_sign_up}
      >
        Войти
      </button>
      <Link to={RoutePath.SignUpPage} className={s.link_to_sign_up}>
        <span>У вас нет аккаунта?</span>
      </Link>
    </form>
  );
};
