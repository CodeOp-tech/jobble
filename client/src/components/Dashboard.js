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
                <div>
                    <h2>Find a Job</h2>
                    <div>
                        <JobOffer JobOffer={currentJob[0]} />
                        <button onClick={handleClickRejectButton}>Reject</button>
                        <button onClick={handleClickSnoozetButton}>Snooze</button>
                        <button onClick={handleClickAcceptButton}>Accept</button>
                    </div>
                </div>
            }
        </div>
    )
}
