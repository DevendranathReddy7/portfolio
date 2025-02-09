import "./App.css";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
