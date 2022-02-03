import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Balance } from "./pages";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </BrowserRouter>
  );
}