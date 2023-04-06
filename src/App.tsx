import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";
import { CartPage } from "./pages/CartPage/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<CartPage />} path={RoutePath.CartPage} />
        <Route element={<SignUpPage />} path={RoutePath.SignUp} />
        <Route element={<MainPage />} path={RoutePath.MainPage} />
      </Routes>
    </Router>
  );
}

export default App;
