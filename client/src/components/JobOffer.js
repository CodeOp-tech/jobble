import React, { useState, useEffect } from 'react'

export default function JobOffer({ JobOffer }) {
    // const [jobOffer, setJobOffer] = useState(JobOffer)

    // useEffect(() => {
    //     setJobOffer(JobOffer)
    // }, [JobOffer])


    return (
        <div>
            <h3>
                Title: {JobOffer && JobOffer.title}
            </h3>
            <div>Type:{JobOffer && JobOffer.type}</div>
            <div>Description{JobOffer && JobOffer.description}</div>
            <div>Experience: {JobOffer && JobOffer.experience}</div>
            <div>Contract: {JobOffer && JobOffer.contract}</div>
            <div>Salary:{JobOffer && JobOffer.salary}</div>
        </div>
    )
}
