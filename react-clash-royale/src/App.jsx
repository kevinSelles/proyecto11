import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Characters from "./pages/characters/characters";
import About from "./pages/about/about";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Characters />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;