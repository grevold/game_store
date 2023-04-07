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


export interface Email {
  required: string,
  email: string
}
export interface Password {
  required: string,
  min: string,
  repeatPassword: string
}

const { email: Email, password: Password } = texts.Errors.SignUp;


const formSchema = object().shape({
  email: string()
    .required(Email.required)
    .email(Email.email),
  password: string()
    .required(Password.required)
    .min(6, Password.min),
  repeatPassword: string().oneOf([ref("password")], Password.repeatPassword),
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
