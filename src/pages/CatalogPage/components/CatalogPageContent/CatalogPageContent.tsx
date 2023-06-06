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

  function isGameNameSatisfySearchString(
    searchString: string,
    gameName: string
  ) {
    const string1 = searchString.toLowerCase();
    const string2 = gameName.toLowerCase();
    return string2.startsWith(string1);
  }

  function findGenreGame(searchGenre: string, gameGenre: string) {
    if (searchGenre === "Все") {
      return true;
    }
    return searchGenre === gameGenre;
  }

  const handleFilterApply = (
    queryString: string,
    maxPrice: number,
    genre: string
  ) => {
    const products = allProducts.filter(
      (product) =>
        findGenreGame(genre, product.genre) &&
        isGameNameSatisfySearchString(queryString, product.name) &&
        product.price <= maxPrice
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
