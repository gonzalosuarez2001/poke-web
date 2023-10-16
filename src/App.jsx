import PokeListPage from "./pages/PokeListPage";
import { PokeNavContextProvider } from "./contexts/PokeNavContext";
import PokeInfoPage from "./pages/PokeInfoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeNav from "./components/pokeLayout/PokeNav";
import PokeTeam from "./components/pokeLayout/PokeTeam";

function App() {
  return (
    <>
      <PokeNavContextProvider>
        <Router>
          <PokeNav />
          <Routes>
            <Route path="/" element={<PokeListPage />} />
            <Route path="/pokeinfo" element={<PokeInfoPage />} />
          </Routes>
          <PokeTeam />
        </Router>
      </PokeNavContextProvider>
    </>
  );
}

export default App;
