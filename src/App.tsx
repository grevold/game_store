import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { Nav } from "./components/Nav/Nav";
import { AddProductPage } from "./pages/AddProductPage/AddProductPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route element={<CartPage />} path={RoutePath.CartPage} />
        <Route element={<SignInPage />} path={RoutePath.SignInPage} />
        <Route element={<SignUpPage />} path={RoutePath.SignUpPage} />
        <Route element={<MainPage />} path={RoutePath.MainPage} />
        <Route element={<CatalogPage />} path={RoutePath.CatalogPage} />
        <Route element={<NewsPage />} path={RoutePath.NewsPage} />
        <Route element={<AddProductPage />} path={RoutePath.AddProductPage} />
      </Routes>
    </Router>
  );
}

export default App;
