import "./App.css";
import About from "./components/about/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Works from "./components/works/Works";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
