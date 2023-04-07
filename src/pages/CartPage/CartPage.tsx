import s from "./CartPage.module.css";
import { Nav } from "../../components/Nav/Nav";

export const CartPage = () => {
    return (
        <div className={s.root}>
            <Nav />
            <h2>Корзина</h2>
        </div>)
}