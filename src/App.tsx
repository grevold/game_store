import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TestFirebaseApiPage } from "./pages/TestFirebaseApiPage/TestFirebaseApiPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<TestFirebaseApiPage />} path="/test-firebase-api" />
        <Route element={<h1>Hello, world!</h1>} path={"*"} />
      </Routes>
    </Router>
  );
}

export default App;
