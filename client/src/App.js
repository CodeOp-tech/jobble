import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AuthProvider from "./components/AuthProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// defining the routes to navigate to the home/login/register/private dashboard/
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<SignupForm />} />
        <PrivateRoute>
          <Route path="/dashboard" element={<Dashboard />} />{/* Need to make this private after Maria is done doing the component */}
        </PrivateRoute>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
