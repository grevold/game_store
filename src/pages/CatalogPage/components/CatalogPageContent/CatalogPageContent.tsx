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

  const handleFilterApply = (
    queryString: string,
    maxPrice: number,
    genre: string
  ) => {
    const products = allProducts.filter((product) => product.genre === genre);
    setProducts(products);
  };

  return (
    <div className={s.root}>
      <Filter handleFilterApply={handleFilterApply} />
      <ProductsList products={products} />
    </div>
  );
});
