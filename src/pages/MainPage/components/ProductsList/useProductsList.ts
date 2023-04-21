import { useEffect } from "react";
import { firebaseApi } from "../../../../firebase/api";

export function useProductsList() {
  useEffect(() => {
    firebaseApi.fetchAllProducts().then((data) => console.log(data));
  }, []);
}
