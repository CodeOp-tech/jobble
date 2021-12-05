import React, { useState, useEffect } from 'react'
import JobOffer from './JobOffer'

export default function Dashboard() {
    const [currentJob, setCurrentJob] = useState({})

    useEffect(() => {
        getJobOffer()
    }, [])


    const getJobOffer = async () => {
        try {
            const response = await fetch("/jobs/random")
            const job = await response.json()
            setCurrentJob(job)
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
                    JobId: currentJob[0].id,
                    state: status,
                }),
            })
            const job = await response.json()
            console.log(job)
            setCurrentJob(job)
        }
        catch (error) {
            console.log(error)
        }
    };


    const handleClickAcceptButton = () => {
        const status = "accepted"
        matchJobOffer(status)
        getJobOffer()

    }

    const handleClickRejectButton = () => {
        const status = "rejected"
        matchJobOffer(status)
        getJobOffer()

    }

    const handleClickSnoozetButton = () => {
        getJobOffer()

    }



    return (
        <div>
            {currentJob &&
                <div className="container">
                    <h2>Find a Job</h2>
                    <div className="card">
                        <JobOffer JobOffer={currentJob[0]}/>
                    <div className="row d-flex p-2 justify-content-sm-around">
                        <div className="col"><button onClick={handleClickRejectButton} className="btn btn-primary sm shadow">Reject</button></div>
                        <div className="col"><button onClick={handleClickSnoozetButton} className="btn btn-primary sm shadow">Snooze</button></div>
                        <div className="col"><button onClick={handleClickAcceptButton} className="btn btn-primary sm shadow">Accept</button></div>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}
