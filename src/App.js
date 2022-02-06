import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Balance, Input, Output, Update } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/input" element={<Input />} />        
          <Route path="/output" element={<Output />} />
          <Route path="/update/:idMovement" element={<Update />} />    
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}