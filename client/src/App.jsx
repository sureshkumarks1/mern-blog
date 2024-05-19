import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
