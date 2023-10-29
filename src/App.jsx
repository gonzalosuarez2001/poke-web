import PokeListPage from "./pages/PokeListPage";
import PokemonPage from "./pages/PokemonPage";
import { PokeLayoutContextProvider } from "./contexts/PokeLayoutContext";
import PokeInfoPage from "./pages/PokeInfoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeNav from "./components/pokeLayout/PokeNav";
import PokeTeam from "./components/pokeLayout/PokeTeam";

function App() {
  return (
    <>
      <PokeLayoutContextProvider>
        <Router>
          <PokeNav />
          <PokeTeam />
          <Routes>
            <Route path="/" element={<PokeListPage />} />
            <Route path="/pokeinfo" element={<PokeInfoPage />} />
            <Route path="/pokemon/:name" element={<PokemonPage />} />
          </Routes>
        </Router>
      </PokeLayoutContextProvider>
    </>
  );
}

export default App;
