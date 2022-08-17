import "./App.css";
import DashBoardPage from "./pages/main/dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
