import React, { useState, useEffect } from 'react'
import JobOffer from './JobOffer'

export default function Dashboard() {
    const [jobsOffers, setJobsOffers] = useState([])
    const [currentJob, setCurrentJob] = useState({})

    useEffect(() => {
        getJobsOffers()
    }, [])

    const getJobsOffers = async () => {
        try {
            const response = await fetch("/jobs")
            const jobs = await response.json()
            setJobsOffers(jobs)
            return jobs
        }
        catch (error) {
            console.log(error)
        }
    };

    const getCurrentJob = () => {
        let index;
        index = Math.floor(Math.random() * jobsOffers.length)
        let currentJob = jobsOffers[index]
        setCurrentJob(currentJob)
    }

    const handleClickAcceptButton = () => {
        getCurrentJob()

    }

    const handleClickRejectButton = () => {
        getCurrentJob()

    }



    return (
        <div>
            {jobsOffers &&
                <div>
                    <h2>Find a Job</h2>
                    <div>
                        <JobOffer JobOffer={currentJob} />
                        <button onClick={handleClickRejectButton}>Reject</button>
                        <button onClick={handleClickAcceptButton}>Accept</button>
                    </div>
                </div>
            }
        </div>
    )
}
