import React, { useState, useEffect } from 'react'

export default function JobOffer({ JobOffer }) {
    const [jobOffer, setJobOffer] = useState(JobOffer)

    useEffect(() => {
        setJobOffer(JobOffer)
    }, [JobOffer])


    return (
        <div>
            <h3>
                Title: {jobOffer && jobOffer.title}
            </h3>
            <div>Type:{jobOffer && jobOffer.type}</div>
            <div>Description{jobOffer && jobOffer.description}</div>
            <div>Experience: {jobOffer && jobOffer.experience}</div>
            <div>Contract: {jobOffer && jobOffer.contract}</div>
            <div>Salary:{jobOffer && jobOffer.salary}</div>
        </div>

    )
}
