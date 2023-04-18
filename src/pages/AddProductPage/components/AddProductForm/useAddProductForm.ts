import { useForm } from "react-hook-form";
import { object, number, string } from "yup";
import { texts } from "../../../../texts";
import { yupResolver } from "@hookform/resolvers/yup";

export interface FormValues {
  name: string;
  genre: string;
  developer: string;
  label: string;
  description: string;
  price: number;
}
const formSchema = object().shape({
  name: string().required(texts.Errors.AddProductError),
  genre: string().required(texts.Errors.AddProductError),
  developer: string().required(texts.Errors.AddProductError),
  label: string().required(texts.Errors.AddProductError),
  description: string().required(texts.Errors.AddProductError),
  price: number().required(texts.Errors.AddProductError),
});

export const useAddProductForm = (
  onSubmit: (
    name: string,
    genre: string,
    developer: string,
    label: string,
    description: string,
    price: number
  ) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });
  const submit = handleSubmit(
    ({ name, genre, developer, label, description, price }: FormValues) =>
      onSubmit(name, genre, developer, label, description, price)
  );

  return { submit, register, formState };
};
