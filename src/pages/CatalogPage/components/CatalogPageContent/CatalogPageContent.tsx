import { Filter } from "../Filter/Filter";
import { ProductsList } from "../ProductsList/ProductsList";
import s from "./CatalogPageContent.module.css";

export function CatalogPageContent() {
  return (
    <div className={s.root}>
      <Filter />
      <ProductsList />
    </div>
  );
}
