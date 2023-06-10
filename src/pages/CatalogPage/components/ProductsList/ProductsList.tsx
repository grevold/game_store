import { ProductCard } from "./components/ProductCard/ProductCard";
import { Product } from "../../../../types";

import s from "./ProductsList.module.css";

interface Props {
  products: Product[];
}

export function ProductsList({ products }: Props) {
  return (
    <div className={s.root}>
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
}
