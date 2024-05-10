import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Characters from "./pages/characters";
import Episodes from "./pages/episodes";
import Locations from "./pages/locations";
import Char from "./pages/characters/[slug]";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/characters/:slug" element={<Char />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/locations" element={<Locations />}></Route>
        <Route path="/char" element={<Char />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
