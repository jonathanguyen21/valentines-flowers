import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Flower from "./components/Flower.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import AcceptScreen from "./screens/AcceptScreen.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="flower" element={<AcceptScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

export default App;
