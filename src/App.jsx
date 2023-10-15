import PokeListPage from "./pages/PokeListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pokelist" element={<PokeListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
