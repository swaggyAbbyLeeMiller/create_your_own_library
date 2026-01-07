import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}
