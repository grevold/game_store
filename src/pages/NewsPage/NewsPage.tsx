import { Nav } from "../../components/Nav/Nav";
import s from "./NewsPage.module.css";
export function NewsPage() {
    return (
        <div className={s.root}>
            <Nav />
            <h1>Новости</h1>
        </div>
    )
}