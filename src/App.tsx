import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route element={<CartPage />} path={RoutePath.CartPage} />
        <Route element={<SignUpPage />} path={RoutePath.SignUpPage} />
        <Route element={<MainPage />} path={RoutePath.MainPage} />
        <Route element={<CatalogPage />} path={RoutePath.CatalogPage} />
        <Route element={<NewsPage />} path={RoutePath.NewsPage} />
      </Routes>
    </Router>
  );
}

export default App;
