import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<h1>Hello, world!</h1>} path={"*"} />
      </Routes>
    </Router>
  );
}

export default App;
