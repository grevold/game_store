import { texts } from "../../texts";
import { Link } from "react-router-dom";
import { store } from "../../store";
import { RoutePath, UserAuthStatus } from "../../types";
import { CartIcon } from "../../icons/CartIcon";

import s from "./Nav.module.css";
import { observer } from "mobx-react-lite";
import { firebaseApi } from "../../firebase/api";

export const Nav = observer(() => {
  const { MainPage, CatalogPage, NewsPage, SignUpPage, SignInPage, AddProductPage } =
    texts.HeaderNav;
  const userState = store.getUserState();

  if (userState.status === UserAuthStatus.Authorized) {
    return (
      <div className={s.root}>
        <ul className={s.navigation}>
          <li>
            <Link className={s.title} to={RoutePath.MainPage}>
              {MainPage}
            </Link>
          </li>
          <li>
            <Link
              className={s.title}

              to={RoutePath.CatalogPage}
            >
              {CatalogPage}
            </Link>
          </li>
          <li>
            <Link className={s.title} to={RoutePath.NewsPage}>
              {NewsPage}
            </Link>
          </li>
        </ul>
        <ul className={s.user}>
          <li>
            <Link className={s.title} to={RoutePath.AddProductPage}>
              {AddProductPage}
            </Link>
          </li>
          <li>
            <Link className={s.title} to={RoutePath.CartPage}>
              <CartIcon />
            </Link>
          </li>
          <li>
            <button onClick={() => firebaseApi.signOut()} className={s.sign_out}>Sing Out</button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <ul className={s.navigation}>
        <li>
          <Link className={s.title} to={RoutePath.MainPage}>
            {MainPage}
          </Link>
        </li>
        <li>
          <Link
            className={s.title}

            to={RoutePath.CatalogPage}
          >
            {CatalogPage}
          </Link>
        </li>
        <li>
          <Link className={s.title} to={RoutePath.NewsPage}>
            {NewsPage}
          </Link>
        </li>
      </ul>
      <ul className={s.user}>
        <li>
          <Link className={s.title} to={RoutePath.SignInPage}>
            {SignInPage}
          </Link>
        </li>
        <li>
          <Link className={s.title} to={RoutePath.SignUpPage}>
            {SignUpPage}
          </Link>
        </li>
      </ul>
    </div>
  );
});
