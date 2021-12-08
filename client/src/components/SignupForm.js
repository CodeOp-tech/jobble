import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function SignupForm() {
    const [newUser, setNewUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        isAdmin: 0
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        let { value, name } = event.target;
        value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        console.log(value)
        setNewUser((state) => ({ ...state, [name]: value }));
    }

    const signup = async (e) => {
        e.preventDefault();

        // axios("/authentication/register", {
        //     method: "POST",
        //     data: newUser,
        // })
        //     .then((result) => {
        //         navigate("/login");
        //     })
        //     .catch((error) => console.log(error));

        try {
            const { firstname, lastname, username, password, email } = newUser;
            let { isAdmin } = newUser
            if (isAdmin) {
                isAdmin = 1
            }
            else {
                isAdmin = 0
            }
            console.log(isAdmin)
            const response = await fetch("/authentication/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    admin: isAdmin,
                    username: username
                }),
            });
            const data = await response.json();
            navigate("/login")
            // setNewUser(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <form onSubmit={(e) => signup(e)}>
                    <div>
                        <fieldset>
                            <legend><h1>Sign Up</h1></legend>
                            <div className="form-row">
                                <div className="">
                                    <label>Firstname</label>
                                    <input name="firstname" type="text " value={newUser.firstname} onChange={(e) => handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded" />
                                </div>
                                <div className="">
                                    <label>Lastname</label>
                                    <input name="lastname" type="text " value={newUser.lastname} onChange={(e) => handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded" />
                                </div>

                                <div className="">
                                    <label>Username</label>
                                    <input name="username" type="text " value={newUser.username} onChange={(e) => handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded" />
                                </div>

                                <div>
                                    <label>Password</label>
                                    <input name="password" type="password" value={newUser.password} onChange={(e) => handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded" />
                                </div>
                                <div>
                                    <label>Email Adress</label>
                                    <input name="email" type="email" value={newUser.email} onChange={(e) => handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded" />
                                </div>
                                <div className="form-check form-switch">
                                    <label>I'm a company</label>
                                    <input name="isAdmin" type="checkbox" value={newUser.isAdmin} checked={newUser.isAdmin} onChange={(e) => handleChange(e)} className="form-check-input shadow mb-5" />
                                </div>
                                <div>
                                    <button type="submit" onClick={signup} className="btn btn-primary mtcd-2">Submit</button>
                                </div>

                            </div>
                        </fieldset>
                    </div>

                </form>
            </div>

        </div>
    )
}
