import { HashRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { AddProductPage } from "./pages/AddProductPage/AddProductPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Layout } from "./components/Layout/Layout";
import { FetchProducts } from "./components/FetchProducts/FetchProducts";

function App() {
  return (
    <HashRouter>
      <FetchProducts>
        <Layout>
          <Routes>
            <Route element={<CartPage />} path={RoutePath.CartPage} />
            <Route element={<SignInPage />} path={RoutePath.SignInPage} />
            <Route element={<SignUpPage />} path={RoutePath.SignUpPage} />
            <Route element={<CatalogPage />} path={RoutePath.CatalogPage} />
            <Route element={<NewsPage />} path={RoutePath.NewsPage} />
            <Route
              element={<AddProductPage />}
              path={RoutePath.AddProductPage}
            />
            <Route element={<ProductPage />} path={RoutePath.ProductPage} />
            <Route element={<MainPage />} path="*" />
          </Routes>
        </Layout>
      </FetchProducts>
    </HashRouter>
  );
}

export default App;
