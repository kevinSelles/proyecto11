import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Characters from "./pages/characters/characters";
import About from "./pages/about/about";
import { Routes, Route } from "react-router-dom";
import CharactersByElixir from "./pages/characters/charactersByElixir";
function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Characters />} />
            <Route path="/personajes/elixir/:cost" element={<CharactersByElixir />} />
            <Route path="/informacion" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;