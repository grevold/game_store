import { useForm } from "react-hook-form";
import { object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
}




const { email, password } = texts.Errors.SignIn;


const formSchema = object().shape({
  email: string()
    .required(email.required)
    .email(email.email),
  password: string()
    .required(password.required)
    .min(6, password.min),
});

export const useSignInForm = (
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
