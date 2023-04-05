import { useEffect } from "react";
import { firebaseApi } from "../../firebase/api";

export const useTestFirebaseApiPage = () => {
  useEffect(() => {
    firebaseApi.createDocument("123").then(
      () => {
        console.log("Документ успешно записан в базу данных");
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
};
