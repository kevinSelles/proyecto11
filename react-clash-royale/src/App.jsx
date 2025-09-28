import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Characters from "./pages/characters/characters";
import About from "./pages/about/about";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personajes" element={<Characters />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Main />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;