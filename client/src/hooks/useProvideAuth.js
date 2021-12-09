import { useState } from "react";
import axios from "axios";

// this is a custom hook that provides a reactive state to know if the user is authenticated or not
// it also provides two functions to signin and signout
function useProvideAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const signin = async (user, cb = () => { }, onError = () => { }) => {
    try {
      const { data } = await axios.post("/authentication/login", user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("admin", data.admin);
      setIsLoggedIn(true);
      // an open door so we can do anything after logging in
      cb(data);
    } catch (err) {
      // throw err.response.data.message;
      onError(err.response.data.message);
    }
  };

  const signout = (cb = () => { }) => {
    localStorage.clear("token");
    localStorage.clear("userId");
    localStorage.clear("admin");
    setIsLoggedIn(null);
    cb();
  };

  return {
    isLoggedIn,
    signin,
    signout,
  };
}

export default useProvideAuth;