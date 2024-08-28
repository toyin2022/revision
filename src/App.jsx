import AboutPage from "./pages/AboutPage";
import Catalog from "./pages/Catalog";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
};

export default App;
