import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import JobOffer from './JobOffer'

export default function Dashboard() {
    const [currentJob, setCurrentJob] = useState(null)

    useEffect(() => {
        getJobOffer()
    }, [])


    const getJobOffer = async () => {
        try {
            const response = await fetch("/jobs/random", {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            const jobs = await response.json()
            setCurrentJob(jobs[0])
        }
        catch (error) {
            console.log(error)
        }
    };

    const matchJobOffer = async (status) => {
        try {
            const response = await fetch("/matches", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    JobId: currentJob.id,
                    state: status,
                }),
            })
            const job = await response.json()
            console.log(job)
            // setCurrentJob(job)
        }
        catch (error) {
            console.log(error)
        }
    };

    const addFavorites = async () => {
        try {
            const response = await fetch("/favorites/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    JobId: currentJob.id
                }),
            })
            const job = await response.json()
            console.log(job)
            // setCurrentJob(job)
        }
        catch (error) {
            console.log(error)
        }
    };


    const handleClickAcceptButton = async () => {
        const status = "accepted"
        await matchJobOffer(status)
        getJobOffer()

    }

    const handleClickRejectButton = async () => {
        const status = "rejected"
        await matchJobOffer(status)
        getJobOffer()

    }

    const handleClickFavoritesButton = async () => {
        await addFavorites()
        getJobOffer()

    }



    return (
        <div>
            {currentJob &&
                <div className="container">
                    <h2>Find a Job</h2>
                    <div className="card shadow bg-light">
                        <JobOffer jobOffer={currentJob}/>
                    <div className="row d-flex p-2 justify-content-sm-around">
                        <div className="col"><button onClick={handleClickRejectButton} className="btn btn-danger sm shadow">Reject</button></div>
                        <div className="col"><button onClick={handleClickFavoritesButton} className="btn btn-dark sm shadow">Favorite</button></div>
                        <div className="col"><Link to={"/FileUpload"}><button onClick={handleClickAcceptButton} className="btn btn-success sm shadow">Accept</button></Link></div>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}
