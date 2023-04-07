import { texts } from "../../texts";
import { Link } from "react-router-dom";
import { store } from "../../store";
import { Navigate } from "react-router-dom";
import { RoutePath, UserAuthStatus } from "../../types";
import { Cart } from "../Cart/Cart";


import s from "./Nav.module.css"
import { observer } from "mobx-react-lite";

export const Nav = observer(() => {
    const { MainPage, CatalogPage, NewsPage, SignUpPage } = texts.HeaderNav;
    const userState = store.getUserState();

    if (userState.status === UserAuthStatus.Authorized) {
        return (
            <div className={s.root}>
                <ul className={s.navigation}>
                    <li><Link className={s.title} key={MainPage} to={RoutePath.MainPage}>{MainPage}</Link></li>
                    <li><Link className={s.title} key={CatalogPage} to={RoutePath.CatalogPage}>{CatalogPage}</Link></li>
                    <li><Link className={s.title} key={NewsPage} to={RoutePath.NewsPage}>{NewsPage}</Link></li>
                </ul>
                <ul className={s.user}>
                    <li><Link className={s.title} key={SignUpPage} to={RoutePath.CartPage}><Cart /></Link></li>

                </ul>

            </div>)
    }

    return (
        <div className={s.root}>
            <ul className={s.navigation}>
                <li><Link className={s.title} key={MainPage} to={RoutePath.MainPage}>{MainPage}</Link></li>
                <li><Link className={s.title} key={CatalogPage} to={RoutePath.CatalogPage}>{CatalogPage}</Link></li>
                <li><Link className={s.title} key={NewsPage} to={RoutePath.NewsPage}>{NewsPage}</Link></li>
            </ul>
            <ul className={s.user}>
                <li><Link className={s.title} key={SignUpPage} to={RoutePath.SignUpPage}>{SignUpPage}</Link></li>

            </ul>

        </div>
    )
}
)