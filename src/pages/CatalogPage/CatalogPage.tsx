import { Nav } from "../../components/Nav/Nav";
import s from "./CatalogPage.module.css";
export function CatalogPage() {
    return (
        <div className={s.root}>
            <Nav />
            <h1>Каталог</h1>
        </div>
    )
}