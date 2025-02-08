import "./App.css";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
