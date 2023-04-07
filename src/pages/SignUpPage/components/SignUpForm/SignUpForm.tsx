import { useSignUpForm } from "./useSignUpForm";
import s from "./SignUpForm.module.css";

import { Logo } from "./../../../../components/logo/Logo"

interface Props {
  onSubmit: (email: string, password: string) => void;
}

export const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const { submit, register, formState } = useSignUpForm(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={submit} className={s.root}>
      <div className={s.logo}>
        <Logo />
      </div>
      <h1 className={s.registration_header}>Регистрация</h1>
      <div className={s.data_row}>
        <label className={s.label}>Логин</label>
        <input {...register("email")} type="email" className={s.input} />
      </div>
      {errors.email?.message && <div className={s.error_message}>{errors.email?.message}</div>}
      <div className={s.data_row}>
        <label className={s.label}>Пароль</label>
        <input {...register("password")} type="password" className={s.input} />
      </div>
      {errors.password?.message && <div className={s.error_message}>{errors.password?.message}</div>}
      <div className={s.data_row}>
        <label className={s.label}>Повторить пароль</label>
        <input {...register("repeatPassword")} type="password" className={s.input} />
      </div>
      {errors.repeatPassword?.message && (
        <div className={s.error_message}>{errors.repeatPassword?.message}</div>
      )}
      <button disabled={!formState.isValid} type="submit" className={s.button_sign_up}>
        Зарегистрироваться
      </button>
    </form>
  );
};
