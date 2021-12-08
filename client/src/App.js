import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AuthProvider from "./components/AuthProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import JobList from './components/JobList';
import JobOffer from './components/JobOffer';
import Admin from './components/Admin';
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import FileUpload from './components/FileUpload';


// defining the routes to navigate to the home/login/register/private dashboard/
function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs")
      .then((res) => res.json())
      .then((json) => {
        setJobs(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home jobs={jobs} setJobsCb={jobs => setJobs(jobs)} />} />
          <Route path="/jobs" element={<JobList jobs={jobs} />} />
          <Route path="/jobs/:id" element={<JobOffer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/FileUpload" element={<FileUpload />} />
          <Route path="/user/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
