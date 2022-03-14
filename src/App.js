import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/react-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
