import s from "./AddProductPageContent.module.css"
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
        <AddProductForm onSubmit={handleSubmit}/>
        {state.status === Status.Error && (
          <span className={s.error}>
            {firebaseErrors[state.errorCode]
              ? firebaseErrors[state.errorCode]
              : firebaseErrors.default}
          </span>
        )}
      </div>
    );
  };