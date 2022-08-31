import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/Login/Login";
import Main from "./components/Main/main";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Signup from "./components/Signup/Signup";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/passwore-reset/:id/:token" element={<PasswordReset />} />
    </Routes>
  );
}

export default App;
