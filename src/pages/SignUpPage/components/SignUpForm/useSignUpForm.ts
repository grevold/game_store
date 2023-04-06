import { useForm } from "react-hook-form";
import { object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

const formSchema = object().shape({
  email: string()
    .required("email нужно обязательно указать")
    .email("email невалидный"),
  password: string()
    .required("пароль нужно обязательно придумать")
    .min(6, "минимальная длина пароля должна быть 6 символов"),
  repeatPassword: string().oneOf([ref("password")], "пароли не совпадают"),
});

export const useSignUpForm = (
  onSubmit: (email: string, password: string) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ email, password }: FormValues) =>
    onSubmit(email, password)
  );

  return { submit, register, formState };
};
