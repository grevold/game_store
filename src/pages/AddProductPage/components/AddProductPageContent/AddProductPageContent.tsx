import s from "./AddProductPageContent.module.css";
import { texts } from "../../../../texts";
import { Preloader } from "../../../../components/Preloader/Preloader";
import { Status, useAddProductPageContent } from "./useAddProductPageContent";
import { AddProductForm } from "../AddProductForm/AddProductForm";

export const AddProductPageContent = () => {
  const { handleFormClick, handleSubmit, state } = useAddProductPageContent();
  const firebaseErrors: any = texts.Errors.SignUp.firebaseErrors;

  if (state.status === Status.Loading) {
    return <Preloader />;
  }

  return (
    <div className={s.root}>
      <AddProductForm onSubmit={handleSubmit} onClick={handleFormClick} />
      {state.status === Status.Error && (
        <span className={s.errorMessage}>
          {firebaseErrors[state.errorCode]
            ? firebaseErrors[state.errorCode]
            : firebaseErrors.default}
        </span>
      )}
      {state.status === Status.Success && (
        <span className={s.successMessage}>Товар успешно создан!</span>
      )}
    </div>
  );
};
