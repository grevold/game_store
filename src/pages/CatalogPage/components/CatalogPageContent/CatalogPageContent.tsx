import { useState } from "react";
import { Filter } from "../Filter/Filter";
import { ProductsList } from "../ProductsList/ProductsList";
import s from "./CatalogPageContent.module.css";
import { Product } from "../../../../types";
import { observer } from "mobx-react-lite";
import { store } from "../../../../store";

export const CatalogPageContent = observer(() => {
  const allProducts = store.getProductsState().products;
  const [products, setProducts] = useState<Product[]>(allProducts);

  function findNameGame(searchString: string, gameName: string) {
    const string1 = searchString.toLowerCase();
    const string2 = gameName.toLowerCase();
    let coincidences = 0;
    if (searchString === "" || string1 === string2) {
      return true;
    }
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] === string2[i]) {
        coincidences++;
      }
    }
    if (coincidences > 3) {
      return true;
    }
  }

  function findGenreGame(searchGenre: string, gameGenre: string) {
    if (searchGenre === "Все") {
      return true;
    }
    if (searchGenre === gameGenre) {
      return true;
    }
  }

  const handleFilterApply = (
    queryString: string,
    maxPrice: number,
    genre: string
  ) => {
    console.log(typeof queryString);
    const products = allProducts.filter(
      (product) =>
        findGenreGame(genre, product.genre) &&
        findNameGame(queryString, product.name)
    );
    setProducts(products);
  };

  return (
    <div className={s.root}>
      <Filter handleFilterApply={handleFilterApply} />
      <ProductsList products={products} />
    </div>
  );
});
