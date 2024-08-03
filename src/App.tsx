import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DroneDetailePage from "./pages/DroneDetailePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/drone/:id" element={<DroneDetailePage />} />
      </Routes>
    </Router>
  );
}

export default App;
