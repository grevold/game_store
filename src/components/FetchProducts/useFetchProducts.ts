import { useEffect } from "react";
import { firebaseApi } from "../../firebase/api";

export const useFetchProducts = () => {
  useEffect(() => {
    firebaseApi.fetchAllProductsAndPutThemToStore();
  }, []);
};
