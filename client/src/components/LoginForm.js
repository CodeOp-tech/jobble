import React, { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Noty from "noty";

import "noty/lib/themes/relax.css";
import "noty/lib/themes/mint.css";
import "noty/lib/noty.css";

export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const auth = useAuth();

  const handleChange = (e) => {
    e.persist();
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault()
    try {
      await auth.signin(user, signiWasOk, signiWasNotOk);
    } catch (err) {
      // setError(err);
    }
  };

  const signiWasOk = () => {
    navigate("/dashboard");
    new Noty({
      theme: "relax",
      text: `Welcome ${user.username}!`,
      type: "success",
    }).show();
  };

  const signiWasNotOk = (message) => {
    new Noty({
      theme: "relax",
      text: message,
      type: "error",
    }).show();
  };

  return (
    <div>
      <div className="col-sm-6 offset-sm-3">
        <form>
          <div>
            <fieldset>
              <legend>
                <h1>Login</h1>
              </legend>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="InputUsername" className="form-label">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text "
                    value={user.username}
                    onChange={(e) => handleChange(e)}
                    className="form-control shadow p-3 mb-5 bg-body rounded"
                    id="InputUsername"
                  />
                </div>
                <div>
                  <label htmlFor="InputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                    className="form-control shadow p-3 mb-5 bg-body rounded"
                    id="InputPassword"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={(e) => login(e)}
                  >
                    Log in
                  </button>
                </div>
                <div>
                  {error && (
                    <div className="alert alert-danger mt-4">{error}</div>
                  )}
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
