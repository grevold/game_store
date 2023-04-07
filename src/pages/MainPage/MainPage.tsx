import { Nav } from "../../components/Nav/Nav";
import s from "./MainPage.module.css"
export const MainPage = () => {
    return (
        <div className={s.root}>
            <Nav />
            <h1>Главная страница</h1>
        </div>
    )
}