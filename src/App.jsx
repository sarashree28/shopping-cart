import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
