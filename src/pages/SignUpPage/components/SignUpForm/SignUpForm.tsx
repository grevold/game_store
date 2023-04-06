import { useSignUpForm } from "./useSignUpForm";

interface Props {
  onSubmit: (email: string, password: string) => void;
}

export const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const { submit, register, formState } = useSignUpForm(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={submit}>
      <div>
        <label>Логин</label>
        <input {...register("email")} type="email" />
        {errors.email?.message && <div>{errors.email?.message}</div>}
      </div>
      <div>
        <label>Пароль</label>
        <input {...register("password")} type="password" />
        {errors.password?.message && <div>{errors.password?.message}</div>}
      </div>
      <div>
        <label>Повторить пароль</label>
        <input {...register("repeatPassword")} type="password" />
        {errors.repeatPassword?.message && (
          <div>{errors.repeatPassword?.message}</div>
        )}
      </div>
      <button disabled={!formState.isValid} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
