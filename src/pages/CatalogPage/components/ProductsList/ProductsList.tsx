import { Product } from "../../../../types";

import s from "./ProductsList.module.css";

interface Props {
  products: Product[];
}

export function ProductsList({ products }: Props) {
  return (
    <div className={s.root}>
      {products.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
}
