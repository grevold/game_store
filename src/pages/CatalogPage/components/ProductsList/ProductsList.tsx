import { Product } from "../../../../types";

import s from "./ProductsList.module.css";
import { ProductCard } from "./components/ProductCard/ProductCard";

interface Props {
  products: Product[];
}

export function ProductsList({ products }: Props) {
  return (
    <div className={s.root}>
      {products.map((product) => (
        <ProductCard productData={product} />
      ))}
    </div>
  );
}
