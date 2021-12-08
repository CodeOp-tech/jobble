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
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import FileUpload from './components/FileUpload';


// defining the routes to navigate to the home/login/register/private dashboard/
function App() {

  const [jobs, setJobs] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    getJobs()
    getUserInfo()
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch("/jobs")
      const jobs = await response.json()
      setJobs(jobs);
    } catch (error) {
      console.log(error)
    }
  }

  const getUserInfo = async () => {
    try {
      const id = localStorage.getItem("userId")
      const response = await fetch(`/users/${id}`, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") }
      })
      const user = await response.json()
      setUserInfo(user)
      if (user.admin) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

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
          {isAdmin ?
            <Route>
              <Route path="/user/dashboard" element={<AdminDashboard />} />
            </Route>
            :
            <Route>
              <Route path="/user/profile" element={<Profile userInfo={userInfo} />} />
              <Route path="/user/dashboard" element={<Dashboard />} />
              <Route path="/FileUpload" element={<FileUpload />} />
            </Route>}
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
