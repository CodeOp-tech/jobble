import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployerJob from './EmployerJob';
import "./AdminDashboard.css";

export default function AdminDashboard() {
    const [employerMatches, setEmployerMatches] = useState([])


    useEffect(() => {
        getEmployerMatches()
    }, []);

    const getEmployerMatches = async () => {
        try {
            const id = localStorage.getItem("userId")
            const response = await fetch(`/matches/employers/${id}`,
                { headers: { authorization: "Bearer " + localStorage.getItem("token") } })
            const jobs = await response.json()
            setEmployerMatches(jobs);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div class="container">
            <div class="row gx-5">
                <h2 class="display-5 col">Your offers</h2>
                <Link to="/user/dashboard/add" class="btn btn-outline-dark col add-offer-button px-1">Add new offer</Link>
                {employerMatches.length && employerMatches.map((jobMatch) =>
                    <div key={jobMatch.id}>
                        <EmployerJob jobMatch={jobMatch} />
                    </div>)}
            </div>
        </div>
    )
}
