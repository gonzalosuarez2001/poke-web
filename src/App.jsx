import PokeListPage from "./pages/PokeListPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PokeListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
