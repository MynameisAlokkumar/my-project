import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />}></Route>
      <Route path="/dashboard/:name" element={<DashboardPage/>}></Route>
    </Routes>
  );
}

export default App;
