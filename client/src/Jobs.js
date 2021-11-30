import React, { useState, useEffect } from 'react'

export default function Jobs() {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getJobs()
    }, [])

    const getJobs = async () => {
        try {
            const response = await fetch("/jobs");
            const jobs = await response.json();
            setJobs(jobs)
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h2>Post an offer</h2>

        </div>
    )
}
