import React, { useState, useEffect } from 'react'
import EmployerJob from './EmployerJob';

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

    // display information on who applied to a job

    return (
        <div class="container">
            <h2 class="display-5">Your offers</h2>
            {employerMatches.length && employerMatches.map((jobMatch) =>
                <div key={jobMatch.id}>
                    <EmployerJob jobMatch={jobMatch} />
                </div>)}
        </div>
    )
}
