import { useForm } from "react-hook-form";
import { object, number, string, array } from "yup";
import { texts } from "../../../../texts";
import { yupResolver } from "@hookform/resolvers/yup";

export interface AddProductFormValues {
  name: string;
  genre: string;
  developer: string;
  label: string;
  description: string;
  price: number;
  images: File[];
  rate: number;
  oc: string;
  videoCard: string;
  diskSpace: number;
  ram: number;
  processor: string;
  key: string;
}
const formSchema = object().shape({
  name: string().required(texts.Errors.AddProductError),
  genre: string().required(texts.Errors.AddProductError),
  developer: string().required(texts.Errors.AddProductError),
  label: string().required(texts.Errors.AddProductError),
  description: string().required(texts.Errors.AddProductError),
  price: number().required(texts.Errors.AddProductError),
  images: array(),
  oc: string(),
  videoCard: string(),
  diskSpace: number(),
  ram: number(),
  processor: string(),
  key: string(),
});

export const useAddProductForm = (
  onSubmit: (addProductFormValues: AddProductFormValues) => void
) => {
  const { register, handleSubmit, formState, control } =
    useForm<AddProductFormValues>({
      mode: "onTouched",
      // @ts-ignore
      resolver: yupResolver(formSchema),
    });
  const submit = handleSubmit((addProductFormValues: AddProductFormValues) =>
    onSubmit(addProductFormValues)
  );

  return { submit, register, formState, control };
};
